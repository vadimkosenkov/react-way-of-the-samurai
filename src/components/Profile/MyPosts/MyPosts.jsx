import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
  {
    id: 1,
    message: 'Hello, how are you?',
    likesCount: 10,
    src: 'https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg',
  },
  {
    id: 2,
    message: 'I am fine!',
    likesCount: 20,
    src: 'https://images.ua.prom.st/1440764527_saharnaya-kartinka-lyubov.jpg',
  },
];

let postElements = postsData.map((post) => <Post message={post.message} src={post.src} likesCount={post.likesCount} />);

const MyPosts = () => {
  return (
    <div className={s.container}>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
