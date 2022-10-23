import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const handler = async () => {

  ;

    return {
      statusCode: 200,
        body: JSON.stringify( {
        message: "HelloWorld!"
      })
    }

}