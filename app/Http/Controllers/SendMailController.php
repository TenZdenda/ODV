<?php

namespace App\Http\Controllers;

use App\Mail\SendEmail;
use App\Settings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class SendMailController extends Controller
{

    public function sendEmail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:100',
            'email' => 'required|email|max:100',
            'message' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 401);
        }

        $contactEmail = Settings::first()->contact_email;

        $name = $request->input('name');
        $email = $request->input('email');
        $message = $request->input('message');

        Mail::to($contactEmail)->send(new SendEmail($name, $email, $message));

        return response()->json(['success' => 'Email byl odeslán'], 200);
    }

}
