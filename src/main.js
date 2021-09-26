import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/index'
// import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/index.css'

// Vue.prototype.$bus=createApp()

createApp(App).use(router).use(Vant).mount('#app')

// new Vue({
//     render:h=>h(app),
//     router
// }).$mount('#app')
