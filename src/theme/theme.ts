'use client';
import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: { fontWeight: 700, fontSize: '3.5rem' },
    h2: { fontWeight: 600, fontSize: '2.5rem' },
    h3: { fontWeight: 600, fontSize: '1.75rem' },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF9900', // AWS Orange
      contrastText: '#000000',
    },
    secondary: {
      main: '#232F3E', // AWS Dark Blue/Black
    },
    background: {
      default: '#1A0B2E', // Deep Purple Background from your image
      paper: '#2D1B4E',   // Slightly lighter purple for cards
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b8c4',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Keeps buttons from being ALL CAPS
          borderRadius: '8px',
          fontWeight: 600,
          padding: '10px 24px',
        },
        containedPrimary: {
          backgroundColor: '#FF9900',
          '&:hover': {
            backgroundColor: '#e68a00',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backgroundImage: 'none', // Reset default MUI gradient
          backgroundColor: '#251536', // Card Background
        },
      },
    },
  },
});

export default theme;