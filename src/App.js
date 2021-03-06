import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper_content'>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} />} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          {/* Атрибуты Route:
          exact - точное совпадение адреса;
          component - если не не будет props;
          render - если будут props*/}
          <Route exact path='/news' component={News} />
          <Route exact path='/music' component={Music} />
          <Route exact path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
