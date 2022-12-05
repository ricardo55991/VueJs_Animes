import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


createApp(App).use(store).use(router).use(bootstrap).mount('#app');
