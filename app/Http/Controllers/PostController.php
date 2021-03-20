<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Post;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return response()->json(['posts' => Post::all()], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PostRequest $request
     * @return Response
     */
    public function store(PostRequest $request)
    {
        $post = Post::create([
            'user_id' => Auth::id(),
            'title' => $request->input('title'),
            'text' => $request->input('text')
        ]);

        $response = [
            'success' => trans('posts.createPost'),
            'post' => $post
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
        $post = Post::find($id);
        $user = User::find($post->user_id);

        if ($post) {
            $response = [
                'user' => $user,
                'title' => $post->title,
                'text' => $post->text
            ];

            return response()->json($response, 200);
        }

        return response()->json(['error' => 'error'], 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);

        if ($post) {
            Post::destroy($id);

            $response = [
                'message' => 'Příspěvek byl úspěšně smazán',
                'post' => $post
            ];

            return response()->json($response, 200);
        }

        return response()->json(['message' => 'Tento příspěvek nebyl nalezen'], 404);
    }

}
