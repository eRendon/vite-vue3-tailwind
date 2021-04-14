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

import './registerServiceWorker';

/* plugins */
app.use(firestorePlugin);
app.use(VueAxios, axios);
app.use(router)

import './plugins'

/* mount app*/
app.mount('#app')

