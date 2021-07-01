import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElements = props.postsData.map((elem) => (
    <Post key={elem.id} id={elem.id} message={elem.message} src={elem.src} likesCount={elem.likesCount} />
  ));

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
