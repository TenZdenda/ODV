<?php

namespace App\Http\Controllers;

use App\File;
use App\Http\Requests\SettingsRequest;
use App\Settings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SettingsController extends Controller
{

    public function getSettings()
    {
        $rawSettings = DB::table('settings')->first();
        $settings = [
            'general' => [
                'name' => $rawSettings->name,
                'year' => $rawSettings->year,
                'email' => $rawSettings->email,
                'number' => $rawSettings->number,
                'address' => $rawSettings->address,
                'logo' => $rawSettings->logo,
            ],
            'socialmedia' => [
                'facebook' => $rawSettings->facebook,
                'instagram' => $rawSettings->instagram,
                'twitter' => $rawSettings->twitter,
            ],
            'contactform' => [
                'email' => $rawSettings->contact_email,
                'showform' => $this->formatBoolean($rawSettings->show_contact),
            ]
        ];

        return response()->json(['settings' => $settings], 200);
    }

    public function saveSettings(SettingsRequest $request)
    {
        $settings = DB::table('settings')->first();

        if ($settings === null) {
            $newSettings = Settings::create([
                'name' => $request->input('name'),
                'year' => $request->input('year'),
                'email' => $request->input('email'),
                'number' => $request->input('number'),
                'address' => $request->input('address'),
                'logo' => (new \App\File)->saveFile($request->input('logo'), 'logo', 'logo'),
                'facebook' => $request->input('facebook'),
                'instagram' => $request->input('instagram'),
                'twitter' => $request->input('twitter'),
                'contact_email' => $request->input('contact_email'),
                'show_contact' => $request->input('show_contact'),
            ]);

            if ($request->input('contact_email') === null) {
                $newSettings->contact_email = $request->input('email');
                $newSettings->save();
            }

            return response()->json(['settings' => $newSettings], 200);
        }

        $findSetting = Settings::find($settings->id);

        $findSetting->name = $request->input('name');
        $findSetting->year = $request->input('year');
        $findSetting->email = $request->input('email');
        $findSetting->number = $request->input('number');
        $findSetting->address = $request->input('address');
        if ($request->input('logo') !== null) {
            $findSetting->logo = (new \App\File)->saveFile($request->input('logo'), 'logo', 'logo');
        }
        $findSetting->facebook = $request->input('facebook');
        $findSetting->instagram = $request->input('instagram');
        $findSetting->twitter = $request->input('twitter');
        $findSetting->contact_email = $request->input('contact_email');
        $findSetting->show_contact = $request->input('show_contact');

        if ($request->input('contact_email') === null) {
            $findSetting->contact_email = $request->input('email');
        }

        $findSetting->save();

        return response()->json(['settings' => $findSetting], 200);
    }

    public function formatBoolean($value)
    {
        if ($value === "1") {
            return true;
        }

        return false;
    }

}
