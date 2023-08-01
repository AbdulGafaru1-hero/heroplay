import './SongCard.css'
import { BsFillPlayCircleFill} from 'react-icons/bs';

function SongCard({ image, title, name, alt}) {
  return (
    <div className='card'>
    <BsFillPlayCircleFill className="play-button"/>
   <img src={image} alt={alt} />
   <h3>{title}</h3>
   <p>{name}</p>
    </div>
  )
}

export default SongCard