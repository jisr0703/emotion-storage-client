import { createApp } from 'vue'
import { store } from '@/stores/store'
import App from './App.vue'
import router from './routes'

const appInstance = createApp(App)

appInstance.use(router)
appInstance.use(store)
appInstance.mount('#app')
