<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReferenceRequest;
use App\Reference;
use Illuminate\Http\Request;

class ReferenceController extends Controller
{

    public function getReferences()
    {
        return response()->json(['references' => Reference::all()], 200);
    }

    public function addReference(ReferenceRequest $request)
    {
        $reference = Reference::create([
            'text' => $request->input('text'),
            'author' => $request->input('author'),
            'position' => $request->input('position'),
            'company' => $request->input('company'),
        ]);

        return response()->json(['reference' => $reference], 200);
    }

    public function editReference(ReferenceRequest $request, $id)
    {
        $reference = Reference::findOrFail($id);

        $reference->text = $request->input('text');
        $reference->author = $request->input('author');
        $reference->position = $request->input('position');
        $reference->company = $request->input('company');

        $reference->save();

        return response()->json(['reference' => $reference], 200);
    }

    public function deleteReference($id)
    {
        $reference = Reference::findOrFail($id);
        $reference->delete();

        return response()->json(['success' => 'Smazáno'], 200);
    }

}
