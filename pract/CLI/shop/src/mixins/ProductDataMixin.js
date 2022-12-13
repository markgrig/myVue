import { ref as ref_database, query, limitToLast, set , onValue, off , child, get //limitToFirst 
 } from "firebase/database"
import { ref as ref_storage, uploadBytes , getDownloadURL } from "firebase/storage"
import { toRaw } from 'vue';
//import { getDataBaseForLocal, getStorageForLocal }  from "./.env.js"

export default {
    async created() {
       const answerNetlify = await this.callNetlify()   
       return { answerNetlify }    
    }, 
    mounted() {
        this.observePage()
    }, 
    data() {
        return  {
            productsByСategory: {
                "video_courses" : {},
                "music_instrument" : {},
                "concert_tickets" : {   },
                "clothes": {}
            }, 
            isModile: Boolean( ( window.innerWidth < 850)) ,
            database: this.answerNetlify.database , // getDataBaseForLocal(),
            storage:   this.answerNetlify.storage , // getStorageForLocal(),
            productLimit: {
                "video_courses" : 1,
                "concert_tickets" : 2,
                "music_instrument" : 2,
                "clothes": 3,
                "mobile": 3
            },
            productIterator: {
                "video_courses" : 1,
                "concert_tickets" : 2,
                "music_instrument" : 2,
                "clothes": 3
            },
            listnerDataBase: {},
            isExitGet: false,
            isFind: true
        }
    },
    computed: {
        nameCategory() {
            return this.$route.params.id
          },
        idProduct() {
            return this.$route.params.idProduct
        },
        isError() {
          switch (true) {
            case this.isNotCategory:
              return true
            case this.isNotProduct:
              return true
            default:
              return false
          }
        },
        textError() {
          switch (true) {
            case this.isNotCategory:
                if ( this .nameCategory ) {
                    return `В url сайта на месте, в ктором должна указываться категория вы указали: ${this.nameCategory }. К сожалению, такой категории товаров в нашем магазине нет.`
                }
                return `В url сайта на месте, в ктором должна указываться категория вы ничего не указали.
                        Выбирете категорию на верхней панели или укажите существующую категорию.`
            case (this.isNotProduct && Boolean(this.idProduct) && this.isExitGet) :
                return `В категории ${this.nameCategory}  нет товара с id = ${this.idProduct}`
            case (this.isNotProduct && Boolean(this.idProduct) && !this.isExitGet) :
                return `Ищу товар`
            case this.isFind:
                return `Загрузка товаров ${this.nameCategory}`
            case this.isNotProduct:
                return `В категории ${this.nameCategory}  пока нет товаров. Будьте первым!`
            default:
                return ""
          }
        },
        isNotCategory() {
  
          if ( !this.productsByСategory[this.nameCategory] ) {
            return true
          } else {
            return false
          }
  
        },
        isNotProduct() {
          if ( Object.keys( this.productsByСategory[this.nameCategory]).length === 0 ) {
            return true
          }
          return false
        },
       
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
            
            this.isFind = true
            
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
                            
                            this.productsByСategory[el][keyName] = data
                             
                            });

                            this.isModile  ? this.productLimit["mobile"] += 1 : this.productLimit[el] += this.productIterator[el]
                            this.isFind = false
            })
                    } 
                    if ( el !== this.nameCategory ) {

                        const productListRef = query( ref_database( toRaw(this.database), `productList/${el}`) );
                        off(productListRef);

                    }
                }
            )

        
        },
        getNewProduct(productId) {
            
            const productRef = ref_database( toRaw(this.database))

            get( child( productRef , `productList/${this.nameCategory}/${productId}`) )
                .then((snapshot) => {

                    if (snapshot.exists()) {

                        const data = snapshot.val();    
                        this.productsByСategory[this.nameCategory][productId] = data

                    } 

                    this.isExitGet = true

                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(()=>{
                    this.isExitGet = true
                })

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

            const url = "/.netlify/functions/getDataBase/"

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

                if (entaries[0].isIntersecting ) {
                    this.listenNewProduct()
                }
            } 
              
            const observer = new IntersectionObserver(callback, options);

            if ( this.$refs?.observer )  { observer.observe(this.$refs.observer) }    
            
        }
    },

}










