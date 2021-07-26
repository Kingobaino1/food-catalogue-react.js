import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import ShowIndex from './containers/ShowIndex';
import Recipe from './containers/Recipe';

const Routes = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/categories/:category" component={ShowIndex} />
        <Route exact path="/categories/:category/details" component={Recipe} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
