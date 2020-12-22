import React from 'react';
import ActorCard from './ActorCard';
import './CardGrid.scss';

const CardGrid = ({ persons }) => {
  return (
    <section className='card-grid'>
      {persons.map((actor) => (
        <ActorCard key={actor.id} actor={actor} />
      ))}
    </section>
  );
};

export default CardGrid;
