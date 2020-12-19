import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPerson } from '../actions/searchActions';

const HomeScreen = () => {
  const [name, setName] = useState('');
  const [searchName, setSearchName] = useState('');
  const search = useSelector((state) => state.search);
  const { loading, success, person } = search;
  console.log(person);
  const dispatch = useDispatch();

  const nameHandler = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getPerson(name));
    setSearchName(name);
    setName('');
  };

  return (
    <div>
      <h1>Home Screen</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor='name'>Search by Name</label>
        <input id='name' value={name} onChange={nameHandler} />
        <button type='submit'>Submit</button>
      </form>
      {loading && <h2>LOADING...</h2>}
      {person && person.results.length === 0 && (
        <h2>No Results Found for {searchName}</h2>
      )}
      {person && person.results.length !== 0 && (
        <>
          <h2>Search Results for {searchName}</h2>
          <ul>
            {person.results.map((res) => (
              <li key={res.id}>{res.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
