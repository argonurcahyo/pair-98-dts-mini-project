import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import MovieSlider from './MovieSlider'

const UserList = () => {
    const { movielist } = useContext(GlobalContext)

    return (
        <div className='list'>
            <h1 style={{ marginTop: '0px' }}>My List</h1>
            {movielist ? (
                <MovieSlider data={movielist} />
            ) : "No Movie yet"}
        </div>

    )
}

export default UserList