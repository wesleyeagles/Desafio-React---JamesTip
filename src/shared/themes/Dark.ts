import { createTheme } from '@mui/material'

export const DarkTheme = createTheme({
    palette: {
        mode:'dark',
        primary: {
            main: '#00D0B3',
            dark: '#00AA93',
            light: '#00ffdb',
            contrastText: '#FFF',
        },

        background: {
            default: '#333333',
            paper: '#000',
        }
    },

    typography: {
        allVariants: {
            color: 'white'
        }
    }
});