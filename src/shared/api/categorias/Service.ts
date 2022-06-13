import { Environment } from "../../environment";
import { Api } from "../axios-config";

export interface serviceCategories {

    id: number;
    categoryName: string;

}

export interface totalCategories  {

    data: serviceCategories[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<totalCategories | Error> => { 
    try {
      
      const relativeURL = `/categories?_page=${page}&_limit=${Environment.LINES_LIMIT}&categoryName_like=${filter}`

      const { data, headers } = await Api.get(relativeURL);

      if (data) {
        return {
            data,
            totalCount: Number(headers['x-total-count'] || Environment.LINES_LIMIT),
        };
      }

      return new Error('Erro ao listar categorias')

    } catch (error) {
      console.error(error)
      return new Error((error as {message: string}).message || 'Erro ao listar categorias')

    }
 };

const getById = async (id: number): Promise<serviceCategories | Error>  => {

    try {
  
        const { data } = await Api.get(`/categories/${id}`);
  
        if (data) {
          return data
        }
  
        return new Error('Erro ao pesquisar categoria')
  
      } catch (error) {
        console.error(error)
        return new Error((error as {message: string}).message || 'Erro ao pesquisar categoria')
  
      }
 }

const create = async (dados: Omit<serviceCategories, 'id'>): Promise<number | Error> => {

    try {
  
        const { data } = await Api.post<serviceCategories>('/categories', dados);
  
        if (data) {
          return data.id
        }
  
        return new Error('Erro ao criar categoria')
  
      } catch (error) {
        console.error(error)
        return new Error((error as {message: string}).message || 'Erro ao criar categoria')
  
      }
 }

const updateById = async (id: number, dados: serviceCategories): Promise<void | Error> => { 

    try {
  
        await Api.put(`/categories/${id}`, dados);
  
      } catch (error) {
        console.error(error)
        return new Error((error as {message: string}).message || 'Erro ao atualizar dados da categoria')
  
      }
}

const deleteById = async (id: number): Promise<void | Error> => {

    try {
  
        await Api.delete(`/categories/${id}`);
  
      } catch (error) {
        console.error(error)
        return new Error((error as {message: string}).message || 'Erro ao deletar categoria')
  
      }
 }


export const Service = {


getAll,
getById,
create,
updateById,
deleteById,

};