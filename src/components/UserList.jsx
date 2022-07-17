import React from 'react'
import MovieCard from './MovieCard'

const UserList = () => {
    return (
        <div className='user-list'>
            <h1 style={{ marginTop: '0px' }}>My List</h1>
            <MovieCard />
        </div>
    )
}

export default UserList