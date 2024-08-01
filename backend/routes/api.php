<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('guest')->post('/auth', [App\Http\Controllers\AuthController::class, 'store'])->name('login');

Route::middleware('auth:sanctum')->delete('/auth', [App\Http\Controllers\AuthController::class, 'destroy']);

Route::apiResource('users', App\Http\Controllers\UserController::class);
Route::apiResource('services', App\Http\Controllers\ServiceController::class);
Route::apiResource('categories', App\Http\Controllers\CategoryController::class);
Route::apiResource('messages', App\Http\Controllers\MessageController::class);
Route::apiResource('offers', App\Http\Controllers\OfferController::class);
Route::apiResource('finisheds', App\Http\Controllers\FinishedController::class);
Route::apiResource('tools', App\Http\Controllers\ToolController::class);
