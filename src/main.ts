import { firestorePlugin } from 'vuefire';
import VueAxios from 'vue-axios';

import axios from 'axios';

/*
ToDo APP
*/

import app from "./plugins/app";

/* router */
import router from './router';

/* Css styles */
import './assets/styles/index.css';
import './assets/scss/styles.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/assets/styles/tailwind.css";

// import './sw';

/* plugins */
app.use(firestorePlugin);
app.use(VueAxios, axios);
app.use(router)

import './plugins'

/* mount app*/
app.mount('#app')

// @ts-ignore
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
})

function handleSWManualUpdates(swRegistration: ServiceWorkerRegistration | undefined) {
    // noop
}

function handleSWRegisterError(error: any) {
    // noop
}

try {
    const updateSW = registerSW({
        immediate: true,
        onOfflineReady() {
            console.log("onOfflineReady")
        },
        onNeedRefresh() {
            console.log("onNeedRefresh")
        },
        onRegistered(swRegistration: ServiceWorkerRegistration) {
            swRegistration && handleSWManualUpdates(swRegistration)
        },
        onRegisterError(e: Error) {
            handleSWRegisterError(e)
        }
    })
} catch {
    console.log("PWA disabled.")
}

if (!import.meta.env.DEV) {
    console.log = function () {}
}