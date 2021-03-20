<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return User[]|Collection
     */
    public function index()
    {
        $users = User::all();
        $getUsers = [];

        foreach ($users as $user) {
            $getUsers[] = [
                'name' => $user->name,
                'lastname' => $user->lastname,
                'email' => $user->email,
                'created_at' => date("d. m. Y", strtotime($user->created_at)),
                'role' => $user->roles
            ];
        }

        return response()->json(['users' => $getUsers], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param UserStoreRequest $request
     * @return Response
     */
    public function store(UserStoreRequest $request)
    {
        $password = Str::random(10);

        $user = User::create([
            'name' => $request->input('name'),
            'lastname' => $request->input('lastname'),
            'email' => $request->input('email'),
            'password' => bcrypt($password)
        ]);

        $user->assignRole($request->input('role'));

        $response = [
            'message' => 'Uživatel byl úspěšně vytvořen',
            'user' => $user,
        ];

        return response()->json($response, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $user = User::find($id);

        if ($user) {
            $getUser = [
                'name' => $user->name,
                'lastname' => $user->lastname,
                'email' => $user->email,
                'created_at' => $user->created_at,
                'updated_at' => $user->updated_at,
                'role' => $user->roles
            ];

            return response()->json($getUser, 200);
        }

        return response()->json(["error" => trans("actions.invalidItem")], 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UserStoreRequest $request
     * @param int $id
     * @return Response
     */
    public function update(UserUpdateRequest $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(["error" => trans("actions.invalidItem")], 404);
        }

        $user->name = $request->input('name');
        $user->lastname = $request->input('lastname');

        $user->save();

        $response = [
            'user' => $user,
            'success' => 'Úspěšně jsi si upravil profil'
        ];

        return response()->json($response, 200);
    }

    public function editMe(UserUpdateRequest $request)
    {
        $user = User::find(Auth::id());

        $user->name = $request->input('name');
        $user->lastname = $request->input('lastname');

        if ($request->input('email') !== $user->email) {
            if (User::where("email", $request->input('email'))->first() !== null) {
                $email = [
                    'email' => [
                        'Tento e-mail je již zabraný'
                    ]
                ];
                return response()->json(["errors" => $email], 401);
            } else {
                $user->email = $request->input('email');
            }
        }

        if ($request->input('pass') !== null || $request->input('newPass') !== null) {
            if (Hash::check($request->input('pass'), $user->password)) {
                if ($request->input('pass') !== $request->input('newPass')) {
                    $user->password = bcrypt($request->input('newPass'));
                } else {
                    $newPass = [
                        'newPass' => [
                            'Zadaná hesla nejsou stejná'
                        ]
                    ];

                    return response()->json(["errors" => $newPass], 401);
                }
            } else {
                $pass = [
                    'pass' => [
                        'Zadal jste špatně aktuální heslo'
                    ]
                ];

                return response()->json(["errors" => $pass], 401);
            }
        }

        $user->save();

        return response()->json(['success' => 'sucess'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        if (Auth::id() === (int) $id) {
            $response = [
                'user' => [
                    trans('validation.loginUser')
                ]
            ];

            return response()->json(['errors' => $response], 401);
        }

        $user = User::find($id);

        $response = [
            'message' => 'Uživatel byl úspěšně smazán',
            'user' => $user
        ];

        if ($user) {
            User::destroy($id);
            return response()->json($response, 200);
        }

        return response()->json(['message' => 'Tento uzivatel nebyl nalezen'], 404);
    }

}
