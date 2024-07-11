<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFinishedRequest;
use App\Http\Requests\UpdateFinishedRequest;
use App\Models\Finished;

class FinishedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFinishedRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Finished $finished)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFinishedRequest $request, Finished $finished)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Finished $finished)
    {
        //
    }
}
