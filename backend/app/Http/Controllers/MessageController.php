<?php

namespace App\Http\Controllers;

use App\Http\Requests\Message\MessageStoreRequest;
use App\Http\Requests\Message\MessageUpdateRequest;
use App\Http\Resources\Message\MessageCollection;
use App\Http\Resources\Message\MessageResource;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use Spatie\QueryBuilder\QueryBuilder;

class MessageController extends Controller
{
    public function index(Request $request): MessageCollection
    {
        $messages = QueryBuilder::for(Message::class)
            ->allowedFilters('offer_id','user:client_id','user:freelancer_id','active')
            ->where('user_id', auth()->id())
            ->paginate()->withQueryString();

        return new MessageCollection($messages);
    }

    public function store(MessageStoreRequest $request): MessageResource
    {
        $message = Message::create($request->validated());

        return new MessageResource($message);
    }

    public function show(Request $request, Message $message): MessageResource
    {
        return new MessageResource($message);
    }

    public function update(MessageUpdateRequest $request, Message $message): MessageResource
    {
        $message->update($request->validated());

        return new MessageResource($message);
    }

    public function destroy(Request $request, Message $message): Response
    {
        $message->delete();

        return response()->noContent();
    }
}