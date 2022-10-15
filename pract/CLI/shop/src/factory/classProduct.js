export class Product {
    constructor( name , info, price, caclObj, img ) {
        this.totalProperty = {
            name: name, 
            info: info,
            price: price,
            caclObj: caclObj,
            img: img,
        }
    }
}

export class VideoProduct extends Product {
    constructor( url ) {
        super()
        this.specificPropetry = {
            nameSpecificPropetry: "video",
            url: url
        }
    }
}

export class MusicInstrumentProduct extends Product {
    constructor( url ) {
        super()
        this.specificPropetry = {
            nameSpecificPropetry: "music_instrument",
            url: url
        }
    }
}