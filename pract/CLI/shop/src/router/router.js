import HomePage from "@/page/HomePage"
import HomePage1 from "@/page/HomePage1"
import HomePage2 from "@/page/HomePage2"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/home1',
        component: HomePage1,
    },
    {
        path: "/home2",
        component: HomePage2,
    } 
     
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router