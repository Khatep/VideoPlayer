import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoForm from '../video-form/VideoForm';
import VideoBoxes from '../video-boxes/VideoBoxes';
import './PlaylistPage.css';

const PlaylistPage = ({ playlists }) => {
    const { playlistName } = useParams();

    const currentPlaylist = playlists.find((playlist) => playlist.name === playlistName);
    
    const [videos, setVideos] = useState(currentPlaylist.videos);
    const [selectedVideos, setSelectedVideos] = useState([]);
    const [video, setVideo] = useState('');

    const addVideo = (newVideo) => {
        if (newVideo.trim() !== '') {
            setVideos([...videos, newVideo]);
            setVideo('');
        }
    };

    const handleCheckboxChange = (index) => {
        const updatedSelectedVideos = [...selectedVideos];
        updatedSelectedVideos[index] = !updatedSelectedVideos[index];
        setSelectedVideos(updatedSelectedVideos);
    };

    const deleteVideos = () => {
        const updatedVideos = videos.filter((_, index) => !selectedVideos[index]);
        setVideos(updatedVideos);
        setSelectedVideos([]);
    };
 
    return (
        <div>
            <h1 id='PlaylistName'>{currentPlaylist.name}</h1>
            
            <div className='controlPanel'>
                <VideoForm onAddVideo={addVideo} onDeleteVideos={deleteVideos}/>
            </div>

            {/*Video List*/}
            <VideoBoxes videos={videos} onCheckboxChange={handleCheckboxChange} selectedVideos={selectedVideos} />
            
        </div>
    );
};

export default PlaylistPage;
