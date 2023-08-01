import './ChartCards.css';
import { AiOutlineHeart} from 'react-icons/ai';

function ChartCards ({image, name, title}){
    return (

<div className="chartCards">
<div className="card-img">
    <img src={image} alt="" />
    <div className="song">
        <h1>{title}</h1>
        <p>{name}</p>
    </div>
    <AiOutlineHeart className='fav'/>
</div>

     </div>
    )
}

export default ChartCards