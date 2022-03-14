import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useSelector } from 'react-redux';

export function MaterialThemeProvider({ children }) {
  const { dir,darkMode } = useSelector((state) => ({
    dir: state.layout.config.direction,
    darkMode: state.layout.config.darkMode,
  }));

  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const theme = createTheme({
    textAlign: 'right',
    direction: dir,
    typography: {
      fontFamily: ['pelak'].join(','),
    },

    palette: {
      mode: darkMode ? 'dark' : 'light',
      danger: {
        // light: will be calculated from palette.primary.main,
        main: '#f1416c',
        // dark: will be calculated from palette.primary.main,
        // contrastText: "#fff" //will be calculated to contrast with palette.primary.main
      },
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#009ef7',
        contrastText: '#fff',
        // dark: will be calculated from palette.primary.main,
        // contrastText: "#fff" //will be calculated to contrast with palette.primary.main
      },
      secondary: {
        // light: will be calculated from palette.primary.main,
        main: '#3783e7',
        // dark: will be calculated from palette.primary.main,
        // contrastText: "#fff" //will be calculated to contrast with palette.primary.main
      },
    },
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}
