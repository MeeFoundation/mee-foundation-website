import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className="font-ps text-sm leading-4.5 md:text-xl md:leading-6">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
