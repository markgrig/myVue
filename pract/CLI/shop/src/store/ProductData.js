
import { ref, set, onValue } from "firebase/database";
import { getDataBaseForLocal }  from "./.env.js"
export default class ProductionData {
    
    constructor() {
        
        this.database =  this.callNetlify() || getDataBaseForLocal() || false;
        this.productArray = []
        
        if ( this.database ) { this.listenNewProduct() }
    }
    writeProduct( product ) {

        if ( this.database ) {
            set(ref(this.database,'productList/' + Date.now()),  product )
        }

    }
    listenNewProduct() {

        onValue( ref( this.database , 'productList') , ( snapshot ) => {

            snapshot.forEach(element => {

                const keyName = element.key
                const data = element.val()
                this.productArray.push( { "key" : keyName, "data" : data })

            });

            console.log( this.productArray);
        })
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










