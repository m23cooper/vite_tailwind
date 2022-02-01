import { createApp } from 'vue';
import { useStore } from './store/Store';

import App from './App.vue';
import './css/index.css';

const app = createApp(App);

app.use(useStore);

app.mount('#app');
