import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import noteIcon from '../../assets/icons/notes.svg';
import todoIcon from '../../assets/icons/todo.svg';
import imageIcon from '../../assets/icons/image.svg';
import logoutIcon from '../../assets/icons/logout.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 25px;
  width: 100vw;
  height: 100px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  @media (min-width: ${({ theme }) => theme.resolution.l}) {
    padding: 25px 0;
    width: 150px;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

const StyledLogoButton = styled(NavLink)`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  font-weight: bold;

  @media (min-width: ${({ theme }) => theme.resolution.l}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  width: 50%;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.resolution.l}) {
    flex-direction: column;
    height: 40%;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20vh;
  }
`;

const StyledLogoutButton = styled.button`
  display: block;
  width: 45px;
  height: 45px;
  background-image: url(${logoutIcon});
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: 50% 50%;
  background-size: 60%;
  border: none;
  outline: none;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.resolution.l}) {
    width: 75px;
    height: 75px;
  }
`;

const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledLogoButton to="/">My App</StyledLogoButton>
    <StyledLinksList>
      <li>
        <ButtonIcon exact as={NavLink} to="/notes" icon={noteIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/todo" icon={todoIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/images" icon={imageIcon} activeclass="active" />
      </li>
    </StyledLinksList>
    <StyledLogoutButton as={NavLink} to="/login" />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'todo', 'images']),
};

Sidebar.defaultProps = {
  pageType: 'notes',
};

export default Sidebar;
