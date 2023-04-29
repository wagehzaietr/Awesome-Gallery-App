import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Roboto Mono', monospace;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  transition: all 0.5s ease;
  padding: 0;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    background: ${({theme}) => theme.colors.background};
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.colors.textside};
  }
}
*{
  text-transform: capitalize;

}
`;

export { GlobalStyle };
