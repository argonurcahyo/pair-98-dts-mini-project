import { faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdb from '../apis/tmdb'
import MovieVideos from '../components/MovieVideos'
import RecommendMovies from '../components/RecommendMovies'
import SimilarMovies from '../components/SimilarMovies'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import Moment from 'react-moment'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/'
const LOADING_IMG_URL = 'https://c.tenor.com/aEjYE139N7wAAAAC/discord-loader.gif'

const MovieDetail = () => {
  let { movieId } = useParams();

  const [detail, setDetail] = useState({})
  const [loading, setLoading] = useState(true)


  const fetchDetail = async () => {
    try {
      const fetchData = await tmdb.get(`movie/${movieId}`, {
        params: {
          append_to_response: 'credits,keywords'
        }
      });
      setDetail(fetchData.data);
      console.log(fetchData.data)
    } catch (error) {
      console.log(error);
      setDetail({});
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)
    fetchDetail()

    // fetchImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const handleLoaded = () => {
    setLoading(false)
  }

  const useScroll = () => {
    const elRef = useRef(null);
    const executeScroll = () => elRef.current.scrollIntoView();
    return [executeScroll, elRef]
  }
  const [executeScroll, elRef] = useScroll();

  return (
    <div className='container'>
      <div className='movie-detail'>
        <div className='movie-backdrop'>
          <div style={{ display: loading ? "block" : "none" }}>
            <img src={LOADING_IMG_URL} alt="loading" />
          </div>
          <div style={{ display: loading ? "none" : "block" }}>
            <div className="movie-inset">
              <div className="movie-title">
                {detail.title}
              </div>
              <div className='btn-group'>
                <button className='btn add'>
                  <FontAwesomeIcon icon={faPlus} /> My List
                </button>
                <button className='btn video-play' onClick={executeScroll}>
                  <FontAwesomeIcon icon={faCirclePlay} /> Play Video
                </button>
              </div>
            </div>
            <img
              src={`${BASE_IMG_URL}${detail.backdrop_path}`}
              alt={detail.title}
              onLoad={handleLoaded} />
          </div>
        </div>
        <div className='movie-detail-content'>
          <div className='movie-description'>
            <div className='movie-release-date'>
              Release date : <Moment format='MMMM Do, YYYY'>{detail.release_date}</Moment>
            </div>

            {detail?.credits?.crew?.length > 0 && (
              <>Directed By : {detail?.credits?.crew?.filter((a) => a.job === "Director")
                .map((a) => a.name).join(",")}</>
            )}
            <br />
            {detail?.genres?.length > 0 && (
              <>Genre : {detail?.genres.map((g) => g.name).join(', ')}</>
            )}<br />
            {detail?.keywords?.keywords?.length > 0 && (
              <>Keyword : {detail?.keywords.keywords.map(k => k.name).join(', ')}</>
            )}
            <p>Description</p>
            <span className="overview">
              {detail.overview}
            </span>
          </div>
          <div style={{
            textAlign: "center",
            display: loading ? "block" : "none",
            padding: "100px"
          }}>
            Loading...  <FontAwesomeIcon className='spinner' icon={faSpinner} />
          </div>

          <div className='movie-additional-content' style={{ display: loading ? "none" : "block" }}>
            <div ref={elRef} className='movie-video'>

            </div>
            <SimilarMovies movieId={movieId} />
            <RecommendMovies movieId={movieId} />
            <MovieVideos movieId={movieId} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail