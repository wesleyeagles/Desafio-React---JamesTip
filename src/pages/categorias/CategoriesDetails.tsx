import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Service } from "../../shared/api/categorias/Service"
import { DetailsTools } from "../../shared/components"
import { LayoutBase } from "../../shared/layouts"

type Props = {

   

}

 
export const CategoriesDetails = ({}: Props) => {
    const { id = 'nova' } = useParams<'id'>()
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (id !== 'Nova') {
            setIsLoading(true)
            Service.getById(Number(id))
            .then((result) => {
                setIsLoading(false)
                if (result instanceof Error) {
                    alert(result.message)
                    navigate('/Categorias')
                } else {

                    console.log(result)

                }
            })
        }
    }, [id])

    const handleSave = () => {

    }

    const handleDelete = () => {
        
    }

    return (
       <LayoutBase titulo="Detalhes da categoria"
       toolbar={( <DetailsTools textButtonNew="Nova categoria" 
       showDeleteButton={id !== 'Nova'}
       showNewButton={id !== 'Nova'}

       onClickSave = {handleSave}
       onClickDelete = {handleDelete}
       onClickNew = {() => navigate('/Categorias/Detalhes/Nova')}
       onClickBack = {() => navigate('/Categorias')}
       /> )}
       
       >

       </LayoutBase>
    )
}