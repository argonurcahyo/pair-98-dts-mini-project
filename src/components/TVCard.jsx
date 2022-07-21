import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200/'

const TVCard = ({ tv }) => {
 const navigate = useNavigate();

 const handleClick = () => {
  navigate(`/tv/${tv.id}`)
 }

 return (
  <motion.div layout
   whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
   }}
   onClick={handleClick}
   className='movie-card'>
   <div className='overlay'></div>
   {tv && (

    <img
     src={`${BASE_IMG_URL}${tv.poster_path}`}
     alt={tv.name} />
   )}
  </motion.div>
 )
}

export default TVCard