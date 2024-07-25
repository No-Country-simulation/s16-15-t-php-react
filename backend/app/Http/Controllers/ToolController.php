<?php

namespace App\Http\Controllers;

use App\Http\Requests\Tool\ToolStoreRequest;
use App\Http\Requests\Tool\ToolUpdateRequest;
use App\Http\Resources\Tool\ToolCollection;
use App\Http\Resources\Tool\ToolResource;
use App\Models\Tool;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ToolController extends Controller
{
    public function index(Request $request): ToolCollection
    {
        $tools = Tool::all();

        return new ToolCollection($tools);
    }

    public function store(ToolStoreRequest $request): ToolResource
    {
        $tool = Tool::create($request->validated());

        return new ToolResource($tool);
    }

    public function show(Request $request, Tool $tool): ToolResource
    {
        return new ToolResource($tool);
    }

    public function update(ToolUpdateRequest $request, Tool $tool): ToolResource
    {
        $tool->update($request->validated());

        return new ToolResource($tool);
    }

    public function destroy(Request $request, Tool $tool): Response
    {
        $tool->delete();

        return response()->noContent();
    }
}
