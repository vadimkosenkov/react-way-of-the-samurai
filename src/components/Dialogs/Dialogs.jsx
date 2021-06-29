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

let dialogsData = [
  { id: 1, name: 'Майк Дельфино' },
  { id: 2, name: 'Карлос Солис' },
  { id: 3, name: 'Том Скаво' },
];

let messagesData = [
  { id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, id nostrum!' },
  { id: 2, message: 'Dolor incidunt expedita est eveniet soluta.' },
  { id: 3, message: 'Ab nostrum deserunt, provident obcaecati beatae laborum cum minima unde officia consectetur!' },
];

let dialogElements = dialogsData.map((dialog) => <DialogItem id={dialog.id} name={dialog.name} />);
let messageElements = messagesData.map((message) => <Message message={message.message} />);

const Dialogs = () => {
  return (
    <div className={'app-wrapper_content'}>
      <TitleImg />
      <div className={s.container}>
        <div className={s.dialog_items}>{dialogElements}</div>
        <div className={s.message_items}>{messageElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
