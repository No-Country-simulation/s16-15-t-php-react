<?php

namespace App\Http\Controllers;

use App\Http\Requests\Offer\OfferStoreRequest;
use App\Http\Requests\Offer\OfferUpdateRequest;
use App\Http\Resources\Offer\OfferCollection;
use App\Http\Resources\Offer\OfferResource;
use App\Models\Offer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class OfferController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index','show');
    }
    public function index(Request $request): OfferCollection
    {
        $offers = QueryBuilder::for(Offer::class)
        ->allowedFilters(['presupuesto', 'fecha_limite','active',
            AllowedFilter::callback('client',fn($query,$value)=> $query->where('user:client_id',$value??auth()->id())),
            AllowedFilter::callback('freelancer',fn($query,$value)=> $query->where('user:freelancer',$value??auth()->id()))
        ])
        ->allowedSorts('presupuesto', 'fecha_limite','active')
        ->paginate()->withQueryString();

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
