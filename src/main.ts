import { createPinia } from 'pinia';
import { createApp } from 'vue';

import { ComponentLibrary } from "alcance-vue-library";
import App from './App.vue';

import './assets/css/main.css';
import router from './router';

const app = createApp(App)

// Defina o endereço onde ficam os assets de seu projeto.
const resourcesUrl = "./";
// Informe o valor do parâmetro resourcesUrl para o que o Alcance encontre os assets.
app.use(ComponentLibrary, {
    resourcesUrl: resourcesUrl
});

app.use(createPinia())
app.use(router)

app.mount('#app')
