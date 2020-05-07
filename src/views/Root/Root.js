import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../../routes/index';
import MainTemplate from '../../templates/MainTemplate';
import Notes from '../Notes/Notes';
import Todo from '../Todo/Todo';
import Images from '../Images/Images';
import Login from '../Login/Login';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
        <Route exact path={routes.notes} component={Notes} />
        <Route exact path={routes.todo} component={Todo} />
        <Route exact path={routes.images} component={Images} />
        <Route exact path={routes.login} component={Login} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
