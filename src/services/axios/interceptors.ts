import { apiClient } from "./config";
import { AxiosError } from "axios";


apiClient.interceptors.request.use((config) => {
    console.log("configuración axios", config)
    // const { jwtToken } = user.getters.getProfile();
    // if (jwtToken) {
    //     config.headers['Authorization'] = `Bearer ${jwtToken}`;
    // }
    return config;
}, (error) => {
    return Promise.reject(error);
});

apiClient.interceptors.response.use((response) => {
    console.log('interceptors', response);
    return response
}, async (error) => {
    console.log("error en response", error.response.status)
    if (error && error.response) {
        const axiosError = error as AxiosError
        if (axiosError.response?.status === 401) {
            // await alertApp.present('Sesión expirada', '', 'Error')
            // await user.actions.logOut()
        }
    }
    return Promise.reject(error);
})
