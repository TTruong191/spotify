
import './App.css';
import DetailSong from './component/DetailSong';
import ListSong from './component/ListSong';
import Navbar from './component/Navbar';
import DataSongs from './data/songs.json';
import { Songs } from './Context';
import Playing from './component/Playing';
import { useState } from 'react';
function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idsong) => {
    const song = DataSongs.find(song => song.id === idsong)
    if (!song)
      setSong(DataSongs[0])
    else
      setSong(song);
  }
  return (
    <div className="App ">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>

    </div>
  );
}

export default App;
