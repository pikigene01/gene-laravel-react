import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Albums from "./pages/Albums";
import Error404 from "./components/404";
import ArtistView from "./pages/ArtistView";

export default function RoutesAll() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/home/:token" element={<Home />} />
        <Route path="/artist/view/:name" element={<ArtistView />} />
        <Route path="/artists" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
