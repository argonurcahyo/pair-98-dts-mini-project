import React, { useEffect, useState } from 'react'
import tmdb from '../apis/tmdb'
import MovieCard from './MovieCard'

const TopRatedMovie = () => {
 const [movies, setMovies] = useState([])
 const fetchTopRated = async () => {
  try {
   const fetchData = await tmdb.get("movie/top_rated", {
    params: {
     language: "en-US",
     region: "ID"
    }
   });
   setMovies(fetchData.data.results);
  } catch (error) {
   console.log(error);
   setMovies([]);
  }
 }

 useEffect(() => {
  fetchTopRated()
 }, []);

 return (
  <div className='top-rated'>
   <h1 style={{ marginTop: '0px' }}>Top Movie</h1>
   {movies ?
    <div className='movie-grid'>
     {movies.map((movie, i) => (
      <MovieCard movie={movie} index={i} />
     ))}
    </div>
    : <div>
     No Movie yet...</div>}
  </div>
 )
}

export default TopRatedMovie