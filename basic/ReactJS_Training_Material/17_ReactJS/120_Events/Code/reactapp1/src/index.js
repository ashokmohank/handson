import React from 'react';
import ReactDOM from 'react-dom';
import { Counter, CounterArrow } from './App';

ReactDOM.render(<Counter />, document.getElementById('app1'));

ReactDOM.render(<CounterArrow />, document.getElementById('app2'));
