import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { glowingTheme } from './GlowingTheme';

const ThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={glowingTheme}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider; 