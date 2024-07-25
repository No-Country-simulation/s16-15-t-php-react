<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Tool;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JMac\Testing\Traits\AdditionalAssertions;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\ToolController
 */
final class ToolControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $tools = Tool::factory()->count(3)->create();

        $response = $this->get(route('tools.index'));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function store_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\ToolController::class,
            'store',
            \App\Http\Requests\ToolStoreRequest::class
        );
    }

    #[Test]
    public function store_saves(): void
    {
        $nombre = $this->faker->word();

        $response = $this->post(route('tools.store'), [
            'nombre' => $nombre,
        ]);

        $tools = Tool::query()
            ->where('nombre', $nombre)
            ->get();
        $this->assertCount(1, $tools);
        $tool = $tools->first();

        $response->assertCreated();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function show_behaves_as_expected(): void
    {
        $tool = Tool::factory()->create();

        $response = $this->get(route('tools.show', $tool));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function update_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\ToolController::class,
            'update',
            \App\Http\Requests\ToolUpdateRequest::class
        );
    }

    #[Test]
    public function update_behaves_as_expected(): void
    {
        $tool = Tool::factory()->create();
        $nombre = $this->faker->word();

        $response = $this->put(route('tools.update', $tool), [
            'nombre' => $nombre,
        ]);

        $tool->refresh();

        $response->assertOk();
        $response->assertJsonStructure([]);

        $this->assertEquals($nombre, $tool->nombre);
    }


    #[Test]
    public function destroy_deletes_and_responds_with(): void
    {
        $tool = Tool::factory()->create();

        $response = $this->delete(route('tools.destroy', $tool));

        $response->assertNoContent();

        $this->assertModelMissing($tool);
    }
}
