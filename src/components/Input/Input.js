import styled, { css } from 'styled-components';
import magnifierIcon from '../../assets/icons/magnifier.svg';
const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 50px;
  margin-bottom: 25px;
  outline: none;
  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }
  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${magnifierIcon});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}
  ${({ todo }) =>
    todo &&
    css`
      padding: 10px 10px 10px 15px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      width: 200px;
    `}
`;
export default Input;