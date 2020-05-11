import styled, { css } from 'styled-components';
import arrowIcon from '../../assets/icons/arrow.svg';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
  ${({ back }) =>
    back &&
    css`
      width: 206px;
      height: 34px;
      padding: 10px 20px 10px 20px;
      align-items: flex-start;
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: ${({ theme }) => theme.regular};
      background-color: ${({ theme }) => theme.grey100};
      background-image: url(${arrowIcon});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}
`;

export default Button;
