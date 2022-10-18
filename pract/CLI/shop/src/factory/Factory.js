
export class FactoryProduct {
    constructor( name , info, price, caclObj, img ) {
        this.totalProperty = {
            name: name, 
            info: info,
            price: price,
            caclObj: caclObj,
            img: img,
        }
        this.error =  ""
        this.success = {
            name: false, 
            info: false,
            price: false,
            caclObj: false,
            img: false,
        }
    }
    removeSpace(str) {
        if ( str  )  {
            return str.replace(" ",'')
        }
    }

    separateThousands(price) {

        let result = ""
        const thousant = Math.floor(((price/1000))).toString()
        const nothousant = Math.floor( ((price/1000)%1)*1000 )

        thousant > 0 ?  result  = thousant.toString() + " " + nothousant : result  = nothousant
       
        return  result
    }
    
    checkQualityName() {

        this.error = ""
        const name = this.totalProperty.name

        if (  Number( this.removeSpace(name) ) ) {
            this.error = "Название товара не может сосотоять из одних цифор."
            return ""
        }
       
        if ( name.length < 20 ) {
            return   this.totalProperty.name 
        } else {
            this.error = "Количество символов в названии не должно привышать 20."
            return ""
        }
    }
    
    checkQualityPrice() {
        
        const price = Number(this.totalProperty.price)
        this.error = ""

        if ( !price ) {
            this.error = "Цена должна быть числом"
            return ""
        }
        if ( price > 1000000000 ) {
            this.error = "Введите число меньше миллиарда. Побойтесь Бога!"
            return ""
        }
        if (  price > 1000000  ) {
            const billions = Math.round((price/100000))/10
            console.log( billions);
            return billions.toString() + " млн."
        }
       
        if (  price > 0  ) {
            return this.separateThousands(price)
        } else {
            this.error = "Введите положительное число!"
            return ""
        }
    }
    checkQualityInfo() {
        /*
        if (  this.totalProperty.info )  {
            const wordArray  = this.totalProperty.info.split(" ")
            const newWordArray = []
            console.log(wordArray);
            for (let i = 0; i < wordArray.length; i++) {
                   
                    console.log(wordArray[i].length );
                    let numberSpace = Math.ceil( wordArray[i].length /10) 
                    console.log(numberSpace );
                    
                        for (let j = 0; j < numberSpace; j++) {
                            console.log(1213);   
                            newWordArray[i+j + newWordArray.length -1 ] = wordArray[i].slice(0,9)
                            wordArray[i]   = wordArray[i].slice(9   )
                            console.log(newWordArray);
                            console.log( (i-j));
                        }
                    
                   
            }       
            
            const result =  newWordArray.join(" ")
       
    
return result

        } */

        return this.totalProperty.info

    }
}

export class FactoryVideoProduct extends  FactoryProduct {
    constructor( url ) {
        super()
        this.specificPropetry = {
            nameSpecificPropetry: "video",
            url: url
        }
    }
}

export class FactoryMusicInstrumentProduct extends  FactoryProduct {
    constructor( url ) {
        super()
        this.specificPropetry = {
            nameSpecificPropetry: "music_instrument",
            url: url
        }
    }
}