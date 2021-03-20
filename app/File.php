<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Intervention\Image\Facades\Image;

class File extends Model
{

    CONST ALLOWED_IMAGE_FORMAT = ['png', 'jpeg', 'jpg'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'type', 'path', 'name'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'user_id',
    ];

    public function user()
    {
        return $this->hasOne('App\User');
    }

    public function saveFile($base64, $name, $folder, $allowedFormat = self::ALLOWED_IMAGE_FORMAT)
    {
        $type = $this->getTypeOfFile($base64);
        $this->validateFile($type['imageType'], $allowedFormat);

        $avatar = base64_decode($type['base64Type']);
        $fileName = $name . "." . $type['imageType'];

        Storage::disk('local')->makeDirectory("public/$folder");
        $img = Image::make($avatar);
        $img->save(storage_path("app/public/$folder/$fileName"), 50);

        return URL::to("/") . Storage::url("$folder/$fileName");
    }

    public function getTypeOfFile($base64)
    {
        $base64Type = explode(";base64,", $base64);
        $imageType = explode("/", $base64Type[0]);

        return [
            'base64Type' => $base64Type[1],
            'imageType' => $imageType[1]
        ];
    }

    public function validateFile($file, $attributes)
    {
        if (!in_array($file, $attributes)) {
            return;
        }
    }

}
