import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme  } from "@mui/material";
import { ReactNode } from "react";
import { useDrawerContext } from "../contexts";



interface LayoutBaseProps {
    titulo: string;
    toolbar?: ReactNode;
    children?: React.ReactNode;
}



export const LayoutBase: React.FC<LayoutBaseProps> = ({children, titulo, toolbar}) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    const {toggleDrawerOpen} = useDrawerContext()
    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box display="flex" alignItems="center" padding={1} gap={1} height={theme.spacing(smDown ? 4 : mdDown ? 6 : 8)}>
            
            {smDown &&
            (<IconButton>
            <Icon onClick={toggleDrawerOpen}>menu</Icon>
            </IconButton>)}
            <Typography 
            variant={smDown ? "h5" : mdDown ? 'h4' : 'h3'} 
            component="h5"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipses"
            >
            
            {titulo}
            </Typography>
            </Box>

            {toolbar &&
            (<Box>
            {toolbar}
            </Box>)}

            <Box flex={1} overflow="auto">
            {children}
            </Box>
        </Box>
    );
};