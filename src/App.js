import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'; // Добавлен Redirect

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper_content'>
          <Route exact path='/' render={() => <Redirect to='/profile' />} />
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} />} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          {/* Атрибуты Route:
          exact - точное совпадение адреса;
          component - если не не будет props;
          render - если будут props*/}
          <Route exact path='/news' render={() => <News state={props.state.newsPage} />} />
          <Route exact path='/music' render={() => <Music state={props.state.musicPage} />} />
          <Route exact path='/settings' render={() => <Settings state={props.state.settingsPage} />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;