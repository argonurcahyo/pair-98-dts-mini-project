import React from 'react'
import TVNew from '../components/TVNew'
import TVPopular from '../components/TVPopular'
import TVTopRated from '../components/TVTopRated'

const TVSeries = () => {
 return (
  <div className='container'>
   <div className='home'>
    <TVPopular />
    <TVNew />
    <TVTopRated />
   </div>
  </div>
 )
}

export default TVSeries