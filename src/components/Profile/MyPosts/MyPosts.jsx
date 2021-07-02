import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElements = props.postsData.map((elem) => (
    <Post key={elem.id} id={elem.id} message={elem.message} src={elem.src} likesCount={elem.likesCount} />
  ));

  return (
    <div>
      my posts
      <div className={s.container}>
        <textarea className='br' rows='3' cols='40' name='myNewPost' placeholder='Share the news'></textarea>
        <button className={`${s.button} br`}>
          <img src='./images/send.png' alt='icon: send' />
          <div>Add post</div>
        </button>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
