export class FactoryProduct {
    constructor( name , info, price, caclObj, img ) {
        this.totalProperty = {
            name: name, 
            info: info,
            price: price,
            caclObj: caclObj,
            img: img,
        }
    }
    checkQualityName() {
        if ( this.totalProperty.name.length > 20 ) {
            return { 
                succses: false, 
                value: "наименование продукта не должно превышать 20 символов!"
            }
        }
        
        return {
                success: true,
                value:  this.totalProperty.name
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