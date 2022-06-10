import { createTheme } from '@mui/material'

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#00D0B3',
            dark: '#00AA93',
            light: '#00ffdb',
            contrastText: '#FFFFFF',
        },

        background: {
            default: '#FFFFFF',
            paper: '#303134',
        }
    }
});