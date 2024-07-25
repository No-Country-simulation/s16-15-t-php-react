<?php

namespace App\Http\Resources\Service;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\User\UserResource;
use App\Http\Resources\Category\CategoryCollection;

class ServiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'description' => $this->description,
            'external_portfolio' => $this->external_portfolio,
            'experiencia' => $this->experiencia,
            'precio_por_hora' => $this->precio_por_hora,
            'user_id' => $this->user_id,
            'categories' => CategoryCollection::make($this->whenLoaded('categories')),
            'user' => UserResource::make($this->whenLoaded('user')),
        ];
    }
}
