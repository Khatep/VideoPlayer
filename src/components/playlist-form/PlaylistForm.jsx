import React, { useState } from 'react';
import './PlaylistForm.css'
import * as images from '../../images'; 

const PlaylistForm = ({ onAddPlaylist, currentId}) => {
    const [isModalOpen, setModalOpen] = useState(true);
    const [playlist, setPlaylist] = useState({
        id: currentId,
        name: '',
        image: images.defImg,
        description: '',
        videos: []
    });

    const addPlaylist = () => {
        onAddPlaylist(playlist);
        setPlaylist('')
    };
    
    const closeModal = (e) => {
        playlist.name = '';
        //Next playlist is will not added:
        onAddPlaylist(playlist);
        setModalOpen(false);
    };

    return (
        <div id='modal'>
            <form className='PlaylistForm' onSubmit={closeModal}>
                <label htmlFor="playlistName">Name:    </label>
                <input type="text"
                    id="playlistName"
                    value={playlist.name}
                    onChange={(e) => setPlaylist({ ...playlist, name: e.target.value })}
                />
                <br />
                <br />
                <label htmlFor="playlistImage">Preview:</label>
                <input
                    type="file"
                    id="playlistImageInput"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            
                            reader.onloadend = () => {
                                setPlaylist({
                                    ...playlist,
                                    image: reader.result,
                                });
                            };
                            reader.readAsDataURL(file);
                        }
                    }}
                />

                <br />
                <br />
                <label htmlFor="playlistDescription">Description:</label>
                <br />
                <textarea id="playlistDescription"
                    value={playlist.description}
                    onChange={(e) => setPlaylist({ ...playlist, description: e.target.value })}
                ></textarea>
                <div className='bottom_buttons'>
                    <div id='add__button'>
                        <button type='button' onClick={addPlaylist}>Save</button>
                    </div>

                    <div id='cancel__button'>
                        <button type='button' onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PlaylistForm;