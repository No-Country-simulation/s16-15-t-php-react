<?php

namespace App\Http\Resources\Tool;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

use App\Http\Resources\User\UserCollection;

class ToolResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'users' => UserCollection::make($this->whenLoaded('users')),
        ];
    }
}
