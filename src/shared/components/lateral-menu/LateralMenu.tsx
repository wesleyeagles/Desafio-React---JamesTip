import { Avatar, Divider, Drawer, List, ListItemButton, ListItemIcon, useTheme, ListItemText, Icon, useMediaQuery} from "@mui/material"
import { Box } from "@mui/system";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useAppThemeContext, useDrawerContext } from "../../contexts";
import LogoAvatar from "../../styled-components/LogoAvatar";
import StyledLink from '../../styled-components/StyledLink'

interface IListItemLinkProps {
    to: string;
    icon: string;
    label: string;
    onClick: (() => void) | undefined; /* Fechar menu lateral ao selecionar uma opção de link ( Mobile ) */
}



const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
    const { toggleTheme, themeName } = useAppThemeContext()

    const Navigate = useNavigate()

    const resolvedPath = useResolvedPath(to)
    const matchPath = useMatch(resolvedPath.pathname)

    const handleClick = () => {
        Navigate(to)
        onClick?.()
    }

    return (
        <ListItemButton selected={!!matchPath} onClick={handleClick}>
          <ListItemIcon>
              <Icon>{icon}</Icon>
          </ListItemIcon>
          <StyledLink light={themeName == 'dark'? false : true} >
          {label}
          </StyledLink>
       </ListItemButton>
    );
};

type Props = {
    children: React.ReactNode
};
export const LateralMenu = ({children}:Props) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))

    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext()
    const { toggleTheme, themeName } = useAppThemeContext()
    


    return (
      <>
        <Drawer
          onClose={toggleDrawerOpen}
          open={isDrawerOpen}
          variant={smDown ? "temporary" : "permanent"}
        >
          <Box
            width={theme.spacing(28)}
            height="100%"
            display="flex"
            flexDirection="column"
          >
            <Box
              width="100%"
              height={theme.spacing(20)}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <LogoAvatar>
                <img src='https://jamestip.com/wp-content/uploads/elementor/thumbs/logo-sec%CC%A7a%CC%83o-topo-pfl36kyquqhzw5cx7v1u9vo859199xyc3syy29g63c.png' />
              </LogoAvatar>
            </Box>

            <Divider />

            <Box flex={1}>
              <List component="nav">
                {drawerOptions.map((drawerOption) => (
                  <ListItemLink
                    to={drawerOption.path}
                    key={drawerOption.path}
                    icon={drawerOption.icon}
                    label={drawerOption.label}
                    onClick={smDown ? toggleDrawerOpen : undefined}
                  />
                ))}
              </List>
            </Box>
            <Box>
              <List component="nav">
                <ListItemButton onClick={toggleTheme}>
                  <ListItemIcon>
                    <Icon>{themeName == 'dark'? 'light_mode' : 'dark_mode'}</Icon>
                  </ListItemIcon>
                  <ListItemText primary="Alternar tema" />
                </ListItemButton>
              </List>
            </Box>
          </Box>
        </Drawer>
        <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
          {children}
        </Box>
      </>
    );
}