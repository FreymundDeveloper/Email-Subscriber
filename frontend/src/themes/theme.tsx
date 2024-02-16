import { ThemeProvider as StyledThemeProvider } from "styled-components";

const bodyColor = '#000000',
    buttonColor = '#101770';

const theme = {
    color: {
        bodyColor,
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