
import { set, onValue } from "firebase/database"
import { ref as ref_database } from "firebase/database"
import { uploadBytes , getDownloadURL } from "firebase/storage"
import { ref as ref_storage } from "firebase/storage"
import { getDataBaseForLocal, getStorageForLocal }  from "./.env.js"
import { toRaw } from 'vue';

export default class ProductionData {
    #answerNetlify

    constructor() {
        
        this.#answerNetlify = this.callNetlify
        this.database =  this.#answerNetlify.database || getDataBaseForLocal() || false;
        this.storage = this.#answerNetlify.storage || getStorageForLocal() || false;
        this.product = {}

        if ( this.database ) { this.listenNewProduct() }   

    }
    writeProduct( product, category ) {
        console.log( Object.assign({}, this.database) );

        if ( this.database ) {
            set( ref_database(  toRaw( this.database) ,`productList/${category}/${Date.now()}`),  product )
        }

    }
    listenNewProduct() {

        onValue( ref_database( this.database , `productList/`) , ( snapshot ) => {

            snapshot.forEach(element => {

                const keyName = element.key
                const data = element.val()
                this.product[keyName] = data 

            });

            console.log( "product" , this.product );
        })
    }
    async uploadFile(file, category) {
        
        const firebaseUrl =  `productImage/${category}/${Date.now()}`

        await uploadBytes( ref_storage( toRaw( this.storage ), firebaseUrl ), file)
            .then(() => {
                console.log('Uploaded file!');
        });

        const imageURL =  await getDownloadURL(ref_storage( toRaw(this.storage), firebaseUrl))
            .then((url) => {
                return url
            })
            .catch((error) => {
                console.log(error);
            });
        
        return imageURL
    }
    
    callNetlify() {
        const url = "/.netlify/functions/getDataBase"
        const fetchRes = fetch(url)

        fetchRes
            .then( (response) => {

                if ( !response.ok ){ throw new Error("ошибка запроса") }
                return response.json()

            })
            .then( (res) => { console.log(res) })
            .catch( (errors) => { console.log(errors) })

    }
}










