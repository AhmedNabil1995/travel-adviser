import React from 'react'
import { Autocomplete } from '@react-google-maps/api';
import './NavBar.css';
export default function NavNar() {

  const onload = (a)=>{
    console.log(a)
  }

  const onplaceChanged = (a)=>{
    console.log(a)
  }

  return (
    <div className='navbar'>
      <div>Travel Advisor</div>
      <div className='search-container'>
        <div>Explore New Places</div>
        <Autocomplete onLoad={onload} onPlaceChanged={onplaceChanged}>
        <div className='search'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type='search' />
        </div>
        </Autocomplete>
      </div>
    </div>
  )
}
