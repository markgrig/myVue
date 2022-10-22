var firebase = require("firebase");
const config = {
  apiKey: "AIzaSyDEfBqICmwS3ng3fz3vWvKvhFCmQL-shYg",
  authDomain: "markshop-d68ea.firebaseapp.com",
  databaseURL: "https://markshop-d68ea-default-rtdb.firebaseio.com",
  projectId: "markshop-d68ea",
  storageBucket: "markshop-d68ea.appspot.com",
  messagingSenderId: "338620385281",
  appId: "1:338620385281:web:1b676faddf9906699bd800"
}

firebase.initializeApp(config);
const db = firebase.database();

exports.handler = async function(event, context, callback) {
  return {
    statusCode: 200,
    body: JSON.stringify( db )
  }
}