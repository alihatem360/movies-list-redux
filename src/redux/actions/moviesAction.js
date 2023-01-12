import { ALLMOVIES } from "../types/moviesType";
import axios from "axios";
import { MOVIEAPI } from "../types/moviesType";

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
