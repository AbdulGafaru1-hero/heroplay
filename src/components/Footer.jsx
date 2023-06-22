import './Footer.css'

import { BiShuffle, BiSkipNext, BiSkipPrevious} from 'react-icons/bi';
import { BsFillPlayCircleFill} from 'react-icons/bs';
import { LuShare2} from 'react-icons/lu';
import { AiOutlineHeart} from 'react-icons/ai';
import { GiSpeaker} from 'react-icons/gi';


function Footer() {
  return (
    <div className='footer'>
       <div className="footer-left">
        <img src="https://cdn.ghanaweb.com/imagelib/pics/577/57796120.295.jpg" alt="" />
        <div className="footer-profile">
          <h3>Countryside</h3>
          <p>Sarkodie</p>
        </div>
       </div>
       <div className="footer-center">
        <div className="footer-centerTop">
        <BiShuffle className='share icon'/>
        <BiSkipNext className='icon'/>
        <BsFillPlayCircleFill className='play icon'/>
        <BiSkipPrevious className='icon'/>
        <LuShare2 className='share icon'/>
        </div>
        <div className="footer-centerBottom">
        <p>0:00</p>
        <div className="items">
       <div className='line'>
        <div className="circle"></div>
        </div>
       </div>
       <p>3:27</p>
        </div>
        
       </div>
       <div className="footer-bottom">
       <AiOutlineHeart />
       <GiSpeaker/>
       <div className='line2'>
        <div className="circle2"></div>
        </div>
    </div>
    </div>
  )
}

export default Footer;