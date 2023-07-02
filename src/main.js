import { createApp } from 'vue'
import { store } from '@/stores/store'
import App from './App.vue'
import router from './routes'
import mock from '@/mock-apis/mock-api'
import config from '@/apis/endPoint'

const appInstance = createApp(App)

if (process.env.VUE_APP_API_URL === config.localUrl){
    appInstance.use(mock)
    console.log("here is " + process.env.VUE_APP_API_URL)
}

appInstance.use(router)
appInstance.use(store)
appInstance.mount('#app')
