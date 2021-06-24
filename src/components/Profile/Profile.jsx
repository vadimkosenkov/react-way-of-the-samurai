import React from 'react';
import s from './Profile.module.css';
import './../../App.css';
import MyPosts from './MyPosts/MyPosts';
console.log(s);

const Profile = () => {
  return (
    <div className={`app-wrapper_content`}>
      <div>
        <img
          className={`${s.titleImg} br`}
          src='https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80https://www.istockphoto.com/resources/images/HomePage/Hero/682374404.jpg'
          alt='img:home page'
          align='middle'
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
