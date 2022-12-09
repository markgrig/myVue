import { createApp } from 'vue'
import { componentArray } from './components/componentsArray'
import productData from "@/mixins/ProductDataMixin"
import App from './App.vue'
import { router } from './router/router'
import { store } from './vuex/vuex'


const createIcons = (iconsUrl) => {
    const link = document.createElement("link")
    link.rel = "shortcut icon"
    link.href = iconsUrl
    link.type = "image/png"
    document.head.append(link)
}
const createchangerDocumentTitle = (router) => {
    router.beforeEach((el) => {
        if (el.meta.title) {
            document.title = el.meta.title;
        }
        else {
            document.title = "Shop"
        }

    })
}


createIcons("https://cdn-icons-png.flaticon.com/512/478/478045.png")
createchangerDocumentTitle(router)

const app = createApp(App)

componentArray.forEach( component => {
    app.component( component.name, component);
    console.log(component);
});

app.use(router)
app.use(store)
app.mixin(productData)
app.mount('#app')













