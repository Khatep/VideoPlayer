import React from 'react';
import PlaylistForm from '../playlist-form/PlaylistForm'
import PlaylistBoxes from '../playlist-boxes/PlaylistBoxes'
import PlaylistSearch from '../playlist-search/PlaylistSearch'
import './MainPage.css'
import Generator from '../generator/Generator';

function MainPage({ playlists, setPlaylists, filteredPlaylists, setFilteredPlaylists, searchQuery, setSearchQuery, addPlaylist, deletePlaylists, isModalOpen, setModalOpen, isPlaylistEmpty, setIsPlaylistEmpty }) {
    const openModal = () => {
        setModalOpen(true);
    };

    return (
        <div>
            <div className='mainPage_top'>
                <h3>Your Playlists</h3>
                <br></br>
                <button className='button' onClick={openModal}>+ add new Playlist</button>
            </div>
            
            {/*For: Find Playlist by name*/}
            <PlaylistSearch playlists={playlists} setFilteredPlaylists={setFilteredPlaylists} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {/* For: + add playlist*/}
            {isModalOpen && <PlaylistForm onAddPlaylist={addPlaylist} currentId={filteredPlaylists.length + 1} />}

            {/*List of playlists*/}

            <PlaylistBoxes filteredPlaylists={filteredPlaylists} deletePlaylists={deletePlaylists} />

            {/*Generator for Example Playlists*/}
            
            {isPlaylistEmpty &&<Generator setPlaylists={setPlaylists} setFilteredPlaylists={setFilteredPlaylists} setIsPlaylistEmpty={setIsPlaylistEmpty}/>}
        
        </div>
    );
}

export default MainPage;