import './Feed.css'
import RightSidebar from './RightSidebar'
import Main from './Main'

function Feed() {
  return (
    <div className='feed'>
      <Main className="feedMain" />
     < RightSidebar className="feedSidebar"/> 
    </div>
  )
  }

export default Feed