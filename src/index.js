import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

let dialogsData = [
  { id: 1, name: 'Майк Дельфино' },
  { id: 2, name: 'Карлос Солис' },
  { id: 3, name: 'Том Скаво' },
];

let messagesData = [
  { id: 1, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, id nostrum!' },
  { id: 2, message: 'Dolor incidunt expedita est eveniet soluta.' },
  { id: 3, message: 'Ab nostrum deserunt, provident obcaecati beatae laborum cum minima unde officia consectetur!' },
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
