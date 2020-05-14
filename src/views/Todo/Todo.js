import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
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

class Todo extends Component {
  state = {
    date: new Date(),
    redirect: false,
  };

  onChange = date => this.setState({ date });

  handleRedirectClick = () => this.setState({ redirect: true });

  render() {
    const { date, redirect } = this.state;

    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: `todo/details/${date}`,
            state: {
              date: date,
            },
          }}
        />
      );
    }

    return (
      <UserPageTemplate pageType="todo">
        <Header>
          <Heading big>To-Do</Heading>
        </Header>
        <StyledCalendarWrapper>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            onClickDay={this.handleRedirectClick}
          />
        </StyledCalendarWrapper>
      </UserPageTemplate>
    );
  }
}

export default Todo;
