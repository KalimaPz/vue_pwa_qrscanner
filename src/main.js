import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueQrcodeReader from "vue-qrcode-reader";
import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(VueQrcodeReader).mount('#app')
