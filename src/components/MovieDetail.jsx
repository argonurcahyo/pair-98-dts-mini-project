import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdb from '../apis/tmdb'
import MovieVideos from './MovieVideos'
import RecommendMovies from './RecommendMovies'
import SimilarMovies from './SimilarMovies'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/'
const LOADING_IMG_URL = 'https://c.tenor.com/aEjYE139N7wAAAAC/discord-loader.gif'

const MovieDetail = () => {
    let { movieId } = useParams();

    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)

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

    // const similarMovies = async () => {

    // }

    useEffect(() => {
        fetchDetail()
        // fetchImages()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);

    const handleLoaded = () => {
        setLoading(false)
    }

    return (
        <div className='content'>
            <div className='movie-detail'>
                <a href="/">Back</a>
                <h1>{detail.title}</h1>
                <div className='movie-backdrop'>
                    <div style={{ display: loading ? "block" : "none" }}>
                        <img src={LOADING_IMG_URL} alt="loading" />
                    </div>
                    <div style={{ display: loading ? "none" : "block" }}>
                        <img
                            src={`${BASE_IMG_URL}${detail.backdrop_path}`}
                            alt={detail.title}
                            onLoad={handleLoaded} />
                    </div>
                </div>
                <div className='movie-description'>
                    <p>Description</p>
                    <span className="overview">
                        {detail.overview}
                    </span>
                </div>
                <SimilarMovies movieId={movieId} />
                <RecommendMovies movieId={movieId} />
                <MovieVideos movieId={movieId} />
            </div>
        </div>
    )
}

export default MovieDetail