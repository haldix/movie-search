import React from 'react';
import './ActorCard.scss';
import noPhoto from '../images/no-image-available.png';

const ActorCard = (props) => {
  const { id, name, profile_path } = props.actor;
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  const imgUrl = !profile_path ? noPhoto : `${baseUrl}${profile_path}`;
  return (
    <div className='actor-card'>
      <figure>
        <img src={imgUrl} alt={name} />
      </figure>
      <div className='card-info'>
        <a href={id}>{name}</a>
      </div>
    </div>
  );
};

export default ActorCard;
