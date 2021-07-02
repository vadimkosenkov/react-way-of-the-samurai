import React from 'react';
import './../../App.css';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={`${s.header} br`}>
      <img className={s.logo} src='./images/mountain_logo.png' alt='logo: mountain' />
      <div className={s.content}>Way of the samuray</div>
      <form action='#' className={`${s.form} br`}>
        <div className={s.searchBar}>
          <input type='text' className={s.input} placeholder='Начните поиск' />
          <button className={`${s.button} br`}>
            <img src='./images/search.png' alt='icon: search' />
            <div>Найти</div>
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
