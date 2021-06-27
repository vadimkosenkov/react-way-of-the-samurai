import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import './../../App.css';

const Dialogs = () => {
  return (
    <div className={'app-wrapper_content'}>
      <div className={s.container}>
        <div className={s.dialog_items}>
          <div className={s.item}>
            <NavLink to='/dialogs/Mike' activeClassName={s.activeLink}>
              Майк Дельфино
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to='/dialogs/Carlos' activeClassName={s.activeLink}>
              Карлос Солис
            </NavLink>
          </div>
          <div className={s.item}>
            <NavLink to='/dialogs/Tom' activeClassName={s.activeLink}>
              Том Скаво
            </NavLink>
          </div>
        </div>
        <div className={s.message_items}>
          <div className={s.item}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, id nostrum!</div>
          <div className={s.item}>Dolor incidunt expedita est eveniet soluta.</div>
          <div className={s.item}>
            Ab nostrum deserunt, provident obcaecati beatae laborum cum minima unde officia consectetur!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
