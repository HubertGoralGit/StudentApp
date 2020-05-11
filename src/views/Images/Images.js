import React from 'react';
import UserPageTemplate from '../../templates/UserPageTemplate';
import addIcon from '../../assets/icons/plus.svg';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';

const Images = () => (
  <UserPageTemplate pageType="images">
    <Header>
      <Heading big>Images</Heading>
    </Header>
    <ButtonIcon icon={addIcon} className="add" activeColor="images" />
  </UserPageTemplate>
);

export default Images;
