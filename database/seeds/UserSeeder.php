<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 10)->create()->each(function($u) {
            $u->assignRole('student');
        });

        $user = new User();
        $user->name = "Zdeněk";
        $user->lastname = "Pašek";
        $user->email = "hello@zdenekpasek.com";
        $user->password = bcrypt("admin");

        $user->save();
        $user->assignRole('admin');
    }

}
