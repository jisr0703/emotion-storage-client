import { createApp } from 'vue'
import { store } from '@/stores/store'
import App from './App.vue'
import router from './routes'
import mock from '@/mock-apis/mock-api'

const appInstance = createApp(App)

if (process.env.NODE_ENV === 'test') {
    appInstance.use(mock)
    console.log("here is test environment")
} else {
    console.log("here is api server")
  }

appInstance.use(router)
appInstance.use(store)
appInstance.mount('#app')
