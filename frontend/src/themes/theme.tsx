import { ThemeProvider as StyledThemeProvider } from "styled-components";

const bodyColor = '#1f1f25',
    formColor = '#09253f',
    buttonColor = '#265a7e';

const theme = {
    color: {
        bodyColor,
        formColor,
        buttonColor,
    }
}

export type ThemeType = typeof theme;

interface Props {
    children?: React.ReactNode;
  }

export const Theme: React.FC<Props> = ( { children } ) => {
    return (
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    );
}