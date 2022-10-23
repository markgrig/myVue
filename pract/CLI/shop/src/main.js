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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue , child , get} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain:  process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATA_BASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const database =  getDatabase(appFirebase);

function writeProductData( productName,  productPrice,  productInfo ,  productImg) {
  set(ref(database, 'product/' + new Date()), {
    name: productName,
    price: productPrice,
    info: productInfo,
    img: productImg,
  })
}

writeProductData("молоко" , 100 , "Своё! Свежее!", "123" )

get(child( ref(database), `productList`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
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













