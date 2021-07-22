import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import ShowIndex from './components/ShowIndex';

const Routes = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/categories/:category" component={ShowIndex} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
