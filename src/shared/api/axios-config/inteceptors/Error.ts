import { AxiosError } from "axios";


export const errorInteceptor = (error: AxiosError) => {

    if (error.message === 'Network Error') {
        return Promise.reject(new Error('Erro de conexão, inicie a API de database com /npm run database/'));
    }

    if (error.response?.status === 401) {
        return Promise.reject(new Error('Erro de autenticação'));
    }

    return Promise.reject(error);
}