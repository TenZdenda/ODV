<?php

namespace App\Http\Controllers;

use App\File;
use App\Http\Requests\AddTeamMember;
use App\Http\Requests\EditTeamMember;
use App\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{

    public function getTeam()
    {
        return response()->json(['team' => Team::all()], 200);
    }

    public function addTeamMember(AddTeamMember $request)
    {
        $path = (new \App\File)->saveFile($request->input('avatar'), $request->input('name'), 'team');

        $member = Team::create([
            'degree' => $request->input('degree'),
            'name' => $request->input('name'),
            'role' => $request->input('role'),
            'email' => $request->input('email'),
            'avatar' => $path,
        ]);

        return response()->json(['member' => $member], 200);
    }

    public function editMember(EditTeamMember $request, $id)
    {
        $member = Team::findOrFail($id);

        $member->degree = $request->input('degree');
        $member->name = $request->input('name');
        $member->role = $request->input('role');
        $member->email = $request->input('email');

        if ($request->input('avatar') !== null) {
            $path = (new \App\File)->saveFile($request->input('avatar'), $request->input('name'), 'name');

            $member->avatar = $path;
        }

        $member->save();

        return response()->json(['member' => $member], 200);
    }

    public function deleteTeamMember($id)
    {
        $member = Team::findOrFail($id);
        $member->delete();

        return response()->json(['success' => 'Člen byl smazán'], 200);
    }

}
