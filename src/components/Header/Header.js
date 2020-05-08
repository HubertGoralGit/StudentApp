import styled from 'styled-components';

const Header = styled.div`
  padding: 10px 25px;

  @media (min-width: ${({ theme }) => theme.resolution.l}) {
    padding: 20px 50px;
  }
`;

export default Header;
