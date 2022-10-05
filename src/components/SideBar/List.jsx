import React from 'react'
import ListDetails from '../ListDetails/ListDetails'
import getList from '../Api/Api'
import './List.css'
import { useEffect } from 'react'
import { useState } from 'react'
export default function List(props) {
    let [places,setPlaces] = useState([]);
    let [type,settype] = useState('restaurants');
    let [reviews,setreviews] = useState(0);
    let {filteredPlaces,setFilteredPlaces,bounds}  = props;
    useEffect(()=>{
       getList(type,bounds).then((res)=>{
        if(res)
        setPlaces(res.data);
       })
    },[])

    useEffect(()=>{
        setPlaces([]);
        getList(type,bounds).then((res)=>{
          if(res)
         setPlaces(res.data);
        })
     },[type,bounds])

     useEffect(()=>{
        setFilteredPlaces(places.filter((el)=>{
            return Number(el.num_reviews) >= Number(reviews)
        }))
     },[places])

     useEffect(()=>{
        setFilteredPlaces(places.filter((el)=>{
            return Number(el.num_reviews) >= Number(reviews)
        }))
     },[reviews])
  return (
    <div className='list'>
      <h3>Food & Dinnig around you</h3>
      <div className='filter'>
        <div className='filter-item'>
            <label>Type</label>
            <select  onChange={(e)=>{settype(e.target.value)}}>
                <option value='restaurants'>Restaurants</option>
                <option value='hotels'>Hotels</option>
                <option value='attractions'>Attractions</option>
            </select>
        </div>
        <div className='filter-item'>
        <label>Rating</label>
            <select onChange={(e)=>{setreviews(e.target.value)}}>
                <option value='0'>All</option>
                <option value='1'>above 1.0</option>
                <option value='2'>above 2.0</option>
                <option value='3'>above 3.0</option>
                <option value='4'>above 4.0</option>
            </select>
        </div>
      </div>
     
      <div className='list-details'>
        {filteredPlaces?.map((place,i)=>
            (<ListDetails key={i} place={place}/>)
        )}

      </div>

    </div>
  )
}
