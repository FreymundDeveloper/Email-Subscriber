import { ThemeProvider as StyledThemeProvider } from "styled-components";

const bodyColor = '#1f1f25',
    formColor = '#09253f',
    successAlertColor = '#019c5c',
    errorAlertColor = '#8b0202',
    buttonColor = '#265a7e';

const theme = {
    color: {
        bodyColor,
        formColor,
        successAlertColor,
        errorAlertColor,
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