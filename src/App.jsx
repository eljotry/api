import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import AlbumList from "./components/AlbumList";
import AlbumDetail from "./components/AlbumDetail";
import NotFound from "./components/NotFound";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/albums" element={<AlbumList />} />
        <Route path="/albums/:albumId" element={<AlbumDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
