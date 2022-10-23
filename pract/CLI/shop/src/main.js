import { createApp } from 'vue'
import { componentArray } from './components/reused/componentsArray'
import App from './App.vue'
import { router } from './router/router'

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue , child , get} from "firebase/database";

const firebaseConfig = {

  apiKey: process.env.API_KEY,
  authDomain:  process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATA_BASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  
};

const appFirebase = initializeApp(firebaseConfig);
const database =  getDatabase(appFirebase);
const databaseRef = ref(database)

async function writeProductData( productName,  productPrice,  productInfo ,  productImg) {

  set(ref(database,'productList/ ' + Date.now()), {

    name: productName,
    price: productPrice,
    info: productInfo,
    img: productImg,

  })

}

const starCountRef = ref(database , 'productList/ ')

onValue(starCountRef, (snapshot) => {
  console.log( snapshot.val() )
});



exports.handler = function(event, context, callback) {
  return {
    statusCode: 200,
    body: JSON.stringify( {
      message:  ref(database , 'productList/ ')
    })
  }
}

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

const url = "/.netlify/functions/HelloWorld2"
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













