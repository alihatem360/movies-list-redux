import {
  ALLMOVIES,
  SEARCHMOVIE,
  MOVIEAPI,
  SEARCHAPI,
  PAGEURL,
  MOVIEDETAILS,
} from "../types/moviesType";
import axios from "axios";

export const getAllMovie = (data) => {
  return async (dispatch) => {
    const res = await axios.get(MOVIEAPI);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const searchMovie = (word) => {
  return async (dispatch) => {
    const res = await axios.get(` ${SEARCHAPI}&query=${word} `);
    dispatch({
      type: SEARCHMOVIE,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(` ${PAGEURL}&page=${page} `);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMovieDetails = (id) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9bde724434cd2ef83bccc262c14d0248&language=ar`
    );
    dispatch({
      type: "GETMOVIEDETAILS",
      data: res.data,
    });
  };
};
