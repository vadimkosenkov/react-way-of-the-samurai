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
        <Post
          message='Hello, how are you?'
          src='https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg'
          likesCount='10'
        />
        <Post
          message='I am fine!'
          src='https://images.ua.prom.st/1440764527_saharnaya-kartinka-lyubov.jpg'
          likesCount='20'
        />
      </div>
    </div>
  );
};

export default MyPosts;
