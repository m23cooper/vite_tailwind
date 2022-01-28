import { createApp } from 'vue';
import store from './store/Store';

import App from './App.vue';
import './css/index.css';

const app = createApp(App);

app.use(store);

app.mount('#app');
