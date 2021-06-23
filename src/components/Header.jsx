import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={`${s.header} ${s.br}`}>
      <img className={s.logo} src='./images/mountain_logo.png' alt='logo: mountain' />
      <div className={s.content}>Way of the samuray</div>
      <form action='#' className={`${s.form} ${s.br}`}>
        <div className={s.searchBar}>
          <input type='text' className={s.input} placeholder='Начните поиск' />
          <button className={`${s.button} ${s.br}`}>
            <img src='./images/search.svg' alt='icon: search' />
            <div>Найти</div>
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
