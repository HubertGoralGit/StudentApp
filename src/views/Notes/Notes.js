import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplate';
import addIcon from '../../assets/icons/plus.svg';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import NoteCard from '../../components/NoteCard/NoteCard';

const StyledNotesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

const Notes = () => (
  <UserPageTemplate pageType="notes">
    <h1>Notes</h1>
    <StyledNotesWrapper>
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </StyledNotesWrapper>
    <ButtonIcon icon={addIcon} className="add" activeColor="notes" />
  </UserPageTemplate>
);

export default Notes;
