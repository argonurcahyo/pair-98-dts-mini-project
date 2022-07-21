import React from 'react'
import NewMovie from '../components/NewMovie'
import PopularMovie from '../components/PopularMovie'
import TVNew from '../components/TVNew'
import TVPopular from '../components/TVPopular'

const NewPopular = () => {
 return (
  <div className='container'>
   <div className='home'>
    <NewMovie />
    <TVNew />
    <PopularMovie />
    <TVPopular />
   </div>
  </div>
 )
}

export default NewPopular