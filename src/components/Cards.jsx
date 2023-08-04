import './Cards.css'
import SongCard from './SongCard'
import ArtistCard from './ArtistCard'
import { BsFillPlayCircleFill} from 'react-icons/bs';

function Cards() {
    return(
        <>

<div className="trending-music">
      <div className="trending-top">
        <h3>Trending Music <BsFillPlayCircleFill className="icon"/></h3>
        <p>See more</p>
      </div>
    </div>

<div className="trending-musicCard">

  <SongCard 
  image = "https://www.backend.myjoyonline.com/wp-content/uploads/2021/06/Shatta-Wale-1000x600-1.jpg" alt = "Shatta"
  title = {"On God"}
  name = {"Shatta Wale"}
  />

  <SongCard 
  image = "https://www.hitxgh.com/php_system/uploads/2018/05/sarkodie-sarkoholics.jpg" alt = "Sarkodie"
  title = {"Countryside"}
  name = {"Sarkodie"}
  />

  <SongCard 
  image = "https://www.hitxgh.com/php_system/uploads/2022/10/black-sherif-1.jpg" alt = "black sherif"
  title = {"Konongo Zongo"}
  name = {"Black Sherif"}
  />

  <SongCard 
  image = "https://yt3.googleusercontent.com/WEOXI5pZS7Ss2DqrNWZTMuBG3essqcumqG0yhusQAYXcexGxy7pYJuIrreTpYTmTexEXQXIXCA=s900-c-k-c0x00ffffff-no-rj" alt = "stonebwoy"
  title = {"Into the Future"}
  name = {"Stonebwoy"}
  />

  <SongCard 
  image = "https://i.scdn.co/image/ab6761610000e5eb83525445ff0fbdf2baf41d56" alt = "rockstar"
  title = {"Wish Me Well"}
  name = {"Kuame Eugene"}
  />

  <SongCard 
  image = "https://www.hitz360.com/wp-content/uploads/2022/09/Lasmid-scaled.jpg" alt = "lasmid"
  title = {"Friday Night"}
  name = {"Lasmid"}
  />

  <SongCard 
  image = "https://i0.wp.com/www.six9ja.com/wp-content/uploads/2022/05/Black-Sherif-%E2%80%93-All-Songs.jpg?fit=749%2C936&ssl=1" alt = "blacko"
  title = {"KKT"}
  name = {"Black Sherif"}
  />
  </div>

  <div className="top-artistes">
      <div className="Artist-top">
        <h3>Top Artistes</h3>
        <p>See more</p>
      </div>
    </div>

<div className="artist-card">

<ArtistCard 
img = "https://yt3.googleusercontent.com/WEOXI5pZS7Ss2DqrNWZTMuBG3essqcumqG0yhusQAYXcexGxy7pYJuIrreTpYTmTexEXQXIXCA=s900-c-k-c0x00ffffff-no-rj"
name = {"Stonebwoy"}
/>
<ArtistCard 
img = "https://i1.sndcdn.com/avatars-000377166650-uywlyt-t500x500.jpg"
name = {"Kofi Kinata"}/>
<ArtistCard 
img = "https://www.graphic.com.gh/images/2022/nov/16/gyakie.jpg"
name = {"Gyakie"}/>
<ArtistCard 
img = "https://i1.sndcdn.com/avatars-jhIGQBcvz944mpMP-CyvSaw-t500x500.jpg"
name = {"Kidi"}/>
<ArtistCard 
img = "https://graphic.com.gh/images/2022/sept/12/Wendy%20Shay.jpg"
name = {"Wendy Shay"}/>
<ArtistCard 
img = "https://beatznation.com/wp-content/uploads/2016/05/Strongman.jpg"
name = {"Strongman"}/>

</div>

<div className="trending-music popular">
      <div className="trending-top">
        <h3>Popular Songs <BsFillPlayCircleFill className="icon"/></h3>
        <p>See more</p>
      </div>
    </div>

<div className="trending-musicCard popularCard">

  <SongCard 
  image = "https://www.yourstru.ly/wp-content/uploads/2023/01/2023-01-04_52_sarkodie-biography-ag.jpeg" alt = "Sark"
  title = {"Hero"}
  name = {"Sarkodie"}
  />

  <SongCard 
  image = "https://i.guim.co.uk/img/media/dbac34d3006580e07209c8883705cdf3869d6d3a/631_2_3096_1858/master/3096.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a8dfa7ac9e54a4463801bc581d438bd4" alt = "burner boy"
  title = {"Breakfast"}
  name = {"Burner Boy"}
  />

  <SongCard 
  image = "https://yt3.googleusercontent.com/WEOXI5pZS7Ss2DqrNWZTMuBG3essqcumqG0yhusQAYXcexGxy7pYJuIrreTpYTmTexEXQXIXCA=s900-c-k-c0x00ffffff-no-rj" alt = "stonebwoy"
  title = {"Into the Future"}
  name = {"Stonebwoy"}
  />

  <SongCard 
  image = "https://ghanandwom.net/wp-content/uploads/2023/03/Davido.jpg" alt = "davido"
  title = {"Baddest Boy"}
  name = {"Davido"}
  />

  <SongCard 
  image = "https://www.hitz360.com/wp-content/uploads/2022/09/Lasmid-scaled.jpg" alt = "lasmid"
  title = {"Friday Night"}
  name = {"Lasmid"}
  />

  <SongCard 
  image = "https://i0.wp.com/www.six9ja.com/wp-content/uploads/2022/05/Black-Sherif-%E2%80%93-All-Songs.jpg?fit=749%2C936&ssl=1" alt = "blacko"
  title = {"KKT"}
  name = {"Black Sherif"}
  />
  </div>
</>
    )
}


export default Cards