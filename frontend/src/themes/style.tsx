import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme?: ThemeType }>`
    * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    };
    
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: ${(props) => props.theme.color.bodyColor};
        width: 1000px;
        border-radius: 8px;
        margin: 0 auto;
    }
    
    @media (max-width: 848px) {
        body {
            width: 400px;
        }
    }

`