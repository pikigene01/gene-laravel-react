import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "@/services/useLocalStorage";
import { useNavigate } from "react-router-dom";
import {
  apiDataGet,
  apiDataPost,
  apiDataPostForm,
  apiDataPut,
} from "../repository/base_repository";
import axios from "axios";

export const AppContext = createContext();
export default function AppProvider({ children }) {
  const [playLists, setPlayLists] = useLocalStorage("playlists", []);
  const [songs, setSongs] = useLocalStorage("songs", []);
  const [artists, setArtists] = useLocalStorage("artists", []);
  const [albums, setAlbums] = useLocalStorage("albums", []);
  const [user, setUser] = useLocalStorage("user", false);
  const [searchResults, setSearchResults] = useLocalStorage("searched", []);
  const [token, setToken] = useLocalStorage("token");
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };
  useEffect(() => {
    //update app sanctum token if user got token
    if (!token) return;
    axios.interceptors.request.use(function (config) {
      config.headers.Authorization = token ? `Bearer ${token}` : "";
      return config;
    });
  }, [token]);

  useEffect(() => {
    if (!searchValue) return;
    const getAllArtists = async () => {
      let response = await apiDataGet(
        `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchValue}&api_key=8969de130336f865af90992ab5165dc4&format=json`,
        {},
        token
      );
      if (response?.results) {
        setArtists(response?.results?.artistmatches?.artist);
      }
    };
    const getAllAlbums = async () => {
      let response = await apiDataGet(
        `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchValue}&api_key=8969de130336f865af90992ab5165dc4&format=json`,
        {},
        token
      );
      if (response?.results) {
        setAlbums(response?.results?.albummatches?.album);
      }
    };

    getAllAlbums();
    getAllArtists();
  }, [searchValue]);
  const logOut = () => {
    setUser(false);
  };
  useEffect(() => {}, []);
  const values = {
    playLists,
    handleSearch,
    searchResults,
    navigate,
    user,
    logOut,
    songs,
    artists,
    albums,
    token,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
