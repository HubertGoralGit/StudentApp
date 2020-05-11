import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-bottom: 50px;
  position: relative;
`;

const StyledHeadingWrapper = styled.div`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.notes};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const StyledInnerWrapper = styled.div`
  padding: 10px 15px;
  height: 80%;
`;

const StyledButtonWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const StyledLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  color: blue;
  cursor: pointer;
`;

class NoteCard extends Component {
  state = {
    redirect: false,
  };

  handleRedirectClick = () => this.setState({ redirect: true });

  render() {
    const { id, title, content } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: `note/details/${id}`,
            state: {
              title: title,
              content: content,
            },
          }}
        />
      );
    }

    return (
      <StyledWrapper>
        <StyledHeadingWrapper>
          <Heading>{title}</Heading>
        </StyledHeadingWrapper>
        <StyledInnerWrapper>
          <Paragraph>
            {content.substring(0, 200)}
            <StyledLink onClick={this.handleRedirectClick}>...ReadMore</StyledLink>
          </Paragraph>
        </StyledInnerWrapper>
        <StyledButtonWrapper>
          <Button secondary>Remove</Button>
        </StyledButtonWrapper>
      </StyledWrapper>
    );
  }
}

NoteCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default NoteCard;
