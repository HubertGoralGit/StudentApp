import React from 'react';
import styled from 'styled-components';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-bottom: 50px;
`;

const StyledHeadingWrapper = styled.div`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.notes};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const StyledInnerWrapper = styled.div`
  padding: 10px 10px;
`;

const NoteCard = () => (
  <StyledWrapper>
    <StyledHeadingWrapper>
      <Heading>React router</Heading>
    </StyledHeadingWrapper>
    <StyledInnerWrapper>
      <Paragraph>elo melo trzy dwa zero</Paragraph>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default NoteCard;
