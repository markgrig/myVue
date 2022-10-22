// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEfBqICmwS3ng3fz3vWvKvhFCmQL-shYg",
  authDomain: "markshop-d68ea.firebaseapp.com",
  databaseURL: "https://markshop-d68ea-default-rtdb.firebaseio.com",
  projectId: "markshop-d68ea",
  storageBucket: "markshop-d68ea.appspot.com",
  messagingSenderId: "338620385281",
  appId: "1:338620385281:web:1b676faddf9906699bd800"
};

// Initialize Firebase
const appFire = initializeApp(firebaseConfig);
const db = getFirestore(appFire);

exports.handler = async function(event, context, callback) {
  return {
    statusCode: 200,
    body: JSON.stringify( {
      message: db
    })
  }
}