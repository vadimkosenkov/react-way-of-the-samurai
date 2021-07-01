import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import './../../App.css';
import TitleImg from './../TitleImg/TitleImg';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

let dialogsData = [
  { id: 1, name: 'Майк Дельфино' },
  { id: 2, name: 'Карлос Солис' },
  { id: 3, name: 'Том Скаво' },
];

let messagesData = [
  { id: 4, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, id nostrum!' },
  { id: 5, message: 'Dolor incidunt expedita est eveniet soluta.' },
  { id: 6, message: 'Ab nostrum deserunt, provident obcaecati beatae laborum cum minima unde officia consectetur!' },
];

let dialogElements = dialogsData.map((elem) => <DialogItem key={elem.id} name={elem.name} />);
let messageElements = messagesData.map((elem) => <Message key={elem.id} message={elem.message} />);

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
