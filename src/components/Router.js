import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Recipe from '../components/Recipe';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true} />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </BrowserRouter>
);

export default Router;