<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function loginUsingGoogle(Request $request)
    {
        try {
            return Socialite::driver('google')->redirect();
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function callbackFromGoogle(Request $request)
    {
        try {
            $user = Socialite::driver('google')->user();
            $create_user = User::updateOrCreate([
                'google_id' => $user->getId()
            ], [
                'name' => $user->getName(),
                'email' => $user->getEmail(),
                'password' => Hash::make($user->getName() . '#' . $user->getId())
            ]);
            Auth::loginUsingId($create_user->id);
            return redirect('/home');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    public function checkUser(Request $request)
    {
        try {
            $user = Socialite::driver('google')->user();
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}
