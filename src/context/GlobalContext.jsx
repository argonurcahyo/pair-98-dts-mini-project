import React, { createContext, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  movielist: localStorage.getItem("movielist")
    ? JSON.parse(localStorage.getItem("movielist"))
    : [],
  tvlist: localStorage.getItem("tvlist")
    ? JSON.parse(localStorage.getItem("tvlist"))
    : [],
};

export const GlobalContext = createContext(initialState)

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    localStorage.setItem("movielist", JSON.stringify(state.movielist))
    localStorage.setItem("tvlist", JSON.stringify(state.tvlist))
  }, [state])

  const addMovieToMovielist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_MOVIELIST", payload: movie })
  }
  const addTvToTvlist = (tv) => {
    dispatch({ type: "ADD_TV_TO_TVLIST", payload: tv })
  }
  const removeMovieFromMovielist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_MOVIELIST", payload: id })
  }
  const removeTvFromTvlist = (id) => {
    dispatch({ type: "REMOVE_TV_FROM_TVLIST", payload: id })
  }

  return (
    <GlobalContext.Provider
      value={{
        movielist: state.movielist,
        tvlist: state.tvlist,
        addMovieToMovielist,
        addTvToTvlist,
        removeMovieFromMovielist,
        removeTvFromTvlist
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}