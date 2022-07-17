import React from 'react'
import { useNavigate } from 'react-router-dom'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200/'

const MovieCard = ({ movie, index }) => {
 const navigate = useNavigate();

 const handleClick = () => {
  navigate(`/movie/${movie.id}`)
 }

 return (
  <div onClick={handleClick} key={index} className='movie-card'>
   <div className='overlay'></div>
   {movie && (
    <img src={`${BASE_IMG_URL}${movie.poster_path}`} alt={movie.title} />
   )}
  </div>
 )
}

export default MovieCard