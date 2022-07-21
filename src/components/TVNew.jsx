import React, { useEffect, useState } from 'react'
import tmdb from '../apis/tmdb';
import TVSlider from './TVSlider';

const TVNew = () => {
  const [newTV, setNewTV] = useState([])
  const fetchNewTV = async () => {
    try {
      const fetchData = await tmdb.get("tv/on_the_air", {
        params: {
          language: "en-US",
        }
      });
      setNewTV(fetchData.data.results);
    } catch (error) {
      console.log(error);
      setNewTV([]);
    }
  }

  useEffect(() => {
    fetchNewTV()
  }, []);

  return (
    <div className='new-movie'>
      <h1 style={{ marginTop: '0px' }}>New TV Series</h1>
      {newTV && (
        <TVSlider data={newTV} />
      )}
    </div>
  )
}

export default TVNew