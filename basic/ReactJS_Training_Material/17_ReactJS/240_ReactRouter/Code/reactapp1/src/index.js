import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';

/* ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
*/
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>, document.getElementById('root'));

// UNCOMMENT THE COMMENTED SECTIONS ABOVE TO SWITCH FROM BROWSER ROUTER TO
// HASHROUTER
