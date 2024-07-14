import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../main-page/MainPage';
import PlaylistPage from '../playlist-page/PlaylistPage';
import './App.css';

const App = () => {
  const [playlists, setPlaylists] = useState([]);
  const [filteredPlaylists, setFilteredPlaylists] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPlaylistEmpty, setIsPlaylistEmpty] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const deletePlaylist = (playlist) => {
    setPlaylists(playlists.filter(p => p.id !== playlist.id))
    setFilteredPlaylists(filteredPlaylists.filter(p => p.id !== playlist.id))

    if (playlists.length == 1) {
      setIsPlaylistEmpty(true);
    }
  }

  const addPlaylist = (newPlaylist) => {
    if (newPlaylist.name !== "") {
      setPlaylists([...playlists, newPlaylist]);
      setFilteredPlaylists([...filteredPlaylists, newPlaylist]);
    }
    setModalOpen(false);
  };

  // playlists.filter(playlist => playlist.name.startswith(searchQuery))

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              playlists={playlists}
              setPlaylists={setPlaylists}
              filteredPlaylists={filteredPlaylists}
              setFilteredPlaylists={setFilteredPlaylists}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              addPlaylist={addPlaylist}
              deletePlaylists={deletePlaylist}
              isModalOpen={isModalOpen}
              setModalOpen={setModalOpen}
              isPlaylistEmpty={isPlaylistEmpty}
              setIsPlaylistEmpty={setIsPlaylistEmpty}
            />
          }
        />
        <Route path="/playlist/:playlistName" element={<PlaylistPage playlists={playlists} />} />
      </Routes>
    </>
  );
};

export default App;
