import { createApp } from 'vue'
import App from './App.vue'
import element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import router from './router/index'

createApp(App).use(router).use(element3).mount('#app')

