import React, { useState, useEffect } from 'react'
import tmdb from '../apis/tmdb';


const MovieVideos = ({ movieId }) => {
  const [videos, setVideos] = useState([])

  const fetchVideos = async () => {
    try {
      const fetchData = await tmdb.get(`movie/${movieId}/videos`, {
        params: {
          language: "en-US",
        }
      });
      setVideos(fetchData.data.results);
    } catch (error) {
      console.log(error);
      setVideos([]);
    }
  }

  useEffect(() => {
    fetchVideos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <div>
      {videos && (
        <>
          <h3>Videos</h3>
          <div className="video-grid">
            {videos.slice(0, 5).map((v, i) => (
              <YtVideo video={v} key={i} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const YtVideo = ({ video }) => (
  <div className="video-responsive">
    <iframe
      // width="853"
      // height="480"
      src={`https://www.youtube.com/embed/${video.key}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={video.name}
    />
  </div>
)

export default MovieVideos