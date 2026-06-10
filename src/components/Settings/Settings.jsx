import React from 'react';
import s from './Settings.module.css';
import './../../App.css';
import TitleImg from './../TitleImg/TitleImg';

const Settings = (props) => {
  let settingElements = props.state.settingsData.map((elem) => (
    <div key={elem.id} className={s.row}>
      <span>{elem.label}</span>
      <strong>{elem.value}</strong>
    </div>
  ));

  return (
    <div className={'app-wrapper_content'}>
      <TitleImg />
      <section className={s.container}>
        <h2>Settings</h2>
        <div className={s.list}>{settingElements}</div>
      </section>
    </div>
  );
};

export default Settings;
