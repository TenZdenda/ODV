<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lecture extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'company', 'time', 'place', 'viewers'
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

}
