<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Message;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JMac\Testing\Traits\AdditionalAssertions;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\MessageController
 */
final class MessageControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    #[Test]
    public function index_behaves_as_expected(): void
    {
        $messages = Message::factory()->count(3)->create();

        $response = $this->get(route('messages.index'));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function store_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\MessageController::class,
            'store',
            \App\Http\Requests\MessageStoreRequest::class
        );
    }

    #[Test]
    public function store_saves(): void
    {
        $message = $this->faker->word();

        $response = $this->post(route('messages.store'), [
            'message' => $message,
        ]);

        $messages = Message::query()
            ->where('message', $message)
            ->get();
        $this->assertCount(1, $messages);
        $message = $messages->first();

        $response->assertCreated();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function show_behaves_as_expected(): void
    {
        $message = Message::factory()->create();

        $response = $this->get(route('messages.show', $message));

        $response->assertOk();
        $response->assertJsonStructure([]);
    }


    #[Test]
    public function update_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\MessageController::class,
            'update',
            \App\Http\Requests\MessageUpdateRequest::class
        );
    }

    #[Test]
    public function update_behaves_as_expected(): void
    {
        $message = Message::factory()->create();
        $message = $this->faker->word();

        $response = $this->put(route('messages.update', $message), [
            'message' => $message,
        ]);

        $message->refresh();

        $response->assertOk();
        $response->assertJsonStructure([]);

        $this->assertEquals($message, $message->message);
    }


    #[Test]
    public function destroy_deletes_and_responds_with(): void
    {
        $message = Message::factory()->create();

        $response = $this->delete(route('messages.destroy', $message));

        $response->assertNoContent();

        $this->assertModelMissing($message);
    }
}
