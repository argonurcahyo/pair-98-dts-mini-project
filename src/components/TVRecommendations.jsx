import React, { useEffect, useState } from 'react'
import tmdb from '../apis/tmdb';
import TVSlider from './TVSlider';

const TVRecommendations = ({ tvId }) => {
 const [tv, setTv] = useState([])

 const fetchRecommend = async () => {
  try {
   const fetchData = await tmdb.get(`tv/${tvId}/recommendations`, {
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
  fetchRecommend()
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [tvId]);

 return (
  <div className='popular'>
   <h3 style={{ marginTop: '0px' }}>Recommendations</h3>
   {tv && (
    <TVSlider data={tv} />
   )}

  </div>
 )
}

export default TVRecommendations