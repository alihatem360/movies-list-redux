import React from "react";
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import notFound from '../images/error.svg'
const CardMovie = ({ mov }) => {
  const imagPath = `https://image.tmdb.org/t/p/w500/` + mov.poster_path;
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${mov.id}`}>
        <div className="card">
          <img src={
            mov.poster_path === null ? notFound : imagPath
          } className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {mov.original_title}</p>
              <p>تاريخ الاصدار:{mov.release_date}</p>
              <p>عدد المقيمين: {mov.vote_count}</p>
              <p>التقييم:{mov.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col >
  );
};

export default CardMovie;
