import React, { useEffect, useState } from 'react'
import tmdb from '../apis/tmdb';
import TVSlider from './TVSlider'

const TVSimilar = ({ tvId }) => {
 const [tv, setTv] = useState([])

 const fetchSimilar = async () => {
  try {
   const fetchData = await tmdb.get(`tv/${tvId}/similar`, {
    params: {
     language: "en-US",
    }
   });
   setTv(fetchData.data.results);
  } catch (error) {
   console.log(error);
   setTv([]);
  }
 }

 useEffect(() => {
  fetchSimilar()
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [tvId]);

 return (
  <div className='popular'>
   <h3 style={{ marginTop: '0px' }}>Similar TV Series</h3>
   {tv && (
    <TVSlider data={tv} />
   )}

  </div>
 )
}

export default TVSimilar