import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
        scroll-behavior: smooth;
        overflow: hidden;
        overflow-wrap: break-word;
        font-family: "Montserrat", sans-serif;
        font-family: "Open Sans", sans-serif;
        font-family: "Poppins", sans-serif;
        font-family: "Roboto", sans-serif;
    }
    p{
        color: ${({ theme }) => theme.color.text}
    }
    h1{
        color: ${({ theme }) => theme.color.heading}
    }
`;

export default GlobalStyle;
