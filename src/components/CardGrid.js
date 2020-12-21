import React from 'react';
import ActorCard from './ActorCard';
import './CardGrid.scss';

const CardGrid = ({ persons }) => {
  return (
    <div className='card-grid'>
      {persons.map((actor) => (
        <ActorCard key={actor.id} actor={actor} />
      ))}
    </div>
  );
};

export default CardGrid;
