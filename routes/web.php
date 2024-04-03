<?php

use App\Http\Controllers\GoogleAuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/login-google', [GoogleAuthController::class, 'loginUsingGoogle']);
Route::get('/google-callback', [GoogleAuthController::class, 'callbackFromGoogle']);
Route::get('/{any}', function () {
    return view('app');
})->where('any', '^(?!api).*');
