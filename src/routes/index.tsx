import { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Categories, CategoriesDetails, Dashboard } from '../pages';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext() /* Context com as opções de menu, array de opções logo abaixo */

    useEffect(() => {
      setDrawerOptions([
        {
            label: 'Início',
            icon: 'home',
            path: '/'

        },

        {
            label: 'Produtos',
            icon: 'store',
            path: '/Produtos'
            
        },

        {
            label: 'Categorias',
            icon: 'category',
            path: '/Categorias'
            
        },

       
      ])      
    }, [setDrawerOptions])


    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Categorias" element={<Categories />} />
            <Route path="/Categorias/Detalhes/:id" element={<CategoriesDetails />} />
            <Route path="/Produtos" element={<></>} />
            <Route path="/Novo-Produto" element={<></>} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );

}

