<?php

namespace App\Http\Controllers;

use App\Models\Album;
use App\Models\Artist;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = Auth::user()->id;
        $artists = Artist::where('user_id', $user_id)->get();
        $albums = Album::where('user_id', $user_id)->get();
        return  $this->jsonSuccess(200, "Request Successfully!!", ["artists" => $artists, "albums" => $albums], "data");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function createArtist(Request $request)
    {
        $user_id = Auth::user()->id;

        $createArtists = new Artist();

        $createArtists->name = $request->name;
        $createArtists->url = $request->url;
        $createArtists->user_id = $user_id;
        $createArtists->image = $request->image;
        $createArtists->save();
        $artists = Artist::where('user_id', $user_id)->get();
        $albums = Album::where('user_id', $user_id)->get();
        return  $this->jsonSuccess(200, "Request Successfully!!", $artists, "artists");
    }
    public function createAlbum(Request $request)
    {
        $user_id = Auth::user()->id;

        $createAlbum = new Album();

        $createAlbum->name = $request->name;
        $createAlbum->url = $request->url;
        $createAlbum->user_id = $user_id;
        $createAlbum->image = $request->image;
        $createAlbum->save();
        $albums = Album::where('user_id', $user_id)->get();
        return  $this->jsonSuccess(200, "Request Successfully!!", $albums, "albums");
    }
    public function removeArtist(Request $request)
    {
        $user_id = Auth::user()->id;
        $album_remove = Album::where('user_id', $user_id)->where('id', $request->id)->delete();

        $albums = Album::where('user_id', $user_id)->get();
        return  $this->jsonSuccess(200, "Request Successfully!!", $albums, "albums");
    }
    public function removeAlbum(Request $request)
    {
        $user_id = Auth::user()->id;
        $artist_remove = Artist::where('user_id', $user_id)->where('id', $request->id)->delete();

        $artists = Artist::where('user_id', $user_id)->get();
        return  $this->jsonSuccess(200, "Request Successfully!!", $artists, "artists");
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
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
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
}
