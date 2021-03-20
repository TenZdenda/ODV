<?php

namespace App\Http\Controllers;

use App\Lecture;
use App\LectureUser;
use App\Partner;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use function GuzzleHttp\Promise\all;

class JoinLectureController extends Controller
{

    public function getMyLecture()
    {
        $data = [];

        $lectures = Lecture::with('users')->get();

        foreach ($lectures as $lecture) {
            foreach ($lecture->users as $user) {
                if ($user->id === Auth::id()) {
                    $data[] = [
                        'id' => $lecture->id,
                        'title' => $lecture->title,
                        'name' => $lecture->title,
                        'company' => $lecture->company,
                        'time' => $lecture->time,
                        'place' => $lecture->place
                    ];
                }
            }
        }

        return response()->json(['lectures' => $data], 200);
    }

    public function joinLecture($id)
    {
        $lecture = Lecture::with('users')->where('id', $id)->firstOrFail();
        $count = $lecture->users->count();

        if ($lecture->users->where('id', Auth::id())->isEmpty()) {

            if ($count >= $lecture->viewers) {
                return response()->json(['error' => 'Tato přednáška je již plná'], 403);
            }

            LectureUser::create([
                'lecture_id' => $id,
                'user_id' => Auth::id()
            ]);

            return response()->json(['success' => "Úspěšně jsi si zapsal přednášku"], 200);
        }

        return response()->json(['warn' => "Na tuto přednášku jsi se již zaregistroval"], 200);
    }

    public function leftLecture($id)
    {
        $lecture = Lecture::with('users')->where('id', $id)->firstOrFail();

        if (!$lecture->users->where('id', Auth::id())->isEmpty()) {
            LectureUser::where('lecture_id', $id)->where('user_id', Auth::id())->delete();

            return response()->json(['success' => "Úspěšně jsi se odhlásil z přednášky"], 200);
        }

        return response()->json(['error' => 'Tuto přednášku nemáš zapsanou'], 404);
    }

    public function stats()
    {
        $bestLectures = [];

        $countLectures = Lecture::all()->count();

        $countPartners = Partner::all()->count();

        $lectures = LectureUser::select('lecture_id')
            ->groupBy('lecture_id')
            ->orderByRaw('COUNT(*) DESC')
            ->take(3)
            ->get();

        foreach ($lectures as $lecture) {
            $bestLectures[] = Lecture::where('id', $lecture->lecture_id)->first();
        }

        $response = [
            'bestLectures' => $bestLectures,
            'countLectures' => $countLectures,
            'countPartners' => $countPartners
        ];

        return response()->json(['response' => $response], 200);
    }

}
