<?php

use Illuminate\Database\Seeder;

class PartnerSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $partner = new \App\Partner();
        $partner->name = "Město Plzeň";
        $partner->url = "https://www.plzen.eu";
        $partner->path = "https://mojedetskaskupina.cz/wp-content/uploads/2018/06/logo_mesto_plzen.jpg";

        $partner->save();
    }

}
