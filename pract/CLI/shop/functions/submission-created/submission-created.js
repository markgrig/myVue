import { initializeApp } from 'firebase/app';
const config = {
  apiKey: "AIzaSyBag7HEc8PGsjWPT30h1uLVAfeZMOw8-4Q",
  authDomain: "markshop-fb0bd.firebaseapp.com",
  projectId: "markshop-fb0bd",
  storageBucket: "markshop-fb0bd.appspot.com",
  messagingSenderId: "550872556816",
  appId: "1:550872556816:web:11e38901397a791244b195",
  measurementId: "G-S9J6214TZ4"
}

//firebase.initializeApp(config);
//const db = firebase.database();

exports.handler = function(event, context, callback) {
  return {
    statusCode: 200,
    body: JSON.stringify( {
      message: "Hello World!"
    })
  }
}