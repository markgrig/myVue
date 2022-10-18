import { FactoryProduct, FactoryVideoProduct, FactoryMusicInstrumentProduct } from "./Factory"


export const createProduct = (category = "" , dataProduct = "" ) => {

        if ( category.trim() === "music_instrument" )  {
            return new FactoryMusicInstrumentProduct(dataProduct )
        }

        if ( category.trim() === "video" ) {
            return new FactoryVideoProduct(dataProduct)
        }
        
        return new FactoryProduct(dataProduct)
    }
