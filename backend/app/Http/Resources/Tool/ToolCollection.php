<?php

namespace App\Http\Resources\Tool;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ToolCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection,
        ];
    }
}
