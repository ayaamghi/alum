import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './components/main.css';

import {HashRouter as Router} from 'react-router-dom';
// import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

ReactDOM.render(
  <Router basename="/">
    {/* <Auth0ProviderWithHistory> */}
      <App id="root"/>
    {/* </Auth0ProviderWithHistory> */}
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
