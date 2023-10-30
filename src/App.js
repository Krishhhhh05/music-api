import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Fav from './components/Fav';
import Playlist from './components/Playlist';
import Search from './components/Search';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favourite" element={<Fav />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
      <div class="sidebar">
        <Link to='/' class="sidebar-button">Home</Link>
        <Link to='/search' class="sidebar-button">Search</Link>
        <Link to='/favourite' class="sidebar-button">Favorites</Link>
        <Link to='/playlist' class="sidebar-button">Playlists</Link>

      </div>
    </div>
  );
}

export default App;
