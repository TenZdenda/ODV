<?php

use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $setting = new \App\Settings();
        $setting->name = "ODV";
        $setting->year = "2021";
        $setting->email = "hello@zdenekpasek.com";
        $setting->number = "+420 111 222 333";
        $setting->address = "Lorase 201";
        $setting->logo = "https://moodle.spseplzen.cz/pluginfile.php?file=%2F1%2Fcore_admin%2Flogo%2F0x150%2F1562062103%2FLogo.png";
        $setting->facebook = "https://facebook.com/nickname";
        $setting->instagram = "https://www.instagram.com/tenzdenda/";
        $setting->twitter = "https://twitter.com/IamZdenda";
        $setting->contact_email = "hello@zdenekpasek.com";
        $setting->show_contact = false;

        $setting->save();
    }

}
