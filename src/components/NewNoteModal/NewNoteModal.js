import React from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';

const StyledModalWrapper = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: white;
  border-left: 10px solid ${({ theme }) => theme.notes};
  padding: 100px 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;

  @media (min-width: ${({ theme }) => theme.resolution.l}) {
    width: 680px;
  }
`;

const StyledTextArea = styled(Input)`
  margin: 0 0 100px;
  border-radius: 20px;
  height: 30vh;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const NewNoteModal = ({ isVisible }) => (
  <StyledModalWrapper isVisible={isVisible}>
    <Heading big>Create New Note</Heading>
    <StyledInput placeholder="title" />
    <StyledTextArea as="textarea" placeholder="text" />
    <Button add>Add Note</Button>
  </StyledModalWrapper>
);

export default NewNoteModal;
