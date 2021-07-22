import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import ShowIndex from './components/ShowIndex';

const Routes  = () => {

    return(
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/categories/:category" component={ShowIndex} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
