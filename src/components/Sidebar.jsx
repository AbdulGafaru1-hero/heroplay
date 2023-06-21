import './Sidebar.css'
import { BsFillMusicPlayerFill, BsHeadphones } from 'react-icons/bs';
import { AiFillHome, AiFillHeart } from 'react-icons/ai';
import { RiCompassDiscoverLine } from 'react-icons/ri';



function Sidebar() {
  return (
    <div className='sidebar'>
<div className="logo">
    < BsFillMusicPlayerFill  className ="icon" />
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
<hr/>
<button className='btn'>Log In</button>
    </div>
  )
}

export default Sidebar