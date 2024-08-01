<?php

namespace App\Http\Controllers;

use App\Http\Requests\Service\ServiceStoreRequest;
use App\Http\Requests\Service\ServiceUpdateRequest;
use App\Http\Resources\Service\ServiceCollection;
use App\Http\Resources\Service\ServiceResource;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ServiceController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except('index','show');
    }
    public function index(Request $request): ServiceCollection
    {
        $services = QueryBuilder::for(Service::class)
        ->allowedFilters(['description', 'external_portfolio', 'experiencia','precio_por_hora','user_id',
            AllowedFilter::callback('category',fn($query,$value)=>$query->whereHas('categories', function ($q) use ($value){
                $q->whereIn('id',$value);
            }))
        ])
        ->allowedSorts('id','description', 'external_portfolio', 'experiencia','precio_por_hora','user_id')
        ->with('user','categories')
        ->paginate()->withQueryString();

        return new ServiceCollection($services);
    }

    public function store(ServiceStoreRequest $request): ServiceResource
    {
        $data = $request->validated();
        $service = Service::create($data);
        $service->categories()->attach([$data['category_id']]);
        
        return new ServiceResource($service);
    }

    public function show(Request $request, Service $service): ServiceResource
    {
        $service->loadMissing('categories');
        return new ServiceResource($service);
    }

    public function update(ServiceUpdateRequest $request, Service $service): ServiceResource
    {
        $service->update($request->validated());

        return new ServiceResource($service);
    }

    public function destroy(Request $request, Service $service): Response
    {
        $service->delete();

        return response()->noContent();
    }
}
