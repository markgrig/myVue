var firebase = require("firebase");
const config = {
  apiKey: "AIzaSyBag7HEc8PGsjWPT30h1uLVAfeZMOw8-4Q",
  authDomain: "markshop-fb0bd.firebaseapp.com",
  projectId: "markshop-fb0bd",
  storageBucket: "markshop-fb0bd.appspot.com",
  messagingSenderId: "550872556816",
  appId: "1:550872556816:web:11e38901397a791244b195",
  measurementId: "G-S9J6214TZ4"
}

firebase.initializeApp(config);
const db = firebase.database();

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