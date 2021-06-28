import mutations from './mutations';
import router from '../../../router';
import { loadingStore, notifications } from '../../index';
import {AuthService} from '../../../services';
import {LogIn, Register} from '../../../interface/Auth';
import {Toast} from "../../../interface/Toast";

const authService = new AuthService();

export default {
    async logIn(loginForm: LogIn): Promise<void> {
        const response = await authService.logIn(loginForm)
        console.log('response login', response)
        if (response.success) {
            mutations.setAuth(true, response.data);
            await router.push({
                name: 'DashBoard'
            })
            return;
        }
        const toast: Toast = {
            body: 'Email o contraseña incorrectos',
            tittle: 'Error',
            type: 'error',
            show: true
        }
        notifications.actions.presentToast(toast)
        // if (response.data.data)
    },

    async register(registerForm: Register): Promise<void> {
        const response = await authService.register(registerForm)
        console.log('response register', response)
        if (!response.success) {
            const toast: Toast = {
                body: 'Error',
                tittle: 'Error',
                type: 'error',
                show: true
            }
            notifications.actions.presentToast(toast)
            return
        }

        const toast: Toast = {
            body: 'El registro se ha completado correctamente',
            tittle: 'Registro',
            type: 'success',
            show: true
        }
        notifications.actions.presentToast(toast)

        await router.push({
            name: 'login'
        })
    }
};
