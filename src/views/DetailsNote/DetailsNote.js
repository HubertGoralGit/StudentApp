import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplate';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import Paragraph from '../../components/Paragraph/Paragraph';

const StyledContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
  padding: 0 50px 0 0;

  @media (min-width: ${({ theme }) => theme.resolution.md}) {
    padding: 0 200px 0 0;
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class DetailsNote extends Component {
  render() {
    const { title, content } = this.props.location.state;
    return (
      <UserPageTemplate pageType="notes">
        <Header>
          <Heading big>{title}</Heading>
        </Header>
        <Button back as={NavLink} to="/notes">
          Back to notes
        </Button>
        <StyledContentWrapper>
          <Paragraph>{content}</Paragraph>
        </StyledContentWrapper>
      </UserPageTemplate>
    );
  }
}

export default DetailsNote;
