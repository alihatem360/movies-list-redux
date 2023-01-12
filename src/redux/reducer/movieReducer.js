import { ALLMOVIES } from "../types/moviesType";

// initialState is the initial state of the store ==  movies: [], pageCounter: 0
const initialState = { movies: [], pageCounter: 0 };

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return { movies: action.data, pageCounter: action.pages };
    default:
      return state;
  }
};

export default movieReducer;
