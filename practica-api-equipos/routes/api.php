<?php

use App\Http\Controllers\EquipoController;
use App\Http\Controllers\JugadorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/equipos/all',[EquipoController::class, 'allEquipos']);
Route::resource('/equipos', EquipoController::class)->only('index', 'store', 'show','update', 'destroy');
Route::resource('/jugadores', JugadorController::class)->only('index', 'store', 'show','update', 'destroy');
