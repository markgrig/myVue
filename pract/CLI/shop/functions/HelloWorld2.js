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
const databaseRef = ref(database)

function writeProductData( productName,  productPrice,  productInfo ,  productImg) {
  set(ref(database, 'productList/' + Date.now()), {
    name: productName,
    price: productPrice,
    info: productInfo,
    img: productImg,
  })
}

function getProductData( ) {
  
  get(child(databaseRef, `productList`)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return" No data available"
    }
  }).catch((error) => {
    return error
  });

  return productList
}

exports.handler = async function(event, context, callback) {

  const result = getProductData()
  
  return {
    statusCode: 200,
    body: JSON.stringify( {
      message: result
    })
  }
}