const reducer = (state, action) => {
 switch (action.type) {
  case "ADD_MOVIE_TO_MOVIELIST":
   return {
    ...state,
    movielist: [action.payload, ...state.movielist],
   };
  case "REMOVE_MOVIE_FROM_MOVIELIST":
   return {
    ...state,
    movielist: state.movielist.filter(
     (movie) => movie.id !== action.payload
    ),
   };
  default:
   return state
 }
}

export default reducer