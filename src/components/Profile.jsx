import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={`${s.content} ${s.br}`}>
      <div>
        <img
          className={`${s.titleImg} ${s.br}`}
          src='https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80https://www.istockphoto.com/resources/images/HomePage/Hero/682374404.jpg'
          alt='img:home page'
          align='middle'
        />
        <div className={s.container}>
          <div>ava + description</div>
          <div>
            my post
            <div>new post</div>
          </div>
          <div>
            <div>post1</div>
            <div>post2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
