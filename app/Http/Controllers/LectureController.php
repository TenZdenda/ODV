<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateNewLectureRequest;
use App\JoinLecture;
use App\Lecture;
use App\LectureUser;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class LectureController extends Controller
{

    public function getLectures()
    {
        $lectures = Lecture::all();
        $data = [];

        foreach ($lectures as $lecture) {
            $count = LectureUser::where('lecture_id', $lecture->id)->count();

            $data[] = [
                'id' => $lecture->id,
                'title' => $lecture->title,
                'company' => $lecture->company,
                'time' => $lecture->time,
                'place' => $lecture->place,
                'viewers' => $lecture->viewers,
                'loggedUsers' => $count,
            ];
        }

        return response()->json(['lectures' => $data], 200);
    }

    public function getAllLectures(){

        $lectures = Lecture::with('users')->get();
        $userLectures = [];
        $finalLectures = [];

        foreach ($lectures as $lecture) {
            if (!$lecture->users->where('id', Auth::id())->isEmpty()) {
                $userLectures[] = $lecture->users->where('id', Auth::id())->first()->pivot->lecture_id;
            }
        }

        foreach ($lectures as $lec) {
            $count = LectureUser::where('lecture_id', $lec->id)->count();
            if (in_array($lec->id, $userLectures)) {
                $finalLectures[] = [
                    'id' => $lec->id,
                    'title' => $lec->title,
                    'company' => $lec->company,
                    'time' => $lec->time,
                    'place' => $lec->place,
                    'viewers' => $lec->viewers,
                    'loggedUsers' => $count,
                    'login' => true,
                ];
            } else {
                $finalLectures[] = [
                    'id' => $lec->id,
                    'title' => $lec->title,
                    'company' => $lec->company,
                    'time' => $lec->time,
                    'place' => $lec->place,
                    'viewers' => $lec->viewers,
                    'loggedUsers' => $count,
                    'login' => false,
                ];
            }
        }

        return response()->json(['lectures' => $finalLectures], 200);
    }

    public function getLecture($id){
        $lecture = Lecture::with('users')->where('id', $id)->firstOrFail();
        $loggedUsers = [];
        $data = [];

        $data['lecture'] = [
            'title' => $lecture->title,
            'company' => $lecture->company,
            'time' => $lecture->time,
            'place' => $lecture->place,
            'viewers' => $lecture->viewers,
            'loggedUsers' => $lecture->users->count()
        ];

        foreach ($lecture->users as $user) {
            $loggedUsers[] = [
                'id' => $user->id,
                'name' => $user->name,
                'lastname' => $user->lastname,
                'email' => $user->email
            ];
        }

        $data['loggedUsers'] = $loggedUsers;

        return response()->json(['lecture' => $data], 200);
    }

    public function createNewLecture(CreateNewLectureRequest $request)
    {
        $lecture = Lecture::create([
            'title' => $request->input('title'),
            'company' => $request->input('company'),
            'time' => $request->input('time'),
            'place' => $request->input('place'),
            'viewers' => $request->input('viewers')
        ]);

        return response()->json(["lecture" => $lecture], 200);
    }

    public function editLecture(CreateNewLectureRequest $request, $id) {
        $lecture = Lecture::findOrFail($id);

        $lecture->title = $request->input('title');
        $lecture->company = $request->input('company');
        $lecture->time = $request->input('time');
        $lecture->place = $request->input('place');
        $lecture->viewers = $request->input('viewers');
        $lecture->save();

        return response()->json(["lecture" => $lecture], 200);
    }

    public function deleteLecture($id)
    {
        $lecture = Lecture::findOrFail($id);
        $lecture->users()->detach();
        $lecture->delete();

        return response()->json(["success" => "Přednáška byla vymazána"], 200);
    }

}
