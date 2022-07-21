import React, { useEffect, useState } from 'react'
import tmdb from '../apis/tmdb';
import TVSlider from './TVSlider';

const TVTopRated = () => {
 const [tv, setTv] = useState([])
 const fetchTopRated = async () => {
  try {
   const fetchData = await tmdb.get("tv/top_rated", {
    params: {
     language: "en-US",
     region: "ID"
    }
   });
   setTv(fetchData.data.results);
  } catch (error) {
   console.log(error);
   setTv([]);
  }
 }

 useEffect(() => {
  fetchTopRated()
 }, []);

 return (
  <div className='top-rated'>
   <h1 style={{ marginTop: '0px' }}>Top TV Series</h1>
   {tv && (
    <TVSlider data={tv} />
   )}
  </div>
 )
}

export default TVTopRated