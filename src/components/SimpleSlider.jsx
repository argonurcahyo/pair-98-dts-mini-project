import React from 'react'
import Slider from "react-slick";
import MovieCard from './MovieCard';

const SimpleSlider = ({ data }) => {
 const settings = {
  infinite: true,
  slidesToShow: 11,
  slidesToScroll: 1,
  responsive: [
   {
    breakpoint: 1280,
    settings: {
     slidesToShow: 10,
     slidesToScroll: 1,
    },
   },
   {
    breakpoint: 1156,
    settings: {
     slidesToShow: 9,
     slidesToScroll: 1,
    },
   },
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 8,
     slidesToScroll: 1,
    },
   },
   {
    breakpoint: 992,
    settings: {
     slidesToShow: 6,
     slidesToScroll: 1,
    },
   },
   {
    breakpoint: 660,
    settings: {
     slidesToShow: 5,
     slidesToScroll: 1,
    },
   },
   {
    breakpoint: 560,
    settings: {
     slidesToShow: 4,
     slidesToScroll: 1,
    },
   },
   {
    breakpoint: 520,
    settings: {
     slidesToShow: 3,
     slidesToScroll: 1,
    },
   },
   {
    breakpoint: 400,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 1,
    },
   },
  ],
 }
 return (
  <div>
   <h2> Single Item</h2>
   <Slider {...settings}>
    {data && data.map((movie, i) => (
     <MovieCard movie={movie} index={i} />
    ))}
   </Slider>
  </div>
 )
}

export default SimpleSlider