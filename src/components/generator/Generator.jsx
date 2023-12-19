import React from 'react';
import PlaylistService from '../../API/PlaylistService';
import './Generator.css'

const Generator = ({setPlaylists, setFilteredPlaylists, setIsPlaylistEmpty}) => {
    async function generate() {
        const playlistsFromService = await PlaylistService.getAll();
        setPlaylists(playlistsFromService);
        setFilteredPlaylists(playlistsFromService);
        setIsPlaylistEmpty(false);
    }

    return (
        <div>
            <button className='generateButton' onClick={generate}>Generate</button>
        </div>
    );
}

export default Generator;