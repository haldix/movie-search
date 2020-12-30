import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';
import noPhoto from '../images/no-image-available.png';

const MovieCard = (props) => {
  const {
    id,
    title,
    poster_path,
    backdrop_path,
    overview,
    release_date,
  } = props.movie;
  // console.log('known_for', known_for);
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const imgUrl = !poster_path ? noPhoto : `${baseUrl}${poster_path}`;
  return (
    <div className='movie-card'>
      <figure>
        <img src={imgUrl} alt={title} />
      </figure>
      <div className='card-info'>
        <Link to={`/movie/${id}`}>{title}</Link>
      </div>
    </div>
  );
};

export default MovieCard;
