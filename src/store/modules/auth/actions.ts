import mutations from './mutations';
import router from '../../../router';
import { loadingStore } from '../../index';
import { authService } from "../../../services";
import { LogIn } from "../../../interface/Auth";

export default {
    async logIn(loginForm: LogIn): Promise<void> {
        loadingStore.actions.start('Cargando...');
        const response = await authService.logIn(loginForm)
        console.log('response login', response)
        if (response.success) {
            mutations.setAuth(true);
            await router.push({
                name: 'DashBoard'
            })
        }
    }
};
