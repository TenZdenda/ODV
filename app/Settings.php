<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'year',
        'email',
        'number',
        'address',
        'logo',
        'facebook',
        'instagram',
        'twitter',
        'contact_email',
        'show_contact'
    ];
}
