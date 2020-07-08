/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { filterVideo } from '../actions/index';
import '../assets/styles/components/Search.scss';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const filterByName = (e) => {
    setInputValue(e.target.value);
    dispatch(filterVideo(e.target.value));
    console.log('WTF DOG', inputValue);
  };
  const clearInput = () => {
    setInputValue('');
    dispatch(filterVideo([]));
  };

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <button type='button' onClick={clearInput}>cerrar</button>
      <input
        type="text"
        className="input"
        placeholder="Buscar... algo perro"
        onChange={filterByName}
      />
    </section>
  );
};

export default Search;
