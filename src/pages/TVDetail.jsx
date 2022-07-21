import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdb from '../apis/tmdb'

const TVDetail = () => {
 let { tvId } = useParams()
 const [detail, setDetail] = useState({})
 const [loading, setLoading] = useState(true)
 const fetchDetail = async () => {
  try {
   const fetchData = await tmdb.get(`tv/${tvId}`)
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
 }, [tvId]);
 return (
  <div className='container'>
   <div className='movie-detail'>
    <div>TVDetail {tvId}</div>

   </div>
  </div>
 )
}

export default TVDetail