<?php

namespace App\Http\Controllers;

use App\Http\Requests\Finished\FinishedStoreRequest;
use App\Http\Requests\Finished\FinishedUpdateRequest;
use App\Http\Resources\Finished\FinishedCollection;
use App\Http\Resources\Finished\FinishedResource;
use App\Models\Finished;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use Spatie\QueryBuilder\QueryBuilder;

class FinishedController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')
    }
    public function index(Request $request): FinishedCollection
    {
        $finisheds = QueryBuilder::for(Finished::class)
            ->allowedFilters('offer_id','employee_score', 'freelancer_score', 'was_completed')
            ->paginate()->withQueryString();

        return new FinishedCollection($finisheds);
    }

    public function store(FinishedStoreRequest $request): FinishedResource
    {
        $finished = Finished::create($request->validated());

        return new FinishedResource($finished);
    }

    public function show(Request $request, Finished $finished): FinishedResource
    {
        return new FinishedResource($finished);
    }

    public function update(FinishedUpdateRequest $request, Finished $finished): FinishedResource
    {
        $finished->update($request->validated());

        return new FinishedResource($finished);
    }

    public function destroy(Request $request, Finished $finished): Response
    {
        $finished->delete();

        return response()->noContent();
    }
}
