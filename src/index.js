import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom'
//import { unregister } from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

//ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

//unregister();