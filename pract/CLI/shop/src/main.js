import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router"
import { componentArray } from './components/reused/componentsArray'
import App from './App.vue'
import HomePage from "./page/HomePage"
import HomePage1 from "./page/HomePage1"
import HomePage2 from "./page/HomePage2"

const pages = [
    {
        path: '/',
        name: "home",
        component: HomePage,
    },
    {
        path: '/home1',
        name: "home1",
        component: HomePage1,
    },
    {
        path: "/home2",
        name: "home2",
        component: HomePage2,
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: pages,
})

const app = createApp(App)

componentArray.forEach( component => {
    app.component( component.name, component);
});

app.use(router)
app.mount('#app')
