import './Main.css'
import { BsSearch} from 'react-icons/bs';
import Cards from './Cards'
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

    
<Cards/>

    </div>
  )
}

export default Main