<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditPartnerRequest;
use App\Http\Requests\SavePartnerRequest;
use App\Partner;
use Intervention\Image\Facades\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class PartnerController extends Controller
{

    public function getPartners()
    {
        $partners = Partner::all();

        return response()->json(['partners' => $partners], 200);
    }

    public function savePartner(SavePartnerRequest $request)
    {
        $path = (new \App\File)->saveFile($request->input('logo'), $request->input('name'), 'partners');

        $partner = Partner::create([
            'name' => $request->input('name'),
            'url' => $request->input('url'),
            'path' => $path
        ]);

        return response()->json(['partner' => $partner], 200);
    }

    public function editPartner(EditPartnerRequest $request, $id)
    {
        $partner = Partner::findOrFail($id);

        $partner->name = $request->input('name');
        $partner->url = $request->input('url');

        if ($request->input('logo') !== null) {
            $path = (new \App\File)->saveFile($request->input('logo'), $request->input('name'), 'partners');

            $partner->path = $path;
        }

        $partner->save();

        return response()->json(['partner' => $partner], 200);
    }

    public function deletePartner($id)
    {
        $partner = Partner::findOrFail($id);
        $partner->delete();

        return response()->json(['success' => 'Partner byl vymazán'], 200);
    }

}
