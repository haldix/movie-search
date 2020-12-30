import React from 'react';
import { Link } from 'react-router-dom';
import './ActorCard.scss';
import noPhoto from '../images/no-image-available.png';

const ActorCard = (props) => {
  const { id, name, profile_path } = props.actor;
  // console.log('known_for', known_for);
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  const imgUrl = !profile_path ? noPhoto : `${baseUrl}${profile_path}`;
  return (
    <div className='actor-card'>
      <figure>
        <img src={imgUrl} alt={name} />
      </figure>
      <div className='card-info'>
        <Link to={`/actor/${id}`}>{name}</Link>
        {/* {known_for} */}
      </div>
    </div>
  );
};

export default ActorCard;
