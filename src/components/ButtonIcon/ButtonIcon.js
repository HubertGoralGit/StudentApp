import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 45px;
  height: 45px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  background-position: 50% 50%;
  background-size: 60%;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 15px;
  margin-right: 20px;

  &.add {
    position: fixed;
    bottom: 20px;
    right: 0;
    background-color: ${({ activeColor, theme }) =>
      activeColor ? theme[activeColor] : theme.notes};
    border-radius: 50%;
    background-size: 45%;
    width: 55px;
    height: 55px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
    z-index: 99999;

    :hover {
      box-shadow: 0 5px 24px rgba(0, 0, 0, 0.3);
    }

    @media (min-width: ${({ theme }) => theme.resolution.l}) {
      bottom: 20px;
      right: 20px;
    }
  }

  @media (min-width: ${({ theme }) => theme.resolution.l}) {
    width: 75px;
    height: 75px;
    margin-right: 0;
  }

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
