export class Product {
    constructor( name , info, price, caclObj, img ) {
        this.name = name 
        this.info = info
        this.price = price
        this.caclObj = caclObj
        this.img = img
    }
}

export class VideoProduct extends Product {
    constructor( url ) {
        super()
        this.url = url
    }
}

export class MusicInstrumentProduct extends Product {
    constructor( url ) {
        super()
        this.url = url
    }
}