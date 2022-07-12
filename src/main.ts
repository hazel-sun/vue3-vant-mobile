import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import pinia from './stores/index'
// import { Button, Loading, Empty } from 'vant'

const app = createApp(App)
app.use(router).use(pinia).mount('#app')
// app.use(Button).use(Loading).use(Empty)
