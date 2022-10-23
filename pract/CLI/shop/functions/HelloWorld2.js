// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue , child} from "firebase/database";
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

function writeProductData( database , productName,  productPrice,  productInfo ,  productImg) {
  set(ref(database, 'product/' + new Date()), {
    name: productName,
    price: productPrice,
    info: productInfo,
    img: productImg,
  })
}

writeProductData( database, "молоко" , 100 , "Своё! Свежее!", "123" )

get(child( ref(database), `users`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

exports.handler = async function(event, context, callback) {
  return {
    statusCode: 200,
    body: JSON.stringify( {
      message: child(ref(db), 'productList')
    })
  }
}