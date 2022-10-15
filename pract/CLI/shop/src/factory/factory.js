import { Product, VideoProduct, MusicInstrumentProduct } from "./classProduct"


export const createProduct = (category , dataProduct = "" ) => {
        if ( category.trim() === "music_instrument" )  {
            return createMusicInstrumentProduct(dataProduct )
        }
        if ( category.trim() === "video" ) {
            return createVideoProduct(dataProduct)
        }
        
        return createOrdinaryProduct(dataProduct)
    }


const createOrdinaryProduct = (dataProduct) => {
    return new Product(...dataProduct)
}

const createMusicInstrumentProduct = (dataProduct) => {
    return new MusicInstrumentProduct(...dataProduct )
} 

const createVideoProduct = (dataProduct) => {
    return new VideoProduct(...dataProduct)
} 