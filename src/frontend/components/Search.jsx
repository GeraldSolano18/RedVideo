/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import playIcon from "../assets/static/play-icon.png";
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

  return (
    <section className="main">
      <h2 className='title_master'>Las mas populares</h2>
      <div>
        <div className='seccion_banner'>
          <div className='seccion_master'>
            <img className='img_Movie' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg" alt="" />
            <div className='contentOpacity'>
              <p className='title_opacity'> hola</p>
              <img
                className="nojodas"
                src={playIcon}
                alt="Play Icon"
              />
            </div>
          </div>
          <div className='seccion_master'>
            <img className='img_Movie' src="https://i.pinimg.com/originals/0d/83/a7/0d83a78aa64ff5388ce7f5128eea75c7.jpg" alt="" />
            <div className='contentOpacity'>
              <img
                className="nojodas"
                src={playIcon}
                alt="Play Icon"
              />
            </div>
          </div>
          <div className='njss'>
            <div className='seccion_masterpq'>
              <img className='img_Movie' src="https://www1.pictures.zimbio.com/mp/2A07jAYQx3ix.jpg" alt="" />
              <div className='contentOpacity'>
                <img
                  className="nojodas"
                  src={playIcon}
                  alt="Play Icon"
                />
              </div>
            </div>
            <div className='seccion_masterpq'>
              <img className='img_Movie' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2020-doolittke-1576597612.jpg?crop=0.8293075684380031xw:1xh;center,top&resize=480:*" alt="" />
              <div className='contentOpacity'>
                <img
                  className="nojodas"
                  src={playIcon}
                  alt="Play Icon"
                />
              </div>
            </div>
          </div>
          <div className='seccion_master'>
            <img className='img_Movie' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/valentines-day-movies-in-theaters-2020-birds-of-prey-harley-quinn-1581616574.jpg?crop=0.915xw:0.926xh;0.0276xw,0&resize=480:*" alt="" />
            <div className='contentOpacity'>
              <img
                className="nojodas"
                src={playIcon}
                alt="Play Icon"
              />
            </div>
          </div>
      
        </div>
      </div>

      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className="input"
        placeholder="Buscar..."
        onChange={filterByName}
      />
    </section>
  );
};

export default Search;
