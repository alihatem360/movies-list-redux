import { ALLMOVIES } from "../types/moviesType";

const initialState = { movies: [], pageCounter: 0 };

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return { movies: action.data };
    default:
      return state;
  }
};

export default movieReducer;
