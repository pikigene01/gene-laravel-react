<?php

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

Route::group(['middeware' => 'auth:sanctum'], function () {
    Route::post('/example-authenticated', [HomeController::class, "create"]);
    Route::get('/fetch-data', [HomeController::class, "index"]);
    Route::post('/add-artist', [HomeController::class, "createArtist"]);
    Route::post('/add-album', [HomeController::class, "createAlbum"]);
    Route::post('/remove-album', [HomeController::class, "removeAlbum"]);
    Route::post('/remove-artist', [HomeController::class, "removeArtist"]);
    Route::get('/check-user', [GoogleAuthController::class, "checkUser"]);
});
