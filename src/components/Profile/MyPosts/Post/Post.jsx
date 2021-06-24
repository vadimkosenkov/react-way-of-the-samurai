import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.src} alt='img: avatar' />
      {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
