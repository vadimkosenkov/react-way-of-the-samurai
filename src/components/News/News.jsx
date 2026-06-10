import React from 'react';
import s from './News.module.css';
import './../../App.css';
import TitleImg from './../TitleImg/TitleImg';

const News = (props) => {
  let newsElements = props.state.newsData.map((elem) => (
    <article key={elem.id} className={s.item}>
      <h3>{elem.title}</h3>
      <p>{elem.description}</p>
    </article>
  ));

  return (
    <div className={'app-wrapper_content'}>
      <TitleImg />
      <section className={s.container}>
        <h2>News</h2>
        <div className={s.list}>{newsElements}</div>
      </section>
    </div>
  );
};

export default News;
