<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reference extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'text', 'author', 'position', 'company',
    ];
}
