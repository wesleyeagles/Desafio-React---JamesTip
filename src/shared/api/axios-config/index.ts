import axios from "axios";
import { Environment } from "../../environment";
import { errorInteceptor, responseInterceptor } from "./inteceptors";

const Api = axios.create({
    baseURL: Environment.BASE_URL
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInteceptor(error)
);

export { Api };
