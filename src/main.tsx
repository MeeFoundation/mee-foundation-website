import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as BrowserRouter } from 'react-router-dom';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className="font-ps font-normal text-base leading-5 sm:text-sm sm:leading-4 md:text-xl md:leading-6 text-primary-content">
      <BrowserRouter><App /></BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
