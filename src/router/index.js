import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/Home.vue'
import BirdsDetail from '@/views/BirdsDetail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "HomePage",
            component: HomePage
        },
        {
            path: '/detail:id',
            name: "BirdsDetail",
            component: BirdsDetail
        }
    ]
})

export default router;