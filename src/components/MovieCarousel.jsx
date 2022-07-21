import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import tmdb from '../apis/tmdb';

const NextArrow = (props) => {
 const { className, style, onClick } = props;
 return (
  <div
   className={className}
   style={{
    ...style,
    right: "0px",
    display: "flex",
    minHeight: "90%",
    minWidth: "18%",
    alignItems: "center",
    justifyContent: "flex-end",
   }}
   onClick={onClick}
  />
 );
};
const PrevArrow = (props) => {
 const { className, style, onClick } = props;
 return (
  <div
   className={className}
   style={{
    ...style,
    left: "0px",
    position: "absolute",
    zIndex: 100,
    display: "flex",
    minHeight: "90%",
    minWidth: "18%",
    alignItems: "center",
    justifyContent: "flex-start",
   }}
   onClick={onClick}
  />
 );
};

class CustomSlide extends Component {
 render() {
  const { index, ...props } = this.props;
  const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";
  const movie = props.data;

  return (
   <div
    key={index}
    style={{ display: "flex", background: "#040B16", color: "white" }}
   >
    <div
     className="movie-information-carousel"
     style={{
      width: "50%",
      padding: "5% 25px 12px 40px",
     }}
    >
     <Link to={`movie/${movie.id}`}>
      <div
       style={{ fontWeight: 600, fontSize: "32px", marginBottom: "15px" }}
      >
       {movie.title}
      </div>
     </Link>
     <div className='movie-carousel-overview'
      style={{ fontWeight: 400, fontSize: "15px", marginBottom: "5px" }}
     >
      {movie.overview}
     </div>
    </div>

    <div className="movie-image-carousel">
     <img
      src={`${BASE_IMAGE_URL}${movie.backdrop_path}`}
      alt="movie-poster"
      className="masked"
     />
    </div>

   </div>
  );
 }
}

export const MovieCarousel = ({ data }) => {
 const [genres, setGenres] = useState([]);
 const [popular, setPopular] = useState([]);

 const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     centerMode: false,
    },
   },
   {
    breakpoint: 800,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     centerMode: false,
    },
   },
   {
    breakpoint: 600,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     centerMode: false,
    },
   },
   {
    breakpoint: 480,
    settings: {
     centerMode: false,
     slidesToShow: 1,
     slidesToScroll: 1,
    },
   },
  ],
 };

 const fetchPopular = async () => {
  try {
   const fetchData = await tmdb.get("movie/popular", {
    params: {
     language: "en-US",
    }
   });
   setPopular(fetchData.data.results);
  } catch (error) {
   console.log(error);
   setPopular([]);
  }
 }

 const fetchGenres = async () => {
  try {
   const fetchedGenres = await tmdb.get("genre/movie/list");
   setGenres(fetchedGenres.data.genres);
  } catch (error) {
   console.log(error);
  }
 };

 useEffect(() => {
  fetchGenres();
  fetchPopular();
 }, []);

 const movies = data ? data : popular;

 return (
  <div style={{ marginBottom: "1%" }}>
   <Slider {...settings}>
    {movies && movies.map((e, i) => {
     return <CustomSlide key={i} index={i} data={e} genres={genres} />;
    })}
   </Slider>
  </div>
 );
};