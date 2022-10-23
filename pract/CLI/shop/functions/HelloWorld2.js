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

const db = getDatabase();
const starCountRef = ref(db,  `productList/1666522904303` );
onValue(starCountRef, (snapshot) => {
  console.log( snapshot.val() )
  
});

function getProductData( ) {
  
  const productList = {}

  get(child(databaseRef, `productList/1666522904303`)).then((snapshot) => {
    if (snapshot.exists()) {
      productList.name = snapshot.val().name;
    } else {
      productList.name = "No data available"
    }
  }).catch((error) => {
    productList.name = error
  });

  return productList
}

exports.handler = function(event, context, callback) {
  return {
    statusCode: 200,
    body: JSON.stringify( {
      message: "Hello World!"
    })
  }
}