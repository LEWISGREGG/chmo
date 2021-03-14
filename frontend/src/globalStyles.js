import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 75%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 4rem;
  padding-left: 4rem;
  @media screen and (max-width: 991px) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
`;

export const Button = styled.button`
 font-family: "Grand Hotel",
  cursive,
  sans-serif;
  border-radius: 0.8rem;
  background: transparent;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '8px 54px' : '5px 7px')};
  color: #03030a;
  font-size: ${({ fontBig }) => (fontBig ? '16px' : '12px')};
  outline: none;
  border: 0.3 rem solid #302f2e;
  cursor: pointer;
  &:hover {
    transition: all 0.5s ease-out;
    background-color: ${({ primary }) => (primary ? '#698f3f' : '#698f3f')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;