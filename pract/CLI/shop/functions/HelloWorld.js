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


exports.handler = async function(event, context, callback) {

  const body = JSON.parse(event.body).payload
  const starCountRef = ref(database , 'productList/ ')
  const res = ""

  onValue(starCountRef, (snapshot) => {
    res =  snapshot.val() 
    body
  }, function(error) {
    if (error) {
      console.log('failed')
      return callback(null, {
        statusCode: error.status,
        body: JSON.stringify ({
          message:  error
        })
      })
    }
    console.log('saved')
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify ({
        message:  res
      })
    })
  })
}