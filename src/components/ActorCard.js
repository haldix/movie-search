import React from 'react';
import './ActorCard.scss';

const ActorCard = (props) => {
  const { id, name, profile_path } = props.actor;
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className='actor-card'>
      <p>{name}</p>
      {!profile_path ? (
        <p>Picture Unavailable</p>
      ) : (
        <figure>
          <img src={`${baseUrl}${profile_path}`} alt={name} />
        </figure>
      )}
    </div>
  );
};

export default ActorCard;
