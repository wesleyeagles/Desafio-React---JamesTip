import { Box, Button, Icon, Paper, Skeleton, useMediaQuery, useTheme } from "@mui/material"

type Props = {
    
    showNewButton?: boolean;
    showBackButton?: boolean;
    showDeleteButton?: boolean;
    showSaveButton?: boolean;
    textButtonNew?: string;

    showNewButtonLoading?: boolean;
    showBackButtonLoading?: boolean;
    showDeleteButtonLoading?: boolean;
    showSaveButtonLoading?: boolean;

    onClickNew?: () => void;
    onClickBack?: () => void;
    onClickDelete?: () => void;
    onClickSave?: () => void;
    
  
  };

export const DetailsTools = ({

    showNewButton = true,
    showBackButton= true,
    showDeleteButton= true,
    showSaveButton= true,
    textButtonNew = "",

    showNewButtonLoading = false,
    showBackButtonLoading = false,
    showDeleteButtonLoading = false,
    showSaveButtonLoading = false,

    onClickNew,
    onClickBack,
    onClickDelete,
    onClickSave,

}: Props) => {

    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    

    return (
        <Box
        gap={1}
        marginX={1} 
        padding={1} 
        paddingX={2} 
        display='flex' 
        alignItems='center' 
        height={theme.spacing(5)} 
        component={Paper}
        
        >

        

        
        {(showSaveButton && !showSaveButtonLoading) && (<Button
        onClick={onClickSave} 
        variant='contained' 
        color='primary' 
        startIcon={<Icon>save</Icon>}>
         
        Salvar
        
        </Button>)}

        {(showSaveButtonLoading) && (<Skeleton width={100} height={56}/>)}

        
        {(showDeleteButton && !showDeleteButtonLoading) && (<Button 
        onClick={onClickDelete} 
        variant='outlined' 
        color='primary' 
        startIcon={<Icon>delete_forever</Icon>}>
            
        Apagar
        
        </Button>)}

        {(showDeleteButtonLoading) && (<Skeleton width={100} height={56}/>)}

        
        {(showNewButton && !showNewButtonLoading && !smDown && !mdDown) && (<Button
        onClick={onClickNew}  
        variant='outlined' 
        color='primary' 
        startIcon={<Icon>add</Icon>}>
            
        {textButtonNew}
        
        </Button>)}
        

        {(showNewButtonLoading && !smDown && !mdDown) && (<Skeleton width={130} height={56}/>)}



        
        {(showBackButton && !showBackButtonLoading) && (<Button
        onClick={onClickBack}  
        variant='outlined' 
        color='primary'
        startIcon={<Icon>keyboard_return</Icon>}>
            
        Voltar
      
        </Button>)}

      
        
        

        {(showBackButtonLoading) && (<Skeleton width={110} height={56}/>)}
        </Box>
    )
}