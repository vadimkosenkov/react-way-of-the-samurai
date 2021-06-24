import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg' alt='img: avatar' />
      post1
      <div>
        <span>Like!</span>
      </div>
    </div>
  );
};

export default Post;
