import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplate';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const StyledCalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 25px;
  margin-top: 50px;
`;

const Todo = () => (
  <UserPageTemplate pageType="todo">
    <Header>
      <Heading big>To-Do</Heading>
    </Header>
    <StyledCalendarWrapper>
      <Calendar />
    </StyledCalendarWrapper>
  </UserPageTemplate>
);

export default Todo;
