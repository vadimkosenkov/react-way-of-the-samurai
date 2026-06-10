import React from 'react';
import s from './Music.module.css';
import './../../App.css';
import TitleImg from './../TitleImg/TitleImg';

const Music = (props) => {
  let trackElements = props.state.tracksData.map((elem) => (
    <li key={elem.id} className={s.track}>
      <div>
        <strong>{elem.title}</strong>
        <span>{elem.artist}</span>
      </div>
      <span className={s.duration}>{elem.duration}</span>
    </li>
  ));

  return (
    <div className={'app-wrapper_content'}>
      <TitleImg />
      <section className={s.container}>
        <h2>Music</h2>
        <ul className={s.list}>{trackElements}</ul>
      </section>
    </div>
  );
};

export default Music;
