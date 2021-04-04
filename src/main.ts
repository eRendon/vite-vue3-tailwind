import { createApp } from 'vue'
import { firestorePlugin } from 'vuefire';
import VueAxios from 'vue-axios';
// @ts-ignore
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios';

import App from './App.vue'

/* router */
import router from './router';

/* Css styles */
import './assets/styles/index.css';
import './assets/scss/styles.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/assets/styles/tailwind.css";

/* components */
import MainLayout from '@/layout/MainLayout/MainLayout.vue';
import Skeleton from '@/components/shared/SkeletonLoading/Skeleton.vue';
import DetailItem from '@/components/shared/Modals/DetailItem/DetailItem.vue';
import Toast from '@/components/shared/Toast/Toast.vue';
import SpinnerLoading from '@/components/Loaders/SpinnerLoading/SpinnerLoading.vue';

import './registerServiceWorker';

const app = createApp(App).use(router)

/* components */
app.component('skeleton', Skeleton);
app.component('main-layout', MainLayout);
app.component('detail-item', DetailItem);
app.component('toast', Toast);
app.component('spinner-loading', SpinnerLoading);

/* plugins */
app.use(firestorePlugin);
app.use(VueAxios, axios);
// app.use(VueAuthenticate, {
//     baseUrl: 'http://localhost:3000', // Your API domain
//
//     providers: {
//         github: {
//             clientId: '',
//             redirectUri: 'http://localhost:8080/auth/callback' // Your client app URL
//         }
//     }
// })

/* mount app*/
app.mount('#app')


function checkDarkMode() {
    if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        return true
    }
    return false
}
if (checkDarkMode()) {
    document.documentElement.classList.add('mode-dark')
} else {
    document.documentElement.classList.remove('mode-dark')
}
