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