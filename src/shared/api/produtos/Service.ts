import { Environment } from "../../environment";
import { Api } from "../axios-config";

type Products = {

    id: number;
    code: string;
    category: string;
    productName: string;
    provider: string;
    value: string;

}

type totalProducts = {

    data: Products[];
    totalCount: number;
}

const getAll = async (page = 1, filter = ''): Promise<totalProducts | Error> => { 
    try {
      
      const relativeURL = `/products?_page=${page}&_limit=${Environment.LINES_LIMIT}&productName_like=${filter}`

      const { data, headers } = await Api.get(relativeURL);

      if (data) {
        return {
            data,
            totalCount: Number(headers['x-total-count'] || Environment.LINES_LIMIT),
        };
      }

      return new Error('Erro ao listar produtos')

    } catch (error) {
      console.error(error)
      return new Error((error as {message: string}).message || 'Erro ao listar produtos')

    }
 };

const getById = async (id: number): Promise<Products | Error>  => {

    try {
  
        const { data } = await Api.get(`/products/${id}`);
  
        if (data) {
          return data
        }
  
        return new Error('Erro ao pesquisar produto')
  
      } catch (error) {
        console.error(error)
        return new Error((error as {message: string}).message || 'Erro ao pesquisar produto')
  
      }
 }

const create = async (dados: Omit<Products, 'id'>): Promise<number | Error> => {

    try {
  
        const { data } = await Api.post<Products>('/products', dados);
  
        if (data) {
          return data.id
        }
  
        return new Error('Erro ao criar produto')
  
      } catch (error) {
        console.error(error)
        return new Error((error as {message: string}).message || 'Erro ao criar produto')
  
      }
 }

const updateById = async (id: number, dados: Products): Promise<void | Error> => { 

    try {
  
        await Api.put(`/products/${id}`, dados);
  
      } catch (error) {
        console.error(error)
        return new Error((error as {message: string}).message || 'Erro ao atualizar dados do produto')
  
      }
}

const deleteById = async (id: number): Promise<void | Error> => {

    try {
  
        await Api.delete(`/products/${id}`);
  
      } catch (error) {
        console.error(error)
        return new Error((error as {message: string}).message || 'Erro ao deletar produto')
  
      }
 }


export const Service = {


getAll,
getById,
create,
updateById,
deleteById,

};