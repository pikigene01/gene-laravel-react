import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "@/services/useLocalStorage";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
export default function AppProvider({ children }) {
  const [playLists, setPlayLists] = useLocalStorage("playlists", []);
  const [songs, setSongs] = useLocalStorage("songs", []);
  const [artists, setArtists] = useLocalStorage("artists", []);
  const [user, setUser] = useLocalStorage("user", false);
  const [searchResults, setSearchResults] = useLocalStorage("searched", []);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };
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
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
