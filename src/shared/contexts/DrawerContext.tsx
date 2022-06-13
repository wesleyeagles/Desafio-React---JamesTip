import { createContext, useCallback, useContext, useState } from 'react'

/* Context para o toggle do menu lateral nas versões mobile */

interface IDrawerOptions {

    icon: string;
    label: string;
    path: string;
}

interface IDrawerContextData {
    isDrawerOpen: boolean;
    drawerOptions: IDrawerOptions[];
    toggleDrawerOpen: () => void;
    setDrawerOptions: (newDrawerOption: IDrawerOptions[]) => void;
}

const DrawerContext = createContext ({} as IDrawerContextData)

export const useDrawerContext = () => {
    return useContext(DrawerContext);

}

type Props = {
    children: React.ReactNode
};
export const DrawerProvider = ({children}:Props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);


    /* Usado useCallback para previnir possiveis loops infinitos */
    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])

    const handleSetDrawerOptions = useCallback((newDrawerOption: IDrawerOptions[]) => {
        setDrawerOptions(newDrawerOption)
    }, [])

    return (
        <DrawerContext.Provider value={{isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions:handleSetDrawerOptions}}>
          {children}
        </DrawerContext.Provider>
    )
}