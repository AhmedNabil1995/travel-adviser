import React from 'react'
import './ListDetails.css'
export default function ListDetails(props) {
    let {place} = props;
    
  return (
    <div className="card listdetails">
    <img src={place?.photo?.images?.medium?.url} />
    <div className="card-body">
        <h4>{place?.name}</h4>
        <div className='detail'>
            <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            </span>
            <p>{place?.num_reviews} reviews</p>
        </div>
        <div className='detail'>
            <span>price</span>
            <p>{place?.price}</p>
        </div>
        <div className='detail'>
            <span>Ranking</span>
            <p>{place?.ranking}</p>
        </div>
        <div className='detail'>
            <span>
            <i className="fa-solid fa-location-dot"></i>
            </span>
            <p>{place?.location_string}</p>
        </div>
        <div className='detail'>
            <span>
            <i className="fa-solid fa-phone"></i>
            </span>
            <p>{place?.phone}</p>
        </div>
        <a href={place.web_url} target='_blank'>review Site</a>
        <a href={place.website} target='_blank'>Website</a>
    </div>
</div>
  )
}
