<template>
    
<div :class = "classList['card-img']">
    {{ isShowError }}
    <div 
        :class = "classList['product-img']"  
        :style = 'styleProductPicture'
        alt="">
                
        <ErrorPlacholder 
            class="error-img" 
            v-if = "!isImageSuccess && valueError !== ''"
                :textPlaceholder = "valueError" > 
        </ErrorPlacholder>
        
        <BlueButton
            v-if ="typeCard === 'videoCard'&& !isPage"
                class="video-button"
                textButton = "▶"
                @click="userClickImg">
        </BlueButton>


    </div>
</div>
       
    

</template>

<script>
import { inject } from 'vue';

export default {
    name: "ImageView",
    emits: ['userClickImg'],
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
    props: {
        srcImageUsersProduct: {
            type: String,
            default:  "https://www.thinkwithgoogle.com/_qs/static/img/icons/data-points/consumer_goods.svg"
        },
        isCategoryList: Boolean,
        isImageSuccess: Boolean,
        valueError: String,
        usersStyle: Object,
        isShowImage: Boolean,
        aspectRatioImage: String,
        typeCard: String,
        isPage: Boolean,
    },
    computed: {
        classList() {
            if  ( this.isPage ) { 
                return { 
                    "product-img": `image-page`,
                    "card-img": `card-page add-setting-card-page-${this.typeCard}`
                }
            }
                
            return { "product-img": `product-img image-${this.typeCard}`}    
               
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
    },
    methods: {
        userClickImg() {
            this.$emit('userClickImg');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card-page {
    position: relative;
    width: 80%;
    left: 5%;
}

.image-page {
    box-sizing: border-box;
    position: static;
    border-radius: 5px;
    border: solid 2px black;
}

.add-setting-card-page-longCard{
    width: 50%;
}

.add-setting-card-page-audioCard{
    width: 60%;
}
.error{
    position: relative;
}

.error-img {
    bottom: -22.5%;
    left: 30%;
    max-width: 80%;
    height: max-content;
    border-radius: 5px 30px 30px 30px;
}

.product-img {

    box-sizing: border-box;
    position: absolute;
    border-radius: 5px;
    border: solid 1px black;

   
  
}


.image-videoCard {

    left: 5%;
    top: 36.5%;

    aspect-ratio: 720 / 480;
    width: 90%;

    opacity: 1;
}

.image-audioCard {
   
    left: 5%;
    top: 25%;

    aspect-ratio: 1 / 1;
    width: 30%;
}

.image-longCard {

    left: 10%;
    top: 20%;

    aspect-ratio: 80 / 110;
    width: 80%;

    backface-visibility: hidden;
    transition: 1s;
    transform: rotateY(0deg);
}

.image-page {

    left: 10%;
    top: 20%;

    aspect-ratio: 80 / 110;
    width: 80%;

    backface-visibility: hidden;
    transition: 1s;
    transform: rotateY(0deg);
}

/* это часть неявно связана с product-card-longCard в ProductCard */
.product-card-longCard:hover .image-longCard {
    transform: rotateY(180deg);
}


.video-button {
    position: absolute;
    width: 20%;
    height: 20%;
    left: 40%;
    top: 40%;

    font-size: 250%;
    opacity: 0.9;
}

.video-button:hover {
    transition: 0.5s;;
    font-size: 255%;
    opacity: 0.95;
}


@media (max-width: 700px){
 
    .error-img {
        
      

        max-width: 80%;
        height: max-content;
        border-radius: 5px 30px 30px 30px;
    }



}
</style>
