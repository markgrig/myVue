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

async function readProductData() {
  const starCountRef = ref(database , 'productList/ ')

  onValue(starCountRef, (snapshot) => {
    console.log( snapshot.val() )
  });
}



exports.handler = function(event, context, callback) {
  return {
    statusCode: 200,
    body: JSON.stringify( {
      message:   starCountRef
    })
  }
}