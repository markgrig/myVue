import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const handler = () => {

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

    return {
      statusCode: 200,
        body: JSON.stringify( {
        message: "HelloWorld!"
      })
    }

}