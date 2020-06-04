import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 35px;
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #aaa;

  ${(props) => props.isFocused && css`
    box-shadow: 0px 0px 2px #414141;
  `}

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: 0;
    padding: 0 15px;
    color: #aaa;
    text-align: center;
    &::placeholder {
      color: #aaa;
      text-align: center;
    }

    & + input {

    }
  }
`;

export const Error = styled.span``;
