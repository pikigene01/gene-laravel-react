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
import swal from "sweetalert";

export const AppContext = createContext(() => {});
export default function AppProvider({ children }) {
  const [playLists, setPlayLists] = useLocalStorage("playlists", []);
  const [songs, setSongs] = useLocalStorage("songs", []);
  const [artists, setArtists] = useLocalStorage("artists", []);
  const [albums, setAlbums] = useLocalStorage("albums", []);
  const [artistsFav, setArtistsFav] = useLocalStorage("artists_fav", []);
  const [albumsFav, setAlbumsFav] = useLocalStorage("albums_fav", []);
  const [user, setUser] = useLocalStorage("user", false);
  const [paramId, setParamId] = useState(0);
  const [searchResults, setSearchResults] = useLocalStorage("searched", []);
  const [token, setToken] = useLocalStorage("token", null);
  const [loading, setLoading] = useState(false);
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
  const removeFavourateAlbum = async (album) => {
    setLoading(true);
    let response = await apiDataPost("/api/v1/remove-album", {
      id: album?.id,
    });
    if (response?.message) {
      if (response.status === 200) {
        setAlbumsFav(response?.albums);
        swal("Success", response?.message, "success");
      } else {
        swal("Error", response?.message, "error");
      }
    }
    setLoading(false);
  };
  const addFavourateAlbum = async (album) => {
    setLoading(true);
    let response = await apiDataPost("/api/v1/add-album", {
      name: album?.name,
      url: album?.url,
      image: album?.image[2]["#text"],
    });
    if (response?.message) {
      if (response.status === 200) {
        setAlbumsFav(response?.albums);
        swal("Success", response?.message, "success");
      } else {
        swal("Error", response?.message, "error");
      }
    }
    setLoading(false);
  };
  const removeFavourateArtist = async (artist) => {
    setLoading(true);
    let response = await apiDataPost("/api/v1/remove-artist", {
      id: artist?.id,
    });
    if (response?.message) {
      if (response.status === 200) {
        setArtistsFav(response?.artists);
        swal("Success", response?.message, "success");
      } else {
        swal("Error", response?.message, "error");
      }
    }
    setLoading(false);
  };
  const addFavourateArtist = async (artist) => {
    setLoading(true);
    let response = await apiDataPost("/api/v1/add-artist", {
      name: artist?.name,
      url: artist?.url,
      image: artist?.image[2]["#text"],
    });
    if (response?.message) {
      if (response.status === 200) {
        setArtistsFav(response?.artists);
        swal("Success", response?.message, "success");
      } else {
        swal("Error", response?.message, "error");
      }
    }
    setLoading(false);
  };
  const projectRatingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let response = await apiDataPost("/api/v1/add-artist", {
      name: "",
      url: "",
      image: "",
    });
    if (response?.message) {
      if (response.status === 200) {
        setArtistsFav(response?.artists);
        swal("Success", response?.message, "success");
      } else {
        swal("Error", response?.message, "error");
      }
    }
    setLoading(false);
  };
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

  useEffect(() => {
    if (!token) return;
    async function fetchData() {
      let response = await apiDataGet("/api/v1/fetch-data", {});
      if (response?.data?.albums) {
        setAlbumsFav(response?.data?.albums);
      } else if (response?.data?.artists) {
        setArtistsFav(response?.data?.artists);
      }
    }
    fetchData();
  }, [token]);
  useEffect(() => {
    if (!token) return;
    async function fetchData() {
      let response = await apiDataGet("/api/v1/check-user", {});
      if (response?.user) {
        setUser(response?.user);
      } else {
        swal("Error", response?.message, "error");
      }
    }
    fetchData();
  }, [token]);

  useEffect(() => {
    if (window.location.pathname.toString().includes("/home/")) {
      const url = window.location.pathname;
      const param_id = url.substring(url.lastIndexOf("/") + 1);

      setParamId(param_id);
      setToken(param_id);
    }
  }, [navigate]);
  const logOut = () => {
    setToken(null);
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
    searchValue,
    removeFavourateAlbum,
    addFavourateAlbum,
    artistsFav,
    albumsFav,
    removeFavourateArtist,
    addFavourateArtist,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
