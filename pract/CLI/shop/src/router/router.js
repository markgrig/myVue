import {createRouter, createWebHistory } from "vue-router"
import Welcome from "@/page/Welcome"
import Category from "@/page/Category"

const pages = [
    {
        path: '/',
        name: "Welcome",
        component: Welcome,
        meta: {
            title: "Shop",
        }
    },
    {
        path: '/category/:id',
        name: "buy",
        component: Category,
        meta: {
            title: 'Buy',
        }
    },  
    {
        path: '/category/',
        name: "category",
        component: Category,
        meta: {
            title: 'Category',
        }
    },  
    
    
]

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: pages,
})