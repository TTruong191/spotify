
import './App.css';
import DetailSong from './component/DetailSong';
import ListSong from './component/ListSong';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player'>
        {/* span 1 */}
        <DetailSong />
        {/* span 2 */}
        <ListSong />
      </div>
    </div>
  );
}

export default App;
