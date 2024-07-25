<?php

namespace App\Http\Controllers;

use App\Http\Requests\Offer\OfferStoreRequest;
use App\Http\Requests\Offer\OfferUpdateRequest;
use App\Http\Resources\Offer\OfferCollection;
use App\Http\Resources\Offer\OfferResource;
use App\Models\Offer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class OfferController extends Controller
{
    public function index(Request $request): OfferCollection
    {
        $offers = Offer::all();

        return new OfferCollection($offers);
    }

    public function store(OfferStoreRequest $request): OfferResource
    {
        $offer = Offer::create($request->validated());

        return new OfferResource($offer);
    }

    public function show(Request $request, Offer $offer): OfferResource
    {
        return new OfferResource($offer);
    }

    public function update(OfferUpdateRequest $request, Offer $offer): OfferResource
    {
        $offer->update($request->validated());

        return new OfferResource($offer);
    }

    public function destroy(Request $request, Offer $offer): Response
    {
        $offer->delete();

        return response()->noContent();
    }
}
