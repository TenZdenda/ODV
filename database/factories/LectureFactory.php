<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Lecture;
use Faker\Generator as Faker;

$factory->define(Lecture::class, function (Faker $faker) {
    return [
        'title' => $faker->title,
        'company' => $faker->company,
        'time' => $faker->time("H:i"),
        'place' => 'Učebna 2003',
        'viewers' => rand(5, 100)
    ];
});
