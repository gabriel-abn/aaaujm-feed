import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: var(--general-background);
        color: var(--text-primary);
        font-family: 'Montserrat', sans-serif;
    }
    :root {
        --general-primary: #830505;
        --general-secondary: #651F1F;
        --general-third: #C12323;
        --general-background: #2B1616;

        --text-primary: #DBDBDB;
        --text-secondary: #C98484;

        --border-active: #C98484;
    }
`;
