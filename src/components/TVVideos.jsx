import React, { useEffect, useState } from 'react'
import tmdb from '../apis/tmdb'
import { YtVideo } from './MovieVideos'

const TVVideos = ({ tvId }) => {
 const [videos, setVideos] = useState([])

 const fetchVideos = async () => {
  try {
   const fetchData = await tmdb.get(`tv/${tvId}/videos`, {
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
 }, [tvId]);

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

export default TVVideos