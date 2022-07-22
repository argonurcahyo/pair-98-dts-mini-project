import React from 'react'
import { MovieCarousel } from '../components/MovieCarousel'
import NewMovie from '../components/NewMovie'
import PopularMovie from '../components/PopularMovie'
import TopRatedMovie from '../components/TopRatedMovie'
import UserList from '../components/UserList'

const Home = () => {
 return (
  <div className='container'>
   <MovieCarousel />
   <div className='home'>
    <PopularMovie />
    <NewMovie />
    <TopRatedMovie />
    <UserList />
   </div>
  </div>
 )
}

export default Home