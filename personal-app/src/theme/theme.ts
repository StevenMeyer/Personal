"use client";
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                background: {
                    default: '#fcf8ff',
                    paper: '#ebe7ef',
                },
                primary: {
                    main: '#332f66',
                    light: '#6a67a1',
                    contrastText: '#ffffff',
                },
                secondary: {
                    main: '#4e2b3e',
                    light: '#8a6176',
                    contrastText: '#ffffff',
                },
                error: {
                    main: '#740066',
                    light: '#cf2c27',
                    contrastText: '#ffffff',
                },
            },
        },
        dark: {
            palette: {
                background: {
                    default: '#fcf8ff',
                    paper: '#28272d',
                },
                primary: {
                    main: '#dcd88ff',
                    light: '#8e8ac7',
                    contrastText: '#000000',
                },
                secondary: {
                    main: '#ffcfe5',
                    light: '#b1849a',
                    contrastText: '#000000',
                },
                error: {
                    main: '#ffd2cc',
                    light: '#ff5449',
                    contrastText: '#000000',
                },
            },
        },
    },
    cssVariables: true,
    typography: {
        fontFamily: 'var(--font-montserrat)',
        h1: {
            fontFamily: 'var(--font-bebas)',
            letterSpacing: '0',
        },
        h2: {
            fontFamily: 'var(--font-bebas)',
            letterSpacing: '0',
        },
        h3: {
            fontFamily: 'var(--font-bebas)',
            letterSpacing: '0',
        },
        h4: {
            fontFamily: 'var(--font-bebas)',
            letterSpacing: '0',
        },
        h5: {
            fontFamily: 'var(--font-bebas)',
            letterSpacing: '0',
        },
        h6: {
            fontFamily: 'var(--font-bebas)',
            letterSpacing: '0',
        },
    },
});
