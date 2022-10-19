
export class FactoryProduct {
    constructor( name = " " , info = " " ,  price = "0" ,caclObj, img)
    {
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

        if ( price === 0 ) { return "0" }

        const thousant = Math.floor(((price/1000)))
        const nothousant = Math.round( ((price/1000)%1)*1000 ) || "000" 

        if ( thousant > 0 ) {
            return thousant.toString() + " " + nothousant
        }  else {
            return nothousant
        }
       
    }
    
    checkQualityName() {

        this.error = ""
        const name =  this.totalProperty.name
       // console.log(this.totalProperty.name ,123 );
        if (  Number( this.removeSpace(name) ) ) {
            this.error = "Название товара не может сосотоять из одних цифор."
            return ""
        }
        
        if ( name.length < 20 ) {
            return name 
        } else {
            this.error = "Количество символов и пробелов в названии не должно привышать 20."
            return ""
        }
    }
    
    checkQualityPrice() {
        
        const price = Number(this.totalProperty.price)
        console.log(123);
        this.error = ""
        if ( !price &&  price !== 0 ) {
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
       
        if (  price >= 0  ) {
            return this.separateThousands(price)
        } else {
            this.error = "Введите положительное число!"
            return ""
        }
    }
    checkQualityInfo() {
         
        const info = this.totalProperty.info
       
        if ( info.length < 1000 ) {
            return info
        } else {
            this.error = "Количество символов и пробелов в описании не должно привышать 1000."
            return ""
        }
       
    
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