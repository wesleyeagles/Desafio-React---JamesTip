import { Box, Button, TextField, Paper, useTheme, Icon } from "@mui/material";
import { Environment } from "../../environment";


type Props = {
  children?: React.ReactNode;
  searchText?: string;
  showSearchInput?: boolean;
  onSearchTextChange?: (newText: string) => void;
  newButtonText?: string;
  showNewButton?: boolean;
  onClickNew?: () => void;

};

export const ListProducts = ({ 
    children, 
    searchText = '', 
    showSearchInput = false, 
    onSearchTextChange,
    newButtonText = 'Novo',
    showNewButton = true,
    onClickNew

}: Props) => {

    
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      padding={1}
      paddingX={1}
      display="flex"
      gap={1}
      alignItems="center"
      component={Paper}
    >
      {showSearchInput &&(
        <TextField 
        size='small' 
        placeholder={Environment.SEARCH_PLACEHOLDER}
        value={searchText}
        onChange={(e) => onSearchTextChange?.(e.target.value)}
        
        />
      )}

      <Box flex={1} display='flex' justifyContent='flex-end'>

      {showNewButton &&(
        <Button 
        variant='contained' 
        color='primary' 
        onClick={onClickNew}
        endIcon={<Icon>add</Icon>}>{newButtonText}
        </Button>
      )}

      </Box>
    </Box>
  );
};
