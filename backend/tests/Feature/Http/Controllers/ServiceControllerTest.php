<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Service;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JMac\Testing\Traits\AdditionalAssertions;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\ServiceController
 */
final class ServiceControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $services = Service::factory()->count(3)->create();

        $response = $this->get(route('services.index'));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function store_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\ServiceController::class,
            'store',
            \App\Http\Requests\ServiceStoreRequest::class
        );
    }

    #[Test]
    public function store_saves(): void
    {
        $description = $this->faker->text();
        $experiencia = $this->faker->word();
        $precio_por_hora = $this->faker->randomNumber();
        $user = User::factory()->create();

        $response = $this->post(route('services.store'), [
            'description' => $description,
            'experiencia' => $experiencia,
            'precio_por_hora' => $precio_por_hora,
            'user_id' => $user->id,
        ]);

        $services = Service::query()
            ->where('description', $description)
            ->where('experiencia', $experiencia)
            ->where('precio_por_hora', $precio_por_hora)
            ->where('user_id', $user->id)
            ->get();
        $this->assertCount(1, $services);
        $service = $services->first();

        $response->assertCreated();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function show_behaves_as_expected(): void
    {
        $service = Service::factory()->create();

        $response = $this->get(route('services.show', $service));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function update_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\ServiceController::class,
            'update',
            \App\Http\Requests\ServiceUpdateRequest::class
        );
    }

    #[Test]
    public function update_behaves_as_expected(): void
    {
        $service = Service::factory()->create();
        $description = $this->faker->text();
        $experiencia = $this->faker->word();
        $precio_por_hora = $this->faker->randomNumber();
        $user = User::factory()->create();

        $response = $this->put(route('services.update', $service), [
            'description' => $description,
            'experiencia' => $experiencia,
            'precio_por_hora' => $precio_por_hora,
            'user_id' => $user->id,
        ]);

        $service->refresh();

        $response->assertOk();
        $response->assertJsonStructure([]);

        $this->assertEquals($description, $service->description);
        $this->assertEquals($experiencia, $service->experiencia);
        $this->assertEquals($precio_por_hora, $service->precio_por_hora);
        $this->assertEquals($user->id, $service->user_id);
    }


    #[Test]
    public function destroy_deletes_and_responds_with(): void
    {
        $service = Service::factory()->create();

        $response = $this->delete(route('services.destroy', $service));

        $response->assertNoContent();

        $this->assertModelMissing($service);
    }
}
