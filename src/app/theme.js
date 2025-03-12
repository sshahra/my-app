// theme.js
import { createTheme } from '@mui/material';

export const neonTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: 'rgba(0, 0, 0, 0.8)',
    },
    primary: {
      main: '#00f2ff', // Cyan neon
      light: '#80f9ff',
      dark: '#00bdc7',
      contrastText: '#000000',
    },
    secondary: {
      main: '#ff00e5', // Magenta neon
      light: '#ff80f2',
      dark: '#c700b3',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#7700ff', // Purple neon
      light: '#bb80ff',
      dark: '#5900c7',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.2rem',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.1rem',
    },
    h3: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.1rem',
    },
    h4: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.05rem',
    },
    h5: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 600,
    },
    button: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.1rem',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
        
        body {
          background-color: #000000;
          color: #ffffff;
        }
        
        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.8);
        }
        
        ::-webkit-scrollbar-thumb {
          background: #00f2ff;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #ff00e5;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'uppercase',
          fontWeight: 600,
          letterSpacing: '0.1rem',
          transition: 'all 0.3s ease-in-out',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transition: 'all 0.5s ease-in-out',
          },
          '&:hover::before': {
            left: '100%',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            boxShadow: '0 0 12px #00f2ff, 0 0 20px rgba(0, 242, 255, 0.5)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 0 15px #ff00e5, 0 0 30px rgba(255, 0, 229, 0.5)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: '"Orbitron", sans-serif',
            letterSpacing: '0.05rem',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: 'rgba(255, 255, 255, 0.7)',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#00f2ff',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#00f2ff',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease-in-out',
            },
            '&:hover fieldset': {
              borderColor: '#00f2ff',
              borderWidth: '2px',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00f2ff',
              borderWidth: '2px',
              boxShadow: '0 0 8px rgba(0, 242, 255, 0.5)',
            },
            '& input': {
              color: '#ffffff',
              fontFamily: '"Orbitron", sans-serif',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Orbitron", sans-serif',
          fontWeight: 500,
          borderRadius: '4px',
        },
        colorPrimary: {
          backgroundColor: '#00f2ff',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#80f9ff',
          },
        },
        colorSecondary: {
          backgroundColor: '#ff00e5',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#ff80f2',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          border: '2px solid #00f2ff',
          boxShadow: '0 0 10px rgba(0, 242, 255, 0.5)',
        },
      },
    },
  },
});

// Common style functions for reuse
export const getNeonGlowStyle = (color = '#00f2ff', intensity = 1) => ({
  boxShadow: `0 0 ${5 * intensity}px ${color}, 0 0 ${10 * intensity}px ${color}`,
});

export const getNeonTextStyle = (color = '#00f2ff', intensity = 1) => ({
  color: color,
  textShadow: `0 0 ${5 * intensity}px ${color}, 0 0 ${10 * intensity}px ${color}`,
});

export const getNeonBorderStyle = (color = '#00f2ff', intensity = 1, width = 2) => ({
  border: `${width}px solid ${color}`,
  boxShadow: `0 0 ${5 * intensity}px ${color}, 0 0 ${10 * intensity}px ${color}`,
});

export const getGlassmorphismStyle = (opacity = 0.1) => ({
  backgroundColor: `rgba(0, 0, 0, ${opacity})`,
  backdropFilter: 'blur(10px)',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
});