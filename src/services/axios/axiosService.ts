import loading from '../../store/modules/loading';
import { apiClient } from './config';
import { AxiosError, AxiosResponse } from 'axios';
import surePromise from '../../utils/surePromise';
import { Toast } from '../../interface/Toast';
import { notifications } from '../../store';
import { SurePromise } from "../../interface/SurePromise";

export class AxiosService<T, U> {
    
    async postData(postData: U, url: string): Promise<SurePromise<T>> {
        loading.actions.start('Cargando...')
        try {
            return await surePromise(apiClient.post<AxiosResponse>(url, postData));
        } catch (err: unknown) {
            // @ts-ignore
            if (err && err.response) {
                const axiosError = err as AxiosError
                const toast: Toast = {
                    body: axiosError.response?.data.message,
                    tittle: 'Error',
                    type: 'error',
                    show: true
                }
                notifications.actions.presentToast(toast)
            }
            throw err
        } finally {
            loading.actions.finish()
        }
    }

}

export const axiosSingleton = function <T, U>()  {
    return new AxiosService<T, U>()
}

//export const axiosSingleton = new AxiosService()
