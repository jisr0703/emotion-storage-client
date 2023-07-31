import { createRouter,createWebHistory } from "vue-router"

import EmotionStorageMain from "@/components/EmotionStorageMain"
import EmotionSave from '@/components/emotions/save/EmotionSave'
import EmotionView from '@/components/emotions/view/EmotionView'

const routes = [
    { path: '/:pathMatch(.*)*', name: '*',component: EmotionStorageMain},
    { path: '/kxoxxy', name: 'main', component: EmotionStorageMain},
    { path: '/kxoxxy/emt-all', name: 'view', component: EmotionView},
    { path: '/kxoxxy/emt-save', name: 'save', component: EmotionSave},
]

const router = createRouter({
    mode: "history",
    history: createWebHistory(),
    linkActiveClass: "active",
    routes,
})

export default router