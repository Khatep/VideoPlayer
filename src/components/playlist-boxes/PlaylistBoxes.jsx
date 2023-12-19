import React from 'react';
import PlaylistItem from '../playlist-item/PlaylistItem'
import './PlaylistBoxes.css'

const PlaylistBoxes = ({ filteredPlaylists, deletePlaylists }) => {
    
    if (filteredPlaylists == null || !filteredPlaylists.length) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px'  }}>
                <h1>
                    There are no Playlists!
                </h1>
            </div>
        )
    }

    return (
        <div>
            <div className='playlists'>
                {filteredPlaylists.map((playlist, index) => (
                    <div key={playlist.id} className='playlistBox'>
                        <PlaylistItem deletePlaylists={deletePlaylists} number={index + 1} playlist={playlist} key={playlist.id} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlaylistBoxes;