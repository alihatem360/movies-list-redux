import { ALLMOVIES, SEARCHMOVIE, GETMOVIEDETAILS } from "../types/moviesType";
// initialState is the initial state of the store ==  movies: [], pageCounter: 0
const initialState = { movies: [], pageCounter: 0, movieDetails: {} };

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return { movies: action.data, pageCounter: action.pages };
    case SEARCHMOVIE:
      return { movies: action.data, pageCounter: action.pages };
    case GETMOVIEDETAILS:
      return { ...state, movieDetails: action.data };

    default:
      return state;
  }
};

export default movieReducer;
