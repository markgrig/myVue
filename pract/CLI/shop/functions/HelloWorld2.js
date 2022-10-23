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



exports.handler = async function(event, context, callback) {
  const body = JSON.parse(event.body).payload
  var newPostKey = db.ref().child(`submissions`).push().key;
  db.ref(`submissions/${newPostKey}`).set({
    body
  }, function(error) {
    if (error) {
      console.log('failed')
      return callback(null, {
        statusCode: error.status,
        body: JSON.stringify({
          message: error.message,
          error: error,
        })
      })
    }
    console.log('saved')
    return callback(null, {
      statusCode: 200,
      body: "Beep, boop, you just got serverless."
    })
  })
}