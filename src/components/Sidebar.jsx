
import './Sidebar.css'
import { BsFillMusicPlayerFill, BsHeadphones } from 'react-icons/bs';
import { AiFillHome, AiFillHeart, AiOutlineCloseSquare } from 'react-icons/ai';
import { RiCompassDiscoverLine } from 'react-icons/ri';
import { BiMenu } from 'react-icons/bi';
import { useState, useRef } from 'react';



function Sidebar() {

    const navRef = useRef();
    const showNav = () => {
      navRef.current.classList.toggle("responsive-nav")
     };
  return (
    <>
    <div className="sidebar open">
  <button className='nav-btn nav-close' onClick={showNav}>< AiOutlineCloseSquare /></button>
  <button className='nav-btn' onClick={showNav}><BiMenu /> </button>
<div className="logo">
    < BsFillMusicPlayerFill  className ="icon" />
    <h1>HEROPLAY</h1>
</div>

<div className="menu-items" ref={navRef}>
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
<hr/>
<button className='btn'>Log In</button>

    </div>
   </>
  )
}

export default Sidebar

                   