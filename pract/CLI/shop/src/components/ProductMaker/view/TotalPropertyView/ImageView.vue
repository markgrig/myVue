<template>
    
    <div class="card-img">
        <div 
            :class = "classList['product-img'] + ' error' "  
            :style = 'styleProductPicture'
            @click = "userClickImg"
            alt="">
                
            <ErrorPlacholder 
                class="error-img" 
                v-if = "!isImageSuccess && valueError !== ''"
                    :textPlaceholder = "valueError" > 
            </ErrorPlacholder>
            
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
        aspectRatioImage: String
    },
    data() { 
        return {
                nameCategory: this.$route.params.id,
        }
    },
    computed: {
        classList() {
                return { "product-img": `product-img image-${this.nameCategory}`}    
               
        },
        styleProductPicture() {

            if ( !this.imageSettings?.isNewImage === true ) {
                return this.usersStyle  
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

.error{
    position: relative;
}

.error-img {
    bottom: -25%;
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


.image-video {

    left: 5%;
    top: 36.5%;

    aspect-ratio: 720 / 480;
    width: 90%;

    opacity: 1;
}

.image-music_instrument {
   
    left: 5%;
    top: 25%;

    aspect-ratio: 1 / 1;
    width: 30%;
}

.image-clothes {

    left: 10%;
    top: 20%;

    aspect-ratio: 80 / 110;
    width: 80%;

    backface-visibility: hidden;
    transition: 1s;
    transform: rotateY(0deg);
}

.image-clothes .error-img {
    opacity: 0;
}

/* это часть неявно связана с product-card-clothes в ProductCard */
.product-card-clothes:hover .image-clothes {
    transform: rotateY(180deg);
}

.product-card-clothes:hover .error-img {
    opacity: 1;
}



@media (max-width: 700px){
 
    .error-img {
        
      

        max-width: 80%;
        height: max-content;
        border-radius: 5px 30px 30px 30px;
    }



}
</style>
