import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const handler = async () => {

  const firebaseConfig = {

    apiKey: process.env.API_KEY,
    authDomain:  process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATA_BASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    
  };
  
  const appFirebase = initializeApp(firebaseConfig);
  const database =  getDatabase(appFirebase);

  const records = []

  const dbRef = ref( database , 'productList')
    onValue( dbRef, ( snapshot ) => {
      snapshot.forEach(element => {
          const keyName = element.key
          const data = element.val()
          records.push( { "key" : keyName, "data" : data })
      });
      console.log(records );
      goOffline( database )
    })
    
    return {
      statusCode: 200,
        body: JSON.stringify( {
        message: records
      })
    }

}