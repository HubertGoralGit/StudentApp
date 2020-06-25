import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from '../../routes/index';
import store from '../../store/index';
import MainTemplate from '../../templates/MainTemplate';
import Notes from '../Notes/Notes';
import Todo from '../Todo/Todo';
import Login from '../Login/Login';
import DetailsNote from '../DetailsNote/DetailsNote';
import DetailsToDo from '../DetailsToDo/DetailsToDo';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.note} component={DetailsNote} />
          <Route exact path={routes.todo} component={Todo} />
          <Route path={routes.day} component={DetailsToDo} />
          <Route exact path={routes.login} component={Login} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
