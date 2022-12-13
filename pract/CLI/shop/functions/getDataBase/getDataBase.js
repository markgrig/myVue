/*import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
*/
export const handler = async () => {
/*
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
  const storage = getStorage(appFirebase);*/

    return {
      statusCode: 200,
        body: JSON.stringify( {
        database: 123,
        storage: 123
      })
    }

}