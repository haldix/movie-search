import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPerson } from '../actions/searchActions';

const HomeScreen = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const nameHandler = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getPerson(name));
  };

  return (
    <div>
      <h1>Home Screen</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor='name'>Search by Name</label>
        <input id='name' value={name} onChange={nameHandler} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default HomeScreen;
