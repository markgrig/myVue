import { createApp } from 'vue'
import { componentArray } from './components/reused/componentsArray'
import App from './App.vue'
import { router } from './router/router'




import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue , child , get} from "firebase/database";
import fetch from "node-fetch";

const firebaseConfig = {

    apiKey: "AIzaSyDEfBqICmwS3ng3fz3vWvKvhFCmQL-shYg",
    authDomain: "markshop-d68ea.firebaseapp.com",
    databaseURL: "https://markshop-d68ea-default-rtdb.firebaseio.com",
    projectId: "markshop-d68ea",
    storageBucket: "markshop-d68ea.appspot.com",
    messagingSenderId: "338620385281",
    appId: "1:338620385281:web:1b676faddf9906699bd800"
  
};

const appFirebase = initializeApp(firebaseConfig);
const database =  getDatabase(appFirebase);




   get(child( ref(database), `productList/ `)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(   snapshot.val() )
    } else {
        console.log("not data");
    }
  }).catch((error) => {
        console.log(error);
  });
  




  const dbRef = ref( database , 'productList')
    onValue( dbRef, ( snapshot ) => {
      const records = []
      snapshot.forEach(element => {
            const keyName = element.key
            const data = element.val()
            records.push( { "key" : keyName, "data" : data })
      });
      console.log(records );
    })







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

const url = "/.netlify/functions/HelloWorld"
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













