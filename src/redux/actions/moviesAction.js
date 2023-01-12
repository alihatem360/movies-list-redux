import { ALLMOVIES } from "../types/moviesType";
import { axios } from "axios";
import { MOVIEAPI } from "../types/moviesType";
export const getAllMovie = async (data) => {
  const res = await axios.get(MOVIEAPI);

  return {
    type: ALLMOVIES,
    data: res.data.results,
    pages: res.data.total_pages,
  };
};
