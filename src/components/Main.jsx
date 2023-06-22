import './Main.css'
import { BsSearch} from 'react-icons/bs';
import { BsFillPlayCircleFill} from 'react-icons/bs';
import ArtistCard from './ArtistCard'
function Main() {
  return (
    <div className='main'>
    <div className="hero-section">
    <div className="input">
      <input type="text" placeholder="Search for song/artiste.." className="search-input"/>
      <BsSearch className='search-icon'/>
      </div>
    <hr />
    <div className="banner">
      <div className="banner-info">
        <h3> Discover Amazing Music!</h3>
        <p>Listen to your favourite songs and artists here.</p>
        <button>Listen Now</button>
        </div>
    </div>
    </div>

    <div className="trending-music">
      <div className="trending-top">
        <h3>Trending Music <BsFillPlayCircleFill className="icon"/></h3>
        <p>See more</p>
      </div>
    </div>

<div className="trending-musicCard">
  <ArtistCard/>
  <ArtistCard/>
  <ArtistCard/>
  <ArtistCard/>
  <ArtistCard/>
  <ArtistCard/>
</div>
    <h1>new</h1>
    <h1>new</h1>
    <h1>new</h1>
    <h1>new</h1>
    <h1>new</h1>
    <h1>new</h1>
    <h1>new</h1>
    <h1>new</h1>
    <h1>new</h1>
    <h1>new</h1>
    <h1>new</h1>
    <h1>new</h1>
    <h1>new</h1>
    <h1>new</h1>
    </div>
  )
}

export default Main