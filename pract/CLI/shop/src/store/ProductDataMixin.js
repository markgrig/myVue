
import { set , onValue } from "firebase/database"
import { ref as ref_database } from "firebase/database"
import { uploadBytes , getDownloadURL } from "firebase/storage"
import { ref as ref_storage } from "firebase/storage"
import { toRaw } from 'vue';
import { getDataBaseForLocal, getStorageForLocal }  from "./.env.js"

export default {
    async created() {
        this.answerNetlify = await this.callNetlify()
        this.listenNewProduct()

    }, 
    data() {
        return  {
            answerNetlify: "",
            product: {} 
        }
    },
    methods: {
        writeProduct( product, category ) {

            const database =  getDataBaseForLocal()

            if ( database ) {
                set( ref_database(  toRaw( database) ,`productList/${category}/${Date.now()}`),  product )
            }
    
        },
        listenNewProduct() {

            const database =  getDataBaseForLocal()
            
            onValue( ref_database( database , `productList/`) , ( snapshot ) => {
    
                snapshot.forEach(element => {
    
                    const keyName = element.key
                    const data = element.val()
                    this.product[keyName] = data 
    
                });
    
                console.log( "product" , this.product );
            })
        },
        async uploadFile(file, category) {

            const storage =  getStorageForLocal()
            const firebaseUrl =  `productImage/${category}/${Date.now()}`
    
            await uploadBytes( ref_storage( toRaw( storage ), firebaseUrl ), file)
                .then(() => {
                    console.log('Uploaded file!');
            });
    
            const imageURL =  await getDownloadURL(ref_storage( toRaw(storage), firebaseUrl))
                .then((url) => {
                    return url
                })
                .catch((error) => {
                    console.log(error);
                });
            
            return imageURL
        },
        
        async callNetlify() {

            const url = "/.netlify/functions/getDataBase"

            try {
                const response= await fetch(url) //если вызов функции асинхронный идёт ожидание

                if (!response.ok) {
                    throw new Error(`ошибка в url`)
                }
                
                return await response.json()
    
            } catch(errors) {
                console.log(errors)
            }
            finally{
                console.log("finaly");
            }

        }
    },

}










