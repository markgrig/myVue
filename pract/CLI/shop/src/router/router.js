import {createRouter, createWebHistory } from "vue-router"
import Home from "@/page/Home"
import Questionary from "@/page/Questionary"
import About from "@/page/About"
import Instruction from "@/page/Instruction"
import Category from "@/page/Category"
import Product from "@/page/Product"


const pages = [
    {
        path: '/',
        name: "Home",
        component: Home,
        meta: {
            title: "Shop",
        }
    },
    {
        path: '/about',
        name: "About",
        component: About,
        meta: {
            title: "About",
        }
    },
    {
        path: '/questionary',
        name: "Questionary",
        component: Questionary,
        meta: {
            title: "Quest",
        }
    },
    {
        path: '/instruction',
        name: "Instruction",
        component: Instruction,
        meta: {
            title: "Guid",
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