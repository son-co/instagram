<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function register(Request $request)
    {

        $validatedData = $request->validate([
            'fullname' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|min:8',
        ]);

        $user = new Users();
        $user->fullname = $validatedData['fullname'];
        $user->username = $validatedData['username'];
        $user->email = $validatedData['email'];
        $user->password = $validatedData['password'];
        // $user->password = bcrypt($validatedData['password']);

        $user->save();

        $profile = new Profile();
        $profile->user_id = $user->id;
        $profile->save();

        return response()->json([
            'success' => true,
            'message' => 'User registered successfully',
            'user' => $user,
        ], 200);
    }

    public function login(Request $request)
    {
        $user = Users::where('email', $request->email)->where('password', $request->password)->first();
        if ($user) {
            $data = DB::table('users')
                ->join('profile', 'users.id', '=', 'profile.user_id')
                ->get();

            return response()->json([
                'success' => true,
                'message' => 'Login successfully',
                'user' => $data,
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Invalid email or password',
            ], 401);
        }
    }
}
