import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const electron = window.require('electron');
window.electron = electron;

ReactDOM.render(<App />, document.getElementById('root'));