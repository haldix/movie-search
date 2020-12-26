import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActorDetails } from '../actions/actorActions';
import noPhoto from '../images/no-image-available.png';

const ActorScreen = ({ match }) => {
  const actorData = useSelector((state) => state.actorData);
  console.log('actorData', actorData);
  console.log('actorData.actor', actorData.actor);
  const {
    loading,
    error,
    actor: { biography, birthday, deathday, name, profile_path },
  } = actorData;

  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const imgUrl = !profile_path ? noPhoto : `${baseUrl}${profile_path}`;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActorDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      <h1>Actor Details</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <p>error</p>
      ) : (
        <>
          <figure>
            <img src={imgUrl} alt={name} />
            <figcaption></figcaption>
          </figure>
          <p>
            <span>Born: {birthday}</span>{' '}
            {deathday && <span>Died: {deathday}</span>}
          </p>
          <p>{biography}</p>
        </>
      )}
    </div>
  );
};

export default ActorScreen;
