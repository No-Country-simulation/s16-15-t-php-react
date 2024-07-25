<?php

namespace App\Http\Resources\Finished;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

use App\Http\Resources\Offer\OfferResource;

class FinishedResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'employer_score' => $this->employer_score,
            'freelancer_score' => $this->freelancer_score,
            'was_completed' => $this->was_completed,
            'offer_id' => $this->offer_id,
            'offer' => OfferResource::make($this->whenLoaded('offer')),
        ];
    }
}
