import React, { Component } from 'react';
import UserPageTemplate from '../../templates/UserPageTemplate';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';

class DetailsToDo extends Component {
  render() {
    // const { date } = this.props.value.location.state;
    return (
      <UserPageTemplate pageType="todo">
        <Header>
          <Heading big>elo</Heading>
        </Header>
      </UserPageTemplate>
    );
  }
}

export default DetailsToDo;
