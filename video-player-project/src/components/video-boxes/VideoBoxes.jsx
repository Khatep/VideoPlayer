import React from 'react';
import ReactPlayer from 'react-player';
import './VideoBoxes.css';
const VideoBoxes = ({ videos, onCheckboxChange, selectedVideos }) => {
   
    if (!videos.length) {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>
                    There are no Videos!
                </h1>
            </div>
        )
    }
    
    return (
        <div className='videoList'>
            {videos.map((videoUrl, index) => (
                <div className='videoBox' key={index}>
                    <input
                        id='checkBox'
                        type="checkbox"
                        checked={selectedVideos[index] || false}
                        onChange={() => onCheckboxChange(index)}
                    />
                    <ReactPlayer url={videoUrl} width="350px" height="250px" />
                </div>
            ))}
        </div>
    );
};

export default VideoBoxes;