import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/system";
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { DarkTheme, LightTheme } from '../themes';

/* Context para a troca de temas */
/* Usado temas 'Light' e 'Dark" que podem ser alterados na pasta /themes  */


interface IThemeContextData {
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext ({} as IThemeContextData)

export const useAppThemeContext = () => {
    return useContext(ThemeContext);

}

type Props = {
    children: React.ReactNode
};
export const AppThemeProvider = ({children}:Props) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('dark');


    /* Usado useCallback para previnir possiveis loops infinitos */
    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    }, [])

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme

        return DarkTheme
    }, [themeName])

    return (
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
          <ThemeProvider theme={theme}>
          <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
          </Box>
          </ThemeProvider>
        </ThemeContext.Provider>
    )
}