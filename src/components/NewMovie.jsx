import React, { useEffect, useState } from 'react'
import tmdb from '../apis/tmdb'
import MovieSlider from './MovieSlider'

const NewMovie = () => {
   const [newMovie, setNewMovie] = useState([])
   const fetchNewMovie = async () => {
      try {
         const fetchData = await tmdb.get("movie/now_playing", {
            params: {
               language: "en-US",
               region: "US"
            }
         });
         setNewMovie(fetchData.data.results);
      } catch (error) {
         console.log(error);
         setNewMovie([]);
      }
   }

   useEffect(() => {
      fetchNewMovie()
   }, []);

   return (
      <div className='new-movie'>
         <h1 style={{ marginTop: '0px' }}>New Movie</h1>
         {newMovie && (
            <MovieSlider data={newMovie} />
         )}
      </div>
   )
}

export default NewMovie