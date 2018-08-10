import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const numbers = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
];

ReactDOM.render(
  <App numbers={numbers} />, document.getElementById('app1'));
