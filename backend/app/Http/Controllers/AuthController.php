<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Http\Resources\User\UserResource;

class AuthController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $authData = $request->validate([
            'email' => 'required|email|exists:users,email',
            'password' => 'required|string',
            'remember_me' => 'nullable,boolean'
        ]);

        $curatedAuth = [
            'email'=>$authData['email'],
            'password'=>$authData['password']
        ];

        if(Auth::attempt($authData, $authData['remember'] ?? false)){
            $user = auth()->user();
            $token = $user->createToken('session')->plainTextToken;
            return [
                'data' => new UserResource($user),
                'token'=>$token
            ];
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();
        Auth::user()->currentAccessToken()->delete();
        return response()->noContent();
    }
}
