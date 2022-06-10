import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, useTheme, ListItemText, Icon} from "@mui/material"
import { Box } from "@mui/system";



type Props = {
    children: React.ReactNode
};
export const MenuLateral = ({children}:Props) => {
    const theme = useTheme()


    return (
        <>
        <Drawer open={true} variant='permanent'>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
            <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }}  alt='Avatar' >WC</Avatar>
            </Box>

            <Divider />

            <Box flex={1}>
              <List component="nav">
                  <ListItemButton>
                    <ListItemIcon>
                     <Icon>Home</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Início" />
                  </ListItemButton>
              </List>
            </Box>
        </Box>
        </Drawer>
        <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
        </Box>
        </>
    )
}