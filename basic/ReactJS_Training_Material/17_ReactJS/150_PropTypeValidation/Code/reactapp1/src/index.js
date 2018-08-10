import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  <App numProp={1} strProp={100} rangeProp="KM" />, document.getElementById('app1'));

ReactDOM.render(
  <App numProp={100} strProp="test" boolProp={false} rangeProp="AM" />, document.getElementById('app2'));
