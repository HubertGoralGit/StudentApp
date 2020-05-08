import React from 'react';
import UserPageTemplate from '../../templates/UserPageTemplate';
import addIcon from '../../assets/icons/plus.svg';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';

const Notes = () => (
  <UserPageTemplate pageType="notes">
    <h1>Notes</h1>
    <ButtonIcon icon={addIcon} className="add" activeColor="notes" />
  </UserPageTemplate>
);

export default Notes;
