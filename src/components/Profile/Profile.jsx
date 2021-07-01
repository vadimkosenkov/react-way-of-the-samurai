import React from 'react';
import s from './Profile.module.css';
import './../../App.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import TitleImg from '../TitleImg/TitleImg';

const Profile = (props) => {
  return (
    <div className={`app-wrapper_content`}>
      <TitleImg />
      <ProfileInfo />
      <MyPosts postsData={props.postsData} />
    </div>
  );
};

export default Profile;
