import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import Routes from './Router';
import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
