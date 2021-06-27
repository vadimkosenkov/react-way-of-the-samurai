import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import './../../App.css';
import TitleImg from './../TitleImg/TitleImg';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.item}>
      <NavLink to={path} activeClassName={s.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.item}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={'app-wrapper_content'}>
      <TitleImg />
      <div className={s.container}>
        <div className={s.dialog_items}>
          <DialogItem name='Майк Дельфино' id='mike_delfino' />
          <DialogItem name='Карлос Солис' id='carlos_solis' />
          <DialogItem name='Том Скаво' id='tom_skavo' />
        </div>
        <div className={s.message_items}>
          <Message message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, id nostrum!' />
          <Message message='Dolor incidunt expedita est eveniet soluta.' />
          <Message message='Ab nostrum deserunt, provident obcaecati beatae laborum cum minima unde officia consectetur!' />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
