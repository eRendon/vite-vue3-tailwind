import mutations from './mutations';
import router from '../../../router';
import { loadingStore } from '../../index';

export default {
    async logIn(): Promise<void> {
        loadingStore.actions.loadingStart();
        mutations.setAuth(true);
        await router.push({
            name: 'DashBoard'
        })
    }
};
