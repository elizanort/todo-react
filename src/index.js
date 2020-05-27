import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Dashboard from './components/Dashboard'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Dashboard /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
