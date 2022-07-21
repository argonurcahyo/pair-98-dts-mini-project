import React from 'react'
import NewMovie from '../components/NewMovie'
import PopularMovie from '../components/PopularMovie'
import TopRatedMovie from '../components/TopRatedMovie'

const Movies = () => {
 return (
  <div className='container'>
   <div className='home'>
    <PopularMovie />
    <NewMovie />
    <TopRatedMovie />
   </div>
  </div>
 )
}

export default Movies