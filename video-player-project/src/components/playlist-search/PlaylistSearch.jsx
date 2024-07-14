import React, {useEffect} from 'react';
import './PlaylistSearch.css'

const PlaylistSearch = ({ playlists, setFilteredPlaylists, searchQuery, setSearchQuery }) => {

  useEffect(() => {
    const Debounce = setTimeout(() => {
      setFilteredPlaylists(filterPlaylists(searchQuery));
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchQuery]);

  const filterPlaylists = (searchText) => {
    if (!searchText) {
      return playlists;
    }

    return playlists.filter(({ name }) =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );

  };

  return (
    <div className='find__playlist'>
      <input
        type='text'
        placeholder='Find Playlist by name'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)} />
    </div>
  )
}

export default PlaylistSearch;