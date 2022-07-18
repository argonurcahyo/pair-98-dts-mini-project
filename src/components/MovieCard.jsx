import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200/'

const MovieCard = ({ movie, index }) => {
 const navigate = useNavigate();

 const handleClick = () => {
  navigate(`/movie/${movie.id}`)
 }

 return (
  <motion.div layout
   whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
   }}
   onClick={handleClick}
   key={index}
   className='movie-card'>
   <div className='overlay'></div>
   {movie && (
    <img src={`${BASE_IMG_URL}${movie.poster_path}`} alt={movie.title} />
   )}
  </motion.div>
 )
}

export default MovieCard