import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "./i18n";



const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');



ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

if (document.getElementById('email') != null) {
    document.getElementById('email').innerHTML = "antoine.hlgr@gmail.com".split("").reverse().join("");
}

if (document.getElementById('phone') != null) {
    document.getElementById('phone').innerHTML = "06 63 79 46 13".split("").reverse().join("");
}