import React, { useState } from 'react';
import './VideoForm.css'

const VideoForm = ({ onAddVideo, onDeleteVideos }) => {
    const [video, setVideo] = useState('');

    const handleInputChange = (event) => {
        setVideo(event.target.value);
    };

    const addVideo = () => {
        onAddVideo(video);
        setVideo('');
    };

    const deleteVideos = () => {
        onDeleteVideos();
        console.log('delete');
    };

    const moveVideo = () => {
        console.log('move');
    }

    return (
        <div className='controlPanel'>
            <div id='addPanel'>
                <button id='addButton' onClick={addVideo}>Add Video</button>
                <input className='addVideoInput' id='url' type="text" value={video} onChange={handleInputChange} placeholder='url of video from YouTube' />
            </div>

            <div id='moveAndDelete'>
                {/*<button id='moveButton' onClick={moveVideo} type='button'>Move to</button>*/}
                <button id='deleteButton' onClick={deleteVideos}>Delete selected</button>
            </div>
        </div>
    );
};

export default VideoForm;