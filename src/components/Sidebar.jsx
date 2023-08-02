import React, { useState } from 'react';
import './Sidebar.css';
import { BsFillMusicPlayerFill, BsHeadphones } from 'react-icons/bs';
import { AiFillHome, AiFillHeart, AiOutlineCloseSquare } from 'react-icons/ai';
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { BiMenu } from 'react-icons/bi';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuIconClick = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={handleMenuIconClick}>
        {isSidebarOpen ? <AiOutlineCloseSquare className="icon" /> : <BiMenu className="icon" />}
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo">
          <BsFillMusicPlayerFill className="icon" />
          <h1>HEROPLAY</h1>
        </div>

        <div className="menu-items">
          <div className="item active">
            <AiFillHome />
            <p>Home</p>
          </div>
          <div className="item">
            <RiCompassDiscoverLine />
            <p>Discover</p>
          </div>
          <div className="item">
            <BsHeadphones />
            <p>Playlists</p>
          </div>
          <div className="item">
            <AiFillHeart />
            <p>Favourites</p>
          </div>
        </div>
        <hr />
        <button className="btn">Log In</button>
      </div>
    </>
  );
}

export default Sidebar;
