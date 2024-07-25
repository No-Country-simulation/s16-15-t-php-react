<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Finished;
use App\Models\Offer;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JMac\Testing\Traits\AdditionalAssertions;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\FinishedController
 */
final class FinishedControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $finisheds = Finished::factory()->count(3)->create();

        $response = $this->get(route('finisheds.index'));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function store_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\FinishedController::class,
            'store',
            \App\Http\Requests\FinishedStoreRequest::class
        );
    }

    #[Test]
    public function store_saves(): void
    {
        $employer_score = $this->faker->word();
        $freelancer_score = $this->faker->word();
        $was_completed = $this->faker->boolean();
        $offer = Offer::factory()->create();

        $response = $this->post(route('finisheds.store'), [
            'employer_score' => $employer_score,
            'freelancer_score' => $freelancer_score,
            'was_completed' => $was_completed,
            'offer_id' => $offer->id,
        ]);

        $finisheds = Finished::query()
            ->where('employer_score', $employer_score)
            ->where('freelancer_score', $freelancer_score)
            ->where('was_completed', $was_completed)
            ->where('offer_id', $offer->id)
            ->get();
        $this->assertCount(1, $finisheds);
        $finished = $finisheds->first();

        $response->assertCreated();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function show_behaves_as_expected(): void
    {
        $finished = Finished::factory()->create();

        $response = $this->get(route('finisheds.show', $finished));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function update_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\FinishedController::class,
            'update',
            \App\Http\Requests\FinishedUpdateRequest::class
        );
    }

    #[Test]
    public function update_behaves_as_expected(): void
    {
        $finished = Finished::factory()->create();
        $employer_score = $this->faker->word();
        $freelancer_score = $this->faker->word();
        $was_completed = $this->faker->boolean();
        $offer = Offer::factory()->create();

        $response = $this->put(route('finisheds.update', $finished), [
            'employer_score' => $employer_score,
            'freelancer_score' => $freelancer_score,
            'was_completed' => $was_completed,
            'offer_id' => $offer->id,
        ]);

        $finished->refresh();

        $response->assertOk();
        $response->assertJsonStructure([]);

        $this->assertEquals($employer_score, $finished->employer_score);
        $this->assertEquals($freelancer_score, $finished->freelancer_score);
        $this->assertEquals($was_completed, $finished->was_completed);
        $this->assertEquals($offer->id, $finished->offer_id);
    }


    #[Test]
    public function destroy_deletes_and_responds_with(): void
    {
        $finished = Finished::factory()->create();

        $response = $this->delete(route('finisheds.destroy', $finished));

        $response->assertNoContent();

        $this->assertModelMissing($finished);
    }
}
