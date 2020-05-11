import React from 'react';
import { NavLink } from 'react-router-dom';
import UserPageTemplate from '../../templates/UserPageTemplate';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';

const DetailsNote = () => (
  <UserPageTemplate pageType="notes">
    <Header>
      <Heading big>Notes</Heading>
    </Header>
    <Button back as={NavLink} to="/notes">
      Back to notes
    </Button>
  </UserPageTemplate>
);

export default DetailsNote;
