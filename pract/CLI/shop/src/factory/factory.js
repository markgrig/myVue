import { Product, VideoProduct, MusicInstrumentProduct } from "./classProduct"

export const createProduct = ( category , dataProduct = "" ) => {
    if ( category === "musicInstr" )  {
        return new MusicInstrumentProduct(...dataProduct )
    }

    if ( category === "video" ) {
        return new VideoProduct(...dataProduct)
    }

    return new Product(...dataProduct)
}