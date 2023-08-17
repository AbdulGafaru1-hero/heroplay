import React, { useState } from 'react';
import './Sidebar.css';
import { BsFillMusicPlayerFill, BsHeadphones } from 'react-icons/bs';
import { AiFillHome, AiFillHeart, AiOutlineCloseSquare } from 'react-icons/ai';
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { BiMenu } from 'react-icons/bi';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from "../pages/discover/Search";
import Playlist from "../pages/Playlist/Playlist";
import Favourite from "../pages/Favourites/Favourite";
import Login from "../pages/Login/Login";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuIconClick = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={handleMenuIconClick}>
        {isSidebarOpen ? <AiOutlineCloseSquare className="menuIcon" /> : <BiMenu className="menuIcon" />}
      </div>

      {/* Sidebar */}
      <Router>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo">
          <BsFillMusicPlayerFill className="icon" />
          <h1>HEROPLAY</h1> 
        </div>

        <div className="menu-items">
          <div className="item active">
            <Link to="/">
            <AiFillHome />
            <p>Home</p>
            </Link>
          </div>
          <div className="item">
            <Link to="/search">
            <RiCompassDiscoverLine />
            <p>Discover</p>
            </Link>
          </div>
          <div className="item">
            <Link to="/playlist">
            <BsHeadphones />
            <p>Playlists</p>
            </Link>
          </div>
          <div className="item">
            <Link to="/favourite">
            <AiFillHeart />
            <p>Favourites</p>
            </Link>
          </div>
        </div>
        <hr />
        <button className="btn">Log In</button>
      </div>

      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h4>Page Not Found!</h4>} />
      </Routes>
      </Router>
    </>
  );
}

export default Sidebar;