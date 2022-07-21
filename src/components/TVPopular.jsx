import React, { useEffect, useState } from 'react'
import tmdb from '../apis/tmdb';
import TVSlider from './TVSlider';

const TVPopular = () => {
 const [popular, setPopular] = useState([]);

 const fetchPopular = async () => {
  try {
   const fetchData = await tmdb.get("tv/popular", {
    params: {
     language: "en-US",
    }
   });
   setPopular(fetchData.data.results);
  } catch (error) {
   console.log(error);
   setPopular([]);
  }
 }

 useEffect(() => {
  fetchPopular()
 }, []);


 return (
  <>
   <div className='popular'>
    <h1 style={{ marginTop: '0px' }}>Popular TV Series</h1>
    {popular && (
     <TVSlider data={popular} />
    )}
   </div>
  </>
 )
}

export default TVPopular