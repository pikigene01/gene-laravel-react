<?php

use App\Http\Controllers\api\v1\ExampleController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API v1 Routes
|--------------------------------------------------------------------------
|
| This file contains all of the v1 routes.
| This file is loaded and the routes are pre-pended automatically 
| by App\Providers\RouteServiceProvider->boot()
|
*/

// Authenticated API (sanctum)
Route::group([
    'middleware' => ['Auth:sanctum']
], function () {

    Route::post('/example-authenticated', [HomeController::class, "create"]);
});

// Public API
Route::group([
    'middleware' => ['api_public'],
], function () {

    Route::get('/example', [ExampleController::class, 'index']);
});
