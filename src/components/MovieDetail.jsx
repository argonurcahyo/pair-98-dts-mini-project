import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdb from '../apis/tmdb'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/'

const MovieDetail = () => {
    let { movieId } = useParams();

    const [detail, setDetail] = useState({})

    const fetchDetail = async () => {
        try {
            const fetchData = await tmdb.get(`movie/${movieId}`);
            setDetail(fetchData.data);
            console.log(fetchData.data)
        } catch (error) {
            console.log(error);
            setDetail([]);
        }
    }

    const fetchImages = async () => {
        try {
            const fetchImages = await tmdb.get(`movie/${movieId}/images`)
            console.log(fetchImages.data)
        } catch (error) {
            console.log(error)
        }
    }

    const similarMovies = async () => {

    }

    useEffect(() => {
        fetchDetail()
        fetchImages()
    }, []);


    return (
        <div className='content'>
            <div className='movie-detail'>
                <a href="/">Back</a>
                
                <div className='movie-backdrop'>
                    <img
                        src={`${BASE_IMG_URL}${detail.backdrop_path}`}
                        alt={detail.title} />
                        <h1>{detail.title}</h1>
                        <div>
                            <button as={Link} to="Home" class="button-play">Play</button>
                            <button class="button-more">More Information</button>
                        </div>
                </div>
            
                <div className='movie-description'>
                    <p>Description</p>
                    <span className="overview">
                        {detail.overview}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail