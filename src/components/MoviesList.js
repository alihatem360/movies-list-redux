import React, { useEffect, useState } from "react";
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovie, GlobalGetAllMovie } from "../redux/actions/moviesAction";
import { MOVIEAPI } from "../redux/types/moviesType";

const MoviesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GlobalGetAllMovie(MOVIEAPI));
  }, []);

  const movies = useSelector((state) => state.movies);

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h2 className="text-center p-5">لا يوجد افلام...</h2>
      )}

      {movies.length >= 1 ? <PaginationComponent /> : null}
    </Row>
  );
};

export default MoviesList;
