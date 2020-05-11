/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplate';
import addIcon from '../../assets/icons/plus.svg';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
// eslint-disable-next-line import/no-named-as-default-member
// eslint-disable-next-line import/no-named-as-default
import NoteCard from '../../components/NoteCard/NoteCard';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';

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

const Notes = ({ notes }) => (
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

// eslint-disable-next-line react/no-typos
Notes.PropTypes = {
  notes: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
