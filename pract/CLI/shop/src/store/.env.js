import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

export const getDataBaseForLocal = () => {

  const firebaseConfig = {

    apiKey: "AIzaSyDEfBqICmwS3ng3fz3vWvKvhFCmQL-shYg",
    authDomain: "markshop-d68ea.firebaseapp.com",
    databaseURL: "https://markshop-d68ea-default-rtdb.firebaseio.com",
    projectId: "markshop-d68ea",
    storageBucket: "markshop-d68ea.appspot.com",
    messagingSenderId: "338620385281",
    appId: "1:338620385281:web:1b676faddf9906699bd800"
    
};

  const appFirebase = initializeApp(firebaseConfig);  
  return getDatabase(appFirebase);

}

export const getStorageForLocal = () => {

  const firebaseConfig = {

    apiKey: "AIzaSyDEfBqICmwS3ng3fz3vWvKvhFCmQL-shYg",
    authDomain: "markshop-d68ea.firebaseapp.com",
    databaseURL: "https://markshop-d68ea-default-rtdb.firebaseio.com",
    projectId: "markshop-d68ea",
    storageBucket: "markshop-d68ea.appspot.com",
    messagingSenderId: "338620385281",
    appId: "1:338620385281:web:1b676faddf9906699bd800"
    
};

  const appFirebase = initializeApp(firebaseConfig);  
  return getStorage(appFirebase);

}



