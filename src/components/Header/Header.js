import styled from 'styled-components';

const Header = styled.div`
  padding: 10px 0;

  @media (min-width: ${({ theme }) => theme.resolution.l}) {
    padding: 20px 0;
  }
`;

export default Header;
