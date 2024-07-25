<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\App\Models\User;
use App\Models\Offer;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Carbon;
use JMac\Testing\Traits\AdditionalAssertions;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\OfferController
 */
final class OfferControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $offers = Offer::factory()->count(3)->create();

        $response = $this->get(route('offers.index'));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function store_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\OfferController::class,
            'store',
            \App\Http\Requests\OfferStoreRequest::class
        );
    }

    #[Test]
    public function store_saves(): void
    {
        $presupuesto = $this->faker->randomNumber();
        $fecha_limite = Carbon::parse($this->faker->dateTime());
        $detalles = $this->faker->text();
        $user:client = App\Models\User::factory()->create();
        $user:freelancer = App\Models\User::factory()->create();

        $response = $this->post(route('offers.store'), [
            'presupuesto' => $presupuesto,
            'fecha_limite' => $fecha_limite->toDateTimeString(),
            'detalles' => $detalles,
            'user:client_id' => $user:client->id,
            'user:freelancer_id' => $user:freelancer->id,
        ]);

        $offers = Offer::query()
            ->where('presupuesto', $presupuesto)
            ->where('fecha_limite', $fecha_limite)
            ->where('detalles', $detalles)
            ->where('user:client_id', $user:client->id)
            ->where('user:freelancer_id', $user:freelancer->id)
            ->get();
        $this->assertCount(1, $offers);
        $offer = $offers->first();

        $response->assertCreated();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function show_behaves_as_expected(): void
    {
        $offer = Offer::factory()->create();

        $response = $this->get(route('offers.show', $offer));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function update_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\OfferController::class,
            'update',
            \App\Http\Requests\OfferUpdateRequest::class
        );
    }

    #[Test]
    public function update_behaves_as_expected(): void
    {
        $offer = Offer::factory()->create();
        $presupuesto = $this->faker->randomNumber();
        $fecha_limite = Carbon::parse($this->faker->dateTime());
        $detalles = $this->faker->text();
        $user:client = App\Models\User::factory()->create();
        $user:freelancer = App\Models\User::factory()->create();

        $response = $this->put(route('offers.update', $offer), [
            'presupuesto' => $presupuesto,
            'fecha_limite' => $fecha_limite->toDateTimeString(),
            'detalles' => $detalles,
            'user:client_id' => $user:client->id,
            'user:freelancer_id' => $user:freelancer->id,
        ]);

        $offer->refresh();

        $response->assertOk();
        $response->assertJsonStructure([]);

        $this->assertEquals($presupuesto, $offer->presupuesto);
        $this->assertEquals($fecha_limite->timestamp, $offer->fecha_limite);
        $this->assertEquals($detalles, $offer->detalles);
        $this->assertEquals($user:client->id, $offer->user:client_id);
        $this->assertEquals($user:freelancer->id, $offer->user:freelancer_id);
    }


    #[Test]
    public function destroy_deletes_and_responds_with(): void
    {
        $offer = Offer::factory()->create();

        $response = $this->delete(route('offers.destroy', $offer));

        $response->assertNoContent();

        $this->assertModelMissing($offer);
    }
}
