import { createTheme } from '@mui/material'

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#00D0B3',
            dark: '#00AA93',
            light: '#00ffdb',
            contrastText: '#FFFFFF',
        },

        background: {
            default: '#333333',
            paper: '#FFF',
        }
    }
});