import React from 'react';
import UserPageTemplate from '../../templates/UserPageTemplate';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';

const Todo = () => (
  <UserPageTemplate pageType="todo">
    <Header>
      <Heading big>To-Do</Heading>
    </Header>
  </UserPageTemplate>
);

export default Todo;
