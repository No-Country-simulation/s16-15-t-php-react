<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Ofert;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JMac\Testing\Traits\AdditionalAssertions;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\OfertController
 */
final class OfertControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $oferts = Ofert::factory()->count(3)->create();

        $response = $this->get(route('oferts.index'));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function store_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\OfertController::class,
            'store',
            \App\Http\Requests\OfertStoreRequest::class
        );
    }

    #[Test]
    public function store_saves(): void
    {
        $response = $this->post(route('oferts.store'));

        $response->assertCreated();
        $response->assertJsonStructure([]);

        $this->assertDatabaseHas(oferts, [ /* ... */ ]);
    }


    #[Test]
    public function show_behaves_as_expected(): void
    {
        $ofert = Ofert::factory()->create();

        $response = $this->get(route('oferts.show', $ofert));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function update_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\OfertController::class,
            'update',
            \App\Http\Requests\OfertUpdateRequest::class
        );
    }

    #[Test]
    public function update_behaves_as_expected(): void
    {
        $ofert = Ofert::factory()->create();

        $response = $this->put(route('oferts.update', $ofert));

        $ofert->refresh();

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function destroy_deletes_and_responds_with(): void
    {
        $ofert = Ofert::factory()->create();

        $response = $this->delete(route('oferts.destroy', $ofert));

        $response->assertNoContent();

        $this->assertModelMissing($ofert);
    }
}
