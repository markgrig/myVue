import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue , child , get} from "firebase/database";
import fetch from "node-fetch";

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
/*

   get(child( ref(database), `productList/ `)).then((snapshot) => {
    if (snapshot.exists()) {
      return {
          statusCode: 200,
          body: JSON.stringify( {
          message:   snapshot.val()
        })
      }
    } else {
      return {
          statusCode: 200,
          body: JSON.stringify( {
          message:   "No data available"
        })
      }
    }
  }).catch((error) => {
    return {
      statusCode: 200,
        body: JSON.stringify( {
        message:   error
      })
    }
  });
  */

const starCountRef = ref(database)

export const handler = () => {

  const dbRef = ref( database , 'productList')
    onValue( dbRef, ( snapshot ) => {
      let records = []
      snapshot.forEach(element => {
          let keyName = element.key
          let data = element.val()
          records.push( { "key" : keyName, "data" : data })
      });
      return {
        statusCode: 200,
          body: JSON.stringify( {
          message:   records
        })
      }
    })

}