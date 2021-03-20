<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    const SUCCESS_STATUS = 200;

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:100',
            'lastname' => 'required|max:100',
            'email' => 'required|email|unique:users|max:100',
            'password' => 'required|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 401);
        }

        $user = User::create([
            'name' => $request->input('name'),
            'lastname' => $request->input('lastname'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password'))
        ]);

        $user->assignRole('student');

        $token = $user->createToken('Token')->accessToken;

        $response = [
            'token' => $token,
            'name' => $user->name,
            'lastname' => $user->lastname
        ];

        return response()->json($response, self::SUCCESS_STATUS);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 401);
        }

        $data = [
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ];

        if (Auth::guard('web')->attempt($data)) {
            $user = Auth::guard('web')->user();
            $token = $user->createToken('Token')->accessToken;

            $response = [
                'token' => $token,
                'user' => $user
            ];

            return response()->json($response, self::SUCCESS_STATUS);

        } else {
            $response = [
                'password' => [
                    trans('validation.password')
                ]
            ];

            return response()->json(['errors' => $response], 401);
        }
    }

    public function logout()
    {
        auth()->user()->token()->revoke();

        return response()->json(['message' => 'Úspěšně odhlášen'], self::SUCCESS_STATUS);
    }

    public function getMe()
    {
        $user = Auth::user();
        $avatar = null;

        foreach ($user->files as $file) {
            if ($file->type === "avatar") {
                $avatar = $file;
            }
        }

        $response = [
            'id' => $user->id,
            'name' => $user->name,
            'lastname' => $user->lastname,
            'email' => $user->email,
            'created_at' => $user->created_at,
            'updated_at' => $user->updated_at,
            'avatar' => $avatar,
            'role' => $user->roles[0]->name,
        ];

        return response()->json(['user' => $response], 200);
    }

}
