<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Media;
use App\Models\Medium;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JMac\Testing\Traits\AdditionalAssertions;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\MediaController
 */
final class MediaControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $media = Media::factory()->count(3)->create();

        $response = $this->get(route('media.index'));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function store_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\MediaController::class,
            'store',
            \App\Http\Requests\MediaStoreRequest::class
        );
    }

    #[Test]
    public function store_saves(): void
    {
        $response = $this->post(route('media.store'));

        $response->assertCreated();
        $response->assertJsonStructure([]);

        $this->assertDatabaseHas(media, [ /* ... */ ]);
    }


    #[Test]
    public function show_behaves_as_expected(): void
    {
        $medium = Media::factory()->create();

        $response = $this->get(route('media.show', $medium));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function update_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\MediaController::class,
            'update',
            \App\Http\Requests\MediaUpdateRequest::class
        );
    }

    #[Test]
    public function update_behaves_as_expected(): void
    {
        $medium = Media::factory()->create();

        $response = $this->put(route('media.update', $medium));

        $medium->refresh();

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function destroy_deletes_and_responds_with(): void
    {
        $medium = Media::factory()->create();
        $medium = Medium::factory()->create();

        $response = $this->delete(route('media.destroy', $medium));

        $response->assertNoContent();

        $this->assertModelMissing($medium);
    }
}
