import { createRouter,createWebHistory } from "vue-router"

import EmotionStorageMain from "@/components/EmotionStorageMain"
import EmotionSave from '@/components/emotions/save/EmotionSave'
import EmotionView from '@/components/emotions/view/EmotionView'

const routes = [
    { path: '/', name: 'main', component: EmotionStorageMain},
    { path: '/save', name: 'save', component: EmotionSave},
    { path: '/view', name: 'view', component: EmotionView},
]

const router = createRouter({
    mode: "history",
    history: createWebHistory(),
    linkActiveClass: "active",
    routes,
})

export default router