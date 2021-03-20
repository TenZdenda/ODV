<?php

namespace App\Http\Controllers;

use App\File;
use App\Http\Requests\SaveAvatarRequest;
use App\Http\Requests\SaveDocumentRequest;
use App\Http\Requests\SaveFilesRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class FileController extends Controller
{

    CONST ALLOWED_IMAGE_FORMAT = ['png', 'jpeg', 'jpg'];
    CONST ALLOWED_DOCUMENT_FORMAT = ['pdf'];

    public function getDocuments()
    {
        $documents = DB::table('files')->whereIn('type', self::ALLOWED_DOCUMENT_FORMAT)->get();

        return response()->json(['documents' => $documents], 200);
    }

    public function saveDocument(SaveDocumentRequest $request)
    {
        $userId = Auth::id();
        $base64 = $request->input('document');
        $type = $this->getTypeOfFile($base64);

        if ($this->validateFile($type['fileType'], self::ALLOWED_DOCUMENT_FORMAT)) {
            return response()->json(['error' => 'Tento formát není podporovaný'], 422);
        }

        $file = base64_decode($type['base64Type']);
        $fileName = $request->input('name') . "." . $type['fileType'];

        Storage::disk('local')->makeDirectory('public/documents');

        file_put_contents(storage_path("app/public/documents/$fileName"), $file);
        $path = URL::to("/") . Storage::url("documents/$fileName");

        $file = File::create([
            'user_id' => $userId,
            'name' => $request->input('name'),
            'type' => $type['fileType'],
            'path' => $path
        ]);

        return response()->json(['file' => $file], 200);
    }

    public function saveAvatar(SaveAvatarRequest $request)
    {
        $userId = Auth::user()->id;
        $base64 = $request->input('avatar');
        $type = $this->getTypeOfFile($base64);

        $this->validateFile($type['fileType'], self::ALLOWED_IMAGE_FORMAT);

        $avatar = base64_decode($type['base64Type']);
        $fileName = "prf_" . Str::random(15) . "." . $type['fileType'];

        Storage::disk('local')->makeDirectory("public/avatars/$userId");

        $img = Image::make($avatar)->resize(300, 300);
        $img->save(storage_path("app/public/avatars/$userId/$fileName"), 50);

        $path = URL::to("/") . Storage::url("avatars/$userId/$fileName");

        $isAvatarExist = DB::table('files')
            ->where('user_id', $userId)
            ->where('type', 'avatar')
            ->get();

        if ($isAvatarExist->isEmpty()) {
            File::create([
                'user_id' => $userId,
                'type' => 'avatar',
                'path' => $path,
            ]);
        } else {

            $file = $isAvatarExist[0]->path;
            $getName = explode("$userId/", $file);

            Storage::disk('public')->delete("avatars/$userId/$getName[1]");

            $file = File::find($isAvatarExist[0]->id);
            $file->path = $path;

            $file->save();
        }

        return response()->json(['success' => 'Success'], 200);
    }

    public function getTypeOfFile($base64)
    {
        $base64Type = explode(";base64,", $base64);
        $imageType = explode("/", $base64Type[0]);

        return [
            'base64Type' => $base64Type[1],
            'fileType' => $imageType[1]
        ];
    }

    public function validateFile($file, $attributes)
    {
        if (!in_array($file, $attributes)) {
            return true;
        }

        return false;
    }

}
