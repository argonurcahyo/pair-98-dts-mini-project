import React from 'react'
import MovieSlider from './MovieSlider'

const UserList = ({ data }) => {
    return (
        <div className='container'>
            <div className="home">
                <div className='list'>
                    <h1 style={{ marginTop: '0px' }}>My List</h1>
                    {data ? (
                        <MovieSlider data={data} />
                    ) : "No Movie yet"}
                </div>
            </div>
        </div>
    )
}

export default UserList