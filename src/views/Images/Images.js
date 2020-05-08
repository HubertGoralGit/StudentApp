import React from 'react';
import UserPageTemplate from '../../templates/UserPageTemplate';
import addIcon from '../../assets/icons/plus.svg';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';

const Images = () => (
  <UserPageTemplate pageType="images">
    <h1>Images</h1>
    <ButtonIcon icon={addIcon} className="add" activeColor="images" />
  </UserPageTemplate>
);

export default Images;
