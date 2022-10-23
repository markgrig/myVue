// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


var firebase = require("firebase");

const config = {
  apiKey: process.env.API_KEY,
  authDomain:  process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATA_BASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

firebase.initializeApp(config);
const db = firebase.database();

exports.handler = function(event, context, callback) {
  const body = JSON.parse(event.body).payload
  var productElement = db.ref().child(`productLst`).push().key;
  db.ref(`productLst/${productElement}`).set({
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