import { apiClient } from '../axios/config';
import { AxiosError, AxiosResponse } from 'axios'
import loading from '../../store/modules/loading';
import { LogIn, Register } from '../../interface/Auth';
import { axiosService } from "../index";
import { SurePromise } from "../../interface/SurePromise";

export default class Auth {

    public static async logIn(userForm: LogIn): Promise<SurePromise<AxiosResponse>> {
        return await axiosService.postData(userForm, '/accounts/authenticate')
    }

    static async register(registerForm: Register): Promise<AxiosResponse> {
        await loading.actions.start('Cargando...')
        try {
            const { data } = await apiClient.post<AxiosResponse>('/accounts/register', registerForm);
            return data
        } catch (err) {
            if (err && err.response) {
                const axiosError = err as AxiosError
                return axiosError.response?.data
            }
            throw err
        } finally {
            await loading.actions.finish()
        }
    }
}
