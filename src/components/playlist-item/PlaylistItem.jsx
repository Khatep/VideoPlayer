import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PlaylistItem.css'
const PlaylistItem = (props) => {
    return (
        <div>
            <img src={props.playlist.image} alt={props.name} />
            <h1>{props.number}. {props.playlist.name}</h1>
            <p>{props.playlist.description}</p>
            <div id='buttons'>
                <button onClick={() => props.deletePlaylists(props.playlist)} id='delete_button'>Delete</button>
                <Link to={`/playlist/${props.playlist.name}`}>
                    <button id='go_button'>Go to playlist</button>
                </Link>
            </div>
        </div>
    )
}

export default PlaylistItem