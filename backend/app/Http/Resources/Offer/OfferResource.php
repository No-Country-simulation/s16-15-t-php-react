<?php

namespace App\Http\Resources\Offer;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Message\MessageCollection;
use App\Http\Resources\Finished\FinishedResource;


class OfferResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'presupuesto' => $this->presupuesto,
            'fecha_limite' => $this->fecha_limite,
            'detalles' => $this->detalles,
            'user:cliente_id' => $this->user_cliente_id,
            'user:freelancer_id' => $this->user_freelancer_id,
            'messages' => MessageCollection::make($this->whenLoaded('messages')),
            'finished' => FinishedResource::make($this->whenLoaded('finished')),
        ];
    }
}
