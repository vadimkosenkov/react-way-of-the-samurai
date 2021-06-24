import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.container}>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post />
        <Post />
        <div className={s.item}>
          <img src='https://images.ua.prom.st/1440764527_saharnaya-kartinka-lyubov.jpg' alt='img: avatar' />
          post2
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
