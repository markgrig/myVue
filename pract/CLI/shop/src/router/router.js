import {createRouter, createWebHistory } from "vue-router"
import Welcome from "@/page/Welcome"
import Category from "@/page/Category"
import Product from "@/page/Product"

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
        path: '/category/',
        name: "allcategory",
        component: Category,
        meta: {
            title: 'Buy',
        }
    },
    {
        path: '/category/:id',
        name: "category",
        component: Category,
        meta: {
            title: 'Buy',
        }
    },
    {
        path: '/category/:id/product/:idProduct',
        name: "product",
        component: Product,
        meta: {
            title: 'Buy',
        }
    },
    
]

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: pages,
})