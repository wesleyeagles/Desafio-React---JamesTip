import { Icon, IconButton, LinearProgress, Pagination, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material"
import { useMemo, useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { serviceCategories, Service } from "../../shared/api/categorias/Service"
import { ListProducts } from "../../shared/components"
import { Environment } from "../../shared/environment"
import { useDebounce } from "../../shared/hooks"
import { LayoutBase } from "../../shared/layouts"

export const Categories = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { debounce } = useDebounce(1000)
    const navigate = useNavigate()

    const [rows, setRows] = useState<serviceCategories[]>([])
    const [totalCount, setTotalCount] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const search = useMemo(() => {
        return searchParams.get('busca') || ''
    }, [searchParams])

    const page = useMemo(() => {
        return Number(searchParams.get('pagina') || '1')
    }, [searchParams])

    useEffect(() => {

        setIsLoading(true)

        debounce(() => {
            Service.getAll(page, search).then((result) => {
                setIsLoading(false)
                if (result instanceof Error) {
                    alert(result.message);
                } else {
                    console.log(result)

                    setRows(result.data)
                    setTotalCount(result.totalCount)
                }
            });   
        });
        
    }, [search, page])

    const handleDelete = (id: number) => {
        if (window.confirm('Realmente deseja apagar?')) {
            Service.deleteById(id)
            .then(result => {
                if (result instanceof Error) {
                    alert(result.message)
                } else {
                    setRows(oldRows => {
                        return [
                            ...oldRows.filter(oldRow =>oldRow.id !== id)
                        ]
                    }) 
                    alert('Categoria apagada com sucesso!')
                }
            })
        }

    }
    

    return (
        <LayoutBase titulo='Categorias'
        toolbar={ <ListProducts 
        showSearchInput 
        newButtonText="Nova" 
        searchText={search}
        onClickNew={() => navigate('/Categorias/Detalhes/Nova')} 
        onSearchTextChange={text => setSearchParams({busca:text, pagina: '1'}, {replace: true})}/> } >



        <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Ações</TableCell>
                    <TableCell>Nome</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map(row => (
                
                <TableRow key={row.id}>
                        <TableCell width={100}>
                            <IconButton  size="small" onClick={() => handleDelete(row.id)}>
                                <Icon>delete</Icon>
                            </IconButton>
                            <IconButton  size="small" onClick={() => navigate(`/Categorias/Detalhes/${row.id}`)}>
                                <Icon>edit</Icon>
                            </IconButton>
                        </TableCell>
                        <TableCell>{row.categoryName}</TableCell>
                </TableRow>
                
            ))}
            </TableBody>

            {totalCount === 0 && !isLoading &&(
                <caption>{Environment.EMPTY_LIST}</caption>
            )}
            <TableFooter>
            <TableRow>
                    {isLoading && (<TableCell colSpan={3}>
                        <LinearProgress variant='indeterminate' />
                    </TableCell>)}
            </TableRow>

            {(totalCount > 0 && totalCount > Environment.LINES_LIMIT) && 
            (<TableRow>
            <TableCell colSpan={3}>
                <Pagination 
                page={page}
                count={Math.ceil(totalCount / Environment.LINES_LIMIT)}
                onChange={(e, newPage) => setSearchParams({ search, pagina: newPage.toString() }, {replace: true})}
                />
            </TableCell>
            </TableRow>)}
            </TableFooter>
        </Table> 
        </TableContainer>
        </LayoutBase>
    )
}