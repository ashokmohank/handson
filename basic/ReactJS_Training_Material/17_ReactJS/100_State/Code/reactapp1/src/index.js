import React from 'react';
import ReactDOM from 'react-dom';
import { ClockWithoutState, ClockWithState, Counter } from './App';

function tick() {
  ReactDOM.render(
    <ClockWithoutState />, document.getElementById('app1'));
}
setInterval(tick, 1000);

ReactDOM.render(
  <ClockWithState />, document.getElementById('app2'));

ReactDOM.render(
  <Counter />, document.getElementById('app3'));
