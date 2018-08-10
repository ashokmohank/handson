import React from 'react';
import ReactDOM from 'react-dom';
import { Parent, App2 } from './App';

ReactDOM.render(
  <Parent />, document.getElementById('app1'));

ReactDOM.render(
  <App2 />, document.getElementById('app2'));
