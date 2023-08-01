import './ArtistCard.css'

function ArtistCard ( { name, img}) {
return (
<div className="artistCard">
<img src={img}alt="" />

<p>{name}</p>
</div>
)

}


export default ArtistCard