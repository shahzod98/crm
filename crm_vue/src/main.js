import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// axios.defaults.headers.common['Content-Type'] = 'application/json'
// axios.defaults.headers.common['Vary'] = 'Accept'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8000/'

createApp(App).use(store).use(router, axios).mount('#app')
