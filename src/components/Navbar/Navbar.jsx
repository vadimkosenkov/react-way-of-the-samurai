import React from 'react';
import { NavLink } from 'react-router-dom';
import './../../App.css';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${s.nav} br`}>
      <div className={s.item}>
        <img src='./images/profile.png' alt='icon: user card' />
        <NavLink to='/profile' activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <img src='./images/message.png' alt='icon: communication' />
        <NavLink to='/dialogs' activeClassName={s.activeLink}>
          Message
        </NavLink>
      </div>
      <div className={s.item}>
        <img src='./images/news.png' alt='icon: notebook' />
        <NavLink to='/news' activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <img src='./images/music.png' alt='icon: note' />
        <NavLink to='/music' activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <img src='./images/settings.png' alt='icon: gear' />
        <NavLink to='/settings' activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
