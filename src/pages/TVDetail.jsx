import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdb from '../apis/tmdb'
import Moment from 'react-moment'
import TVSimilar from '../components/TVSimilar'
import TVRecommendations from '../components/TVRecommendations'
import TVVideos from '../components/TVVideos'

const TVDetail = () => {
  let { tvId } = useParams()
  const [detail, setDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const LOADING_IMG_URL = 'https://c.tenor.com/aEjYE139N7wAAAAC/discord-loader.gif'
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/'


  const fetchDetail = async () => {
    try {
      const fetchData = await tmdb.get(`tv/${tvId}`, {
        params: {
          append_to_response: "credits,keywords,videos"
        }
      })
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tvId]);

  const handleLoaded = () => {
    setLoading(false)
  }

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
                {detail.name}
              </div>
            </div>
            <img
              src={`${BASE_IMG_URL}${detail.backdrop_path}`}
              alt={detail.name}
              onLoad={handleLoaded} />
          </div>
        </div>
        <div className='movie-detail-content'>
          <div className='movie-description'>
            <div className='movie-release-date'>
              Release date : <Moment format='MMMM Do, YYYY'>{detail.release_date}</Moment>
            </div>

            {detail?.created_by?.length > 0 && (
              <>Created by : {detail.created_by.map(c => c.name).join(", ")}</>
            )}
            <br />
            {detail?.genres?.length > 0 && (
              <>Genre : {detail?.genres.map((g) => g.name).join(', ')}</>
            )}<br />
            {detail?.keywords?.results?.length > 0 && (
              <>Keyword : {detail?.keywords?.results?.map(k => k.name).join(', ')}</>
            )}<br />
            {detail?.origin_country?.length > 0 && (
              <>Origin Country : {detail?.origin_country?.join(", ")}</>
            )}<br />
            {detail?.networks?.length > 0 && (
              <>Networks : {detail?.networks.map(n => n.name).join(', ')}</>
            )}
            {detail?.overview && (
              <>
                <p>Description</p>
                <span className="overview">
                  {detail?.overview}
                </span>
              </>
            )}

          </div>
          <div style={{
            textAlign: "center",
            display: loading ? "block" : "none",
            padding: "100px"
          }}>
            Loading...
          </div>

          <div className='movie-additional-content' style={{ display: loading ? "none" : "block" }}>
            <TVVideos tvId={tvId} />
            <TVSimilar tvId={tvId} />
            <TVRecommendations tvId={tvId} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default TVDetail