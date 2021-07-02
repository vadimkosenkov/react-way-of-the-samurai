import React from 'react';
import s from './Dialogs.module.css';
// import { NavLink } from 'react-router-dom';
import './../../App.css';
import TitleImg from './../TitleImg/TitleImg';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogElements = props.state.dialogsData.map((elem) => (
    <DialogItem key={elem.id} id={elem.id} name={elem.name} />
  ));
  let messageElements = props.state.messagesData.map((elem) => (
    <Message key={elem.id} id={elem.id} message={elem.message} />
  ));
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
