<template>
 
    <div>
        <div 
            :class = "classList['background-info']"
            :style = 'styleProductPictureBorder'>
            
            <h3 class = "product-info-topic"> Описание: </h3>
            <div :class = "classList['product-info']"> {{ infoUsersProduct }}
                
                <ErrorPlacholder  
                    class = "error-info" 
                        v-if = "!isInfoSuccess  && valueError !== ''"
                        :textPlaceholder = "valueError"> 
                </ErrorPlacholder>       
    
            </div>  
    
            
        </div>
    
     
    </div>
   
    
</template>

<script>
import { inject } from 'vue';

export default {
    name: "InfoView",
    props: {
        srcImageUsersProduct: {
            type: String,
            default:  "https://www.thinkwithgoogle.com/_qs/static/img/icons/data-points/consumer_goods.svg"
        },
        aspectRatioImage: String,
        isCategoryList: Boolean,
        infoUsersProduct: String,
        isInfoSuccess: Boolean,
        valueError: String,
        usersStyle: Object,
        isShowInfo: Boolean,
        typeCard: String,
        isPage: Boolean,
    },
    setup(props) {

        const isCreatProduct = !props.isCategoryList

        if ( isCreatProduct ) {

            const imageSettings = inject("imageSettings")
            return { imageSettings }
        
        } else {

            const imageSettings = {}
            return { imageSettings }

        }


    },
    computed: {
        classList() {

            if  ( this.isPage ) {
                return { 
                    "background-info": `background-info-page`,
                    "product-info": `product-info` 
                } 
            }

            return { "background-info": `background-info error back-${this.typeCard}`,
                        "product-info": `product-info info-${this.typeCard}` 
                
            }

        },
        styleProductPicture() {

            if ( !this.imageSettings?.isNewImage === true ) {
                return { ...this.usersStyle,
                        "aspect-ratio": `${this.aspectRatioImage}`
                    } 
            }

            return {
                    'background': `url(${this.srcImageUsersProduct}) 
                    no-repeat
                    50% 50% / 100% auto` ,
                    "aspect-ratio": `${this.aspectRatioImage}`,  
                }

            },
        
        styleProductPictureBorder() {

            if ( this.styleProductPicture.background && !this.isPage && (this.typeCard === "longCard")) {
                return {
                ...this.styleProductPicture,
                'background': this.styleProductPicture.background.replace( `url(${this.srcImageUsersProduct})`,  ""),
                
                }
            }
            return {}
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.background-info-page {
    box-sizing: border-box;
    position: static;

    box-sizing: border-box;
    height: min-content;
    max-height: 300px;

    margin:  0; 
    padding:  2% 4%;

    border-radius: 16px;
    background-color: rgba(192, 192, 192, 0.163);
    border: solid 2px   black;
    word-break: break-word;
}


.product-info{
    
    height: fit-content;
   
    margin: 0  -7% 0  0% ;
    padding: 2% 5% 2% 0%;
    

    text-align: justify ;
    text-indent: 10px;

    overflow: auto;
    color: black;
 
    text-indent: 100px; 
    font-size: 140%;
}

.error{
    position: relative;
    width: 100%;
}
.background-info{
    position: absolute;
    box-sizing: border-box;
    height: min-content;

    margin:  0; 
    padding:  1% 4%;
    
    border-radius: 5px;
    word-break: break-word;
    background-color: rgba(192, 192, 192, 0.163);
    border: solid 1px   black;

}

.back-videoCard {
    right: 0%;
    left: 5%;
    top: 20%;
    width: 90%;
}

.back-audioCard {
    right: 5%;
    top: 25%;
    width: 50%;
    min-height: 30%;
}

.back-longCard {
    opacity: 1;

    right: 10%;
    top: 20%;

    aspect-ratio: 80 / 110;
    width: 80%;

    backface-visibility: hidden;
    transition: 1s;
    transform: rotateY(180deg);
}
.back-longCard  .error-info {
    opacity: 0;
}

/* это часть неявно связана с product-card-longCard в ProductCard */
.product-card-longCard:hover .back-longCard {
    transform: rotateY(360deg);
}

.product-card-longCard:hover .error-info {
    opacity: 1;
}



.product-info{
    
    height: fit-content;
   
    margin: 0  -7% 0  0% ;
    padding: 2% 5% 2% 0%;
    

    text-align: justify ;
    overflow: auto;
    color: black;
 
    text-indent: 10%; 
    font-size: 140%;
}

.info-videoCard{
    
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;

    font-size: 130%;
    padding: 1% 5% 3% 0%;

    max-height: 1ch;
}

.info-audioCard{
    aspect-ratio: 7/3;
}

.info-longCard{
    max-height: 27ch;
}

.product-info-topic {

    height: 24px;

    text-align: center;

    color: rgb(246, 234, 234);
    text-indent: 0px;
    z-index: 100;
    background-color:   rgb(158, 49, 49);
    border-radius: 15px 15px 0 0;
    
    border-bottom: 0;
    font-size: 150%;
}

.error-info {
    position: absolute;
    
    
    bottom: -18%;
    left:  20%;
    
    padding-left: 30px;

    height: max-content;
    width: fit-content;

    border-radius: 5px 30px 30px 30px;
}


* {
  scrollbar-width: thin;
  scrollbar-color:  rgba(255, 0, 0, 0.605) rgba(234, 194, 114, 0.3);
}

*::-webkit-scrollbar {  
  width: 1.2vw;
}

*::-webkit-scrollbar-track {
  background: rgba(234, 194, 114, 0.3);
  padding: 10px;
  border-radius: 0.2vw;
  border: solid 1px black;
  box-shadow: 0 0  10px 1px white;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(255, 0, 0, 0.605);
  border-radius: 0.4vw;
  border: 3px solid hwb(0 0% 100% / 0.844);
  box-shadow: none;

}


@media (max-width: 700px){

    .info-video{
    
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;

    font-size: 130%;
    padding: 0% 5% 0% 0%;

    }
    

    .product-info{
        height: min-content;
        max-height: 90px;
        font-size: 12px;
    }

    .product-info-topic{
        font-size: 14px;
        height: 14px;
        padding: 2px;
    }

 

    *::-webkit-scrollbar {  
        width: 1.3vh;
    }

    *::-webkit-scrollbar-track {
       border: solid 1px black;    
    }

    *::-webkit-scrollbar-thumb {
        border: 2px solid hwb(0 0% 100% / 0.844);
    }
}
</style>
