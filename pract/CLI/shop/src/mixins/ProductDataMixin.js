import { ref as ref_database, query, limitToLast, set , onValue, off //limitToFirst 
 } from "firebase/database"
import { ref as ref_storage, uploadBytes , getDownloadURL } from "firebase/storage"
import { toRaw } from 'vue';
import { getDataBaseForLocal, getStorageForLocal }  from "./.env.js"

export default {
    created() {
       // this.answerNetlify = await this.callNetlify()       
    }, 
    mounted() {
        this.observePage()
    }, 
    data() {
        return  {
            answerNetlify: "",
            product: {
                "video" : {},
                "music_instrument" : {},
                "clothes": {}
            }, 
            isModile: Boolean( ( window.innerWidth < 850)) ,
            database: getDataBaseForLocal(),
            storage:  getStorageForLocal(),
            productLimit: {
                "video" : 1,
                "music_instrument" : 2,
                "clothes": 3,
                "mobile": 3
            },
            productIterator: {
                "video" : 1,
                "music_instrument" : 2,
                "clothes": 3
            },
            listnerDataBase: {}
        }
    },
    methods: {
        writeProduct( product, category ) {

            set(    ref_database(  
                            toRaw( this.database) ,
                            `productList/${category}/${Date.now()}`
                        ),  
                    product 
                );
    
        },
        listenNewProduct() {

            Object.keys( this.productLimit ).forEach(
                ( el ) => {
                    if ( el === this.nameCategory ) {

                        let productLimit 
                        this.isModile  ? productLimit = this.productLimit["mobile"] : productLimit = this.productLimit[el]  

                        const productListRef = query( ref_database( toRaw(this.database), `productList/${el}` ), 
                                                limitToLast(productLimit),
                                            );

                        onValue( productListRef , ( snapshot ) => {
    
                            snapshot.forEach(element => {
    
                            const keyName = element.key
                            const data = element.val()
                            this.product[el][keyName] = data
            
                        });

                        this.isModile  ? this.productLimit["mobile"] += 1 : this.productLimit[el] += this.productIterator[el]

            })
                    } 
                    if ( el !== this.nameCategory ) {

                        const productListRef = query( ref_database( toRaw(this.database), `productList/${el}`) );
                        off(productListRef);

                    }
                }
            )

        
        },
        async uploadFile(file, property, category) {

            const firebaseUrl =  `${property}/${category}/${Date.now()}`
    
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

        },
        observePage() {

            const options = {
                rootMargin: '0px',
                threshold: 1.0
            }
            
            const callback = ( entaries ) => {
                console.log(entaries);
                if (entaries[0].isIntersecting ) {
                    this.listenNewProduct()
                }
            } 
              
            const observer = new IntersectionObserver(callback, options);

            if ( this.$refs?.observer )  { observer.observe(this.$refs.observer) }    
            
        }
    },

}










