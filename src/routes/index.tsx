import { Button } from '@mui/material'
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from '../shared/contexts';

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext() /* Função para a troca de tema (toggleTheme) */

    return (
        <Routes>
            <Route path="/" element={<Button variant='contained' color='primary' onClick={toggleTheme}>TESTE</Button>} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );

}

