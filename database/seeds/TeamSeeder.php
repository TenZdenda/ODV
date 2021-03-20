<?php

use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $member = new \App\Team();

        $member->name = "Zdeněk Pašek";
        $member->role = "IT Guy";
        $member->email = "hello@zdenekpasek.com";
        $member->avatar = "https://pbs.twimg.com/profile_images/1349667635215147009/OYozS87-_400x400.jpg";

        $member->save();
    }

}
