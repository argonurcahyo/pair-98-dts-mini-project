import React from 'react'
import NewMovie from './NewMovie'
import PopularMovie from './PopularMovie'
import TopRatedMovie from './TopRatedMovie'
import UserList from './UserList'

const Home = () => {
    return (
        <div className='home'>
            <PopularMovie />
            <NewMovie />
            <TopRatedMovie />
            <UserList />
        </div>
    )
}

export default Home