import { createTheme } from '@mui/material'

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#00D0B3',
            dark: '#00AA93',
            light: '#00ffdb',
            contrastText: '#000',
        },

        background: {
            default: '#FFFFFF',
            paper: 'gray',
        }
    },

    typography: {
        allVariants: {
            color: '#00D0B3'
        }
    }
});