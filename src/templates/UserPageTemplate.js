import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar/Sidebar';

const StyledWrapper = styled.div`
  padding: 0 0 0 25px;
  @media (min-width: ${({ theme }) => theme.resolution.l}) {
    padding: 0 0 0 50px;
  }
`;

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    <StyledWrapper>{children}</StyledWrapper>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  pageType: PropTypes.oneOf(['notes', 'todo', 'images']),
};
export default UserPageTemplate;
