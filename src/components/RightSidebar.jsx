import './RightSidebar.css';
import ChartCards from './ChartCards'
import Cat from './Cat'

function RightSidebar() {
  return (
    <div className='rightSideBar'> 
    {/* <div className="profile-image">
      <img src="https://www.yourstru.ly/wp-content/uploads/2023/01/2023-01-04_52_sarkodie-biography-ag.jpeg" alt="" />
    </div> */}
    <div className='top-chart'> 
    <h3>Top Charts</h3>
<ChartCards
 image="https://yt3.googleusercontent.com/WEOXI5pZS7Ss2DqrNWZTMuBG3essqcumqG0yhusQAYXcexGxy7pYJuIrreTpYTmTexEXQXIXCA=s900-c-k-c0x00ffffff-no-rj"
title="Into The Future"
name="Stonebwoy"
/>

<ChartCards
 image="https://www.yourstru.ly/wp-content/uploads/2023/01/2023-01-04_52_sarkodie-biography-ag.jpeg"
title="Hero"
name="Sarkodie"
/>

<ChartCards
 image="https://i0.wp.com/www.six9ja.com/wp-content/uploads/2022/05/Black-Sherif-%E2%80%93-All-Songs.jpg?fit=749%2C936&ssl=1"
title="Oil in My Head"
name="Black Sherif"
/>

<ChartCards
 image="https://ghanandwom.net/wp-content/uploads/2023/03/Davido.jpg"
title="Baddest Boy"
name="Davido"
/>

<ChartCards
 image="https://i.guim.co.uk/img/media/dbac34d3006580e07209c8883705cdf3869d6d3a/631_2_3096_1858/master/3096.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a8dfa7ac9e54a4463801bc581d438bd4"
title="Breakfast"
name="Burner Boy"
/>
<ChartCards
 image="https://i1.sndcdn.com/avatars-000377166650-uywlyt-t500x500.jpg"
title="Effiakuma Love"
name="Kofi Kinata"
/>


    </div>
    <div className="categories">
    <h3>Categories</h3>
    <div className="cats">
      <Cat title="Afrobeats"/>
      <Cat title="Hip hop"/>
      <Cat title="Highlife"/>
      <Cat title="Amapiano"/>
      <Cat title="Romance"/>
      <Cat title="Dancehall"/>
    </div>
    </div>
    </div>
  )
}

export default RightSidebar