<?php

use App\Lecture;
use App\User;
use Illuminate\Database\Seeder;

class LectureSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Lecture::class, 10)->create();

        foreach (Lecture::all() as $lecture) {
            $users = User::inRandomOrder()->take(rand(1, 3))->pluck('id');
            $lecture->users()->attach($users);
        }
    }

}
