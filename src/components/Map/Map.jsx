import React from 'react'
import './Map.css'
import GoogleMapReact from 'google-map-react'
import mapStyles from '../../mapStyles'
import { useState } from 'react';
import { useEffect } from 'react';
export default function Map(props) {
  let [coords,setcoords] = useState({lat:0,lng:0})
  let {filteredPlaces,setBounds,setChildClicked}  = props;
useEffect(()=>{
  navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position.coords.latitude,position.coords.longitude)
    setcoords({lat:position.coords.latitude,lng:position.coords.longitude})
  })
},[])

  return (
    <div className='map'>
      <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyAM3y947Td5kFkldDfIGF5yRXQpgQFRiuk" }}
      defaultCenter={{lat:0,lng:0}}
      center = {coords}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      //options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
      onChange={(e) => {
        setcoords({ lat: e.center.lat, lng: e.center.lng });
        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
      }}
      onChildClick={(child) => console.log(child)}
      >
      
        {filteredPlaces?.map((place,i)=>
        (<div
          lat={place.latitude}
          lng={place.longitude}
          key={i}
        >
          <div style={{width:'60px',backgroundColor:'white',padding:'3px',textAlign:'center',borderRadius:'2px'}}>
            <p style={{fontSize:'13px',margin:'0px',fontWeight:'500'}}>{place?.name}</p>
            <div style={{width:'100%',height:'40px',margin:'2px 0'}}>
              <img style={{width:'100%',height:'100%'}} src={place?.photo?.images?.small?.url} />
              </div>
              <span style={{textAlign:'center',color:'gold'}}>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            </span>
          </div>
        </div>)
        )}
      </GoogleMapReact>
    </div>
  )
}
