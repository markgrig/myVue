import { FactoryProduct, FactoryMediaProduct } from "./Factory"


export const createProduct = (nameCard = "" ) => {

        const key = nameCard.trim()

        switch (key) {
            case  "videoCard":
                return new FactoryMediaProduct("video" )
            
            case  "audioCard":
                    return new FactoryMediaProduct("audio" )
        
            default:
                return new FactoryProduct()  // "ordinaryCard"
        }
      
        
        
    }
