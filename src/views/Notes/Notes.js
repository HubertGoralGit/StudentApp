import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplate';
import addIcon from '../../assets/icons/plus.svg';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import NoteCard from '../../components/NoteCard/NoteCard';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';

const notes = [
  {
    id: 1,
    title: 'React router',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  },
  {
    id: 2,
    title: 'Redux',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  },
  {
    id: 3,
    title: 'React',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  },
];

const StyledNotesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 75px 20px 0;

  @media (min-width: ${({ theme }) => theme.resolution.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    padding: 10px 125px 25px 0;
  }

  @media (min-width: ${({ theme }) => theme.resolution.l}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    padding-left: 0;
  }

  @media (min-width: ${({ theme }) => theme.resolution.xl}) {
    grid-template-columns: repeat(3, 1fr);
    padding: 25px 150px 25px 0;
  }
`;

const Notes = () => (
  <UserPageTemplate pageType="notes">
    <Header>
      <Heading big>Notes</Heading>
    </Header>
    <Input search placeholder="search" />
    <StyledNotesWrapper>
      {notes.map(({ title, content, id }) => (
        <NoteCard id={id} title={title} content={content} key={id} />
      ))}
    </StyledNotesWrapper>
    <ButtonIcon icon={addIcon} className="add" activeColor="notes" />
  </UserPageTemplate>
);

export default Notes;
