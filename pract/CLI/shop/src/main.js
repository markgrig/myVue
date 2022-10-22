import { createApp } from 'vue'
import { componentArray } from './components/reused/componentsArray'
import App from './App.vue'
import { router } from './router/router'

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

const url = "https://main--markshop.netlify.app/.netlify/functions/submission-created"
const res = fetch(url, {
    method: 'GET'
})

res
.then( (response) => {
    if ( !response.ok ){
        throw new Error("ошибка запроса")
    }
    return response.json()
})
.then( (res) => {
    console.log(res)

})
.catch( (errors) => {
    console.log(errors)
})

const app = createApp(App)

componentArray.forEach( component => {
    app.component( component.name, component);
    console.log(component);
});

app.use(router)
app.mount('#app')













