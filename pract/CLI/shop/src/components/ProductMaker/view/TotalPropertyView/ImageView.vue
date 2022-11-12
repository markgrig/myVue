<template>

    <div>
        <div 
            class = "product-img error"  
            :style = 'nowStyleProductPicture'
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
    setup() {
        const imageSettings = inject("imageSettings")
        return { imageSettings }
    },
    props: {
        srcImageUsersProduct: {
            type: String,
            default:  "https://www.thinkwithgoogle.com/_qs/static/img/icons/data-points/consumer_goods.svg"
        },
        isImageSuccess: Boolean,
        valueError: String,
        usersStyle: Object,
    },
    computed: {
        nowStyleProductPicture() {
            if ( !this.imageSettings?.isNewImage === true ) {
                return this.usersStyle  
            }
           
            return {
                    'background': `url(${this.srcImageUsersProduct}) 
                    no-repeat
                    50% 50% / 100% auto` , 
                }

            
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.error{
    position: relative;
}

.error-img {
    bottom: 0%;
    top: 90%;

    max-width: 80%;
    height: max-content;
    border-radius: 5px 30px 30px 30px;
}



.product-img {
    box-sizing: border-box;
    position: absolute;
    left: 5%;
    top: 25%;

    border: solid 1px black;
    aspect-ratio: 1 / 1;
    width: 30%;
}


@media (max-width: 700px){

    .product-img {
        width: 100px ;
        height: 100px;
        
    }

    
    .error-img {
        top: 250%;
        left: 30%;

        max-width: 80%;
        height: max-content;
        border-radius: 5px 30px 30px 30px;
    }



}
</style>
