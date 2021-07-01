import React from 'react';
import s from './Message.module.css';
import './../../../App.css';

const Message = (props) => {
  return <div className={s.item}>{props.message}</div>;
};

export default Message;
