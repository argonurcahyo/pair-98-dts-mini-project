import React, { useEffect, useState } from 'react'
import tmdb from '../apis/tmdb';
import MovieSlider from './MovieSlider';

const PopularMovie = () => {
  const [popular, setPopular] = useState([]);

  const fetchPopular = async () => {
    try {
      const fetchData = await tmdb.get("movie/popular", {
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
        <h1 style={{ marginTop: '0px' }}>Popular Movies</h1>
        {popular && (
          <MovieSlider data={popular} />
        )}
      </div>
    </>
  )
}
export default PopularMovie