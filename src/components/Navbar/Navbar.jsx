import React from 'react';
import './../../App.css';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`${s.nav} br`}>
      <div>
        <a href='/profile' className={s.item}>
          Profile
        </a>
      </div>
      <div>
        <a href='/dialogs' className={s.item}>
          Message
        </a>
      </div>
      <div>
        <a href='/news' className={s.item}>
          News
        </a>
      </div>
      <div>
        <a href='/music' className={s.item}>
          Music
        </a>
      </div>
      <div>
        <a href='/settings' className={s.item}>
          Settings
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
