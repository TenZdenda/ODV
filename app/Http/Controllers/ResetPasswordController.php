<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\ResetPassword;
use App\Mail\SuccessPassword;
use App\PasswordReset;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ResetPasswordController extends Controller
{

    public function resetPasswordProfile(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'oldPassword' => 'required',
            'newPassword' => 'required|confirmed|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $oldPassword = $request->input('oldPassword');
        $newPassword = $request->input('newPassword');

        $user = User::find(Auth::user()->id);

        if (!Hash::check($oldPassword, $user->password)) {
            $response = [
                'password' => [
                    trans('validation.password')
                ]
            ];

            return response()->json(['errors' => $response], 422);
        }

        $user->password = bcrypt($newPassword);
        $user->save();

        return response()->json(['success' => 'Success'], 200);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 404);
        }

        $user = User::where('email', $request->email)->first();

        $token = Str::random(60);

        PasswordReset::updateOrCreate(
            ['email' => $user->email],
            [
                'email' => $user->email,
                'token' => $token
            ]
        );

        Mail::to($request->email)->send(new ResetPassword($user, $token));

        $response = [
            'success' => trans('passwords.sent'),
        ];

        return response()->json($response, 200);
    }

    public function find($token)
    {
        $passwordReset = PasswordReset::where('token', $token)->first();

        if (!$passwordReset) {
            return response()->json([
                'message' => trans('validation.invalid_token')
            ], 404);
        }

        if (Carbon::parse($passwordReset->created_at)->addMinutes(240)->isPast()) {
            $passwordReset->delete();

            return response()->json([
                'message' => trans('validation.invalid_token')
            ], 404);
        }

        $user = User::where('email', $passwordReset->email)->first();

        $response = [
            'email' => $passwordReset->email,
            'userName' => "$user->name $user->lastname",
        ];

        return response()->json(['success' => $response], 200);
    }

    public function reset(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
            'password' => 'required|string|min:6|confirmed',
            'token' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 404);
        }

        $passwordReset = PasswordReset::where([
            ['token', $request->token],
            ['email', $request->email]
        ])->first();

        if (!$passwordReset) {
            return response()->json([
                'message' => 'This password reset token is invalid.'
            ], 404);
        }

        $user = User::where('email', $passwordReset->email)->first();

        if (!$user) {
            return response()->json([
                'message' => 'We cant find a user with that e-mail address.'
            ], 404);
        }

        $user->password = bcrypt($request->password);
        $user->save();

        $tokens = $user->tokens;

        foreach ($tokens as $token) {
            $token->revoke();
            $token->delete();
        }

        $passwordReset->delete();

        Mail::to($request->email)->send(new SuccessPassword($user));

        return response()->json(['success' => trans('passwords.reset')], 200);
    }

}
