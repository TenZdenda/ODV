<?php

namespace App\Http\Controllers;

use App\Faq;
use App\Http\Requests\NewFaqRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class FaqController extends Controller
{

    public function getAllFaq()
    {
        return response()->json(['faqs' => Faq::all()], 200);
    }

    public function getFormatedFaqs()
    {
        $faqs = Faq::all();
        $formatedFaqs = [];

        foreach ($faqs as $faq) {
            $formatedFaqs[] = [
                'id' => $faq->id,
                'question' => Str::limit($faq->question, 50, "..."),
                'answer' => Str::limit($faq->answer, 50, "..."),
            ];
        }

        return response()->json(['formatedFaqs' => $formatedFaqs], 200);
    }

    public function getFaq($id)
    {
        $faq = Faq::findOrFail($id);

        return response()->json(['faq' => $faq], 200);
    }

    public function addFaq(NewFaqRequest $request)
    {
        $faq = Faq::create([
            'question' => $request->input('question'),
            'answer' => $request->input('answer')
        ]);

        return response()->json(['faq' => $faq], 200);
    }

    public function editFaq(NewFaqRequest $request, $id)
    {
        $faq = Faq::findOrFail($id);
        $faq->question = $request->input('question');
        $faq->answer = $request->input('answer');

        $faq->save();

        return response()->json(['faq' => $faq], 200);
    }

    public function deleteFaq($id)
    {
        $faq = Faq::findOrFail($id);
        $faq->delete();

        return response()->json(['success' => 'Smazáno'], 200);
    }

}
