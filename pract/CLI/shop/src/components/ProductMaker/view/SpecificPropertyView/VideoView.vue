<template>
      <div 
        v-if = "onVideo"
        class= 'card-video'>
    
        <div
        :class= "classList['product-video']" 
            alt="">
            
            <embed 
                type="text/html"      
                :class= "classList['video-iframe']"
                :style = 'styleProductPicture'

                :src= videoUrl
                title="YouTube video player" 
                frameborder="0"/>
                
        </div>

        <BlueButton 
            v-if = "!isPage"
            class = "off-iframe"
            textButton = "Выкл"
            @click="offVideo"
            >

        </BlueButton>

        <BlueButton 
            :class= "classList['fullwin-iframe']"
            textButton = "Fullscrean"
            @click="showFullWIndow"
            >

        </BlueButton>

    </div>

</template>

<script>
import { inject } from 'vue';

export default {
    name: "VideoView",
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
        deleteModal: Function,
        isCategoryList: Boolean,
        usersStyle: Object,
        onVideo: Boolean,
        videoUrl: String,
        aspectRatioImage: String,
        isPage: Boolean,
    },
    data() {
        return {
            isFullWindow: false
        }
    },
    computed: {
        classList() {

            
            if( this.isFullWindow ) {
                return { "video-iframe": `video-iframe full-win`}  
            }

            if  ( this.isPage ) { 
                return { 
                    "video-iframe": `video-iframe`,
                    "fullwin-iframe": `fullwin-iframe-page`,
                    "product-video": `product-video-page `
                }   
            }
              

            return { 
                "video-iframe": `video-iframe`,
                "fullwin-iframe": `fullwin-iframe`,
                "product-video": `product-video error`
            }   
        },
        styleProductPicture() {

            if ( !this.imageSettings?.isNewImage === true ) {
                return  { 
                    "border-radius": this.usersStyle["border-radius"],
                    "box-shadow": this.usersStyle["box-shadow"],
                    "aspect-ratio": this.usersStyle["aspect-ratio"],
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
        offVideo() {
            this.$emit("offVideo");
        },
        showFullWIndow() {
            this.isFullWindow = true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.product-video-page {

    box-sizing: content-box;
    position: relative;
    
    margin: 4% 0;
    width: 100%;
    aspect-ratio: 720 / 480;

  
    z-index: 0;

}
.fullwin-iframe-page{
    position: relative;
    font-size: 200%;
    width: 30%;
}

.error{
    position: relative;
}

.video-iframe{
    width: 100%;
    height: 100%;

    border-radius: 5px;
    border: solid 1px black;
    z-index: 0;
}

.error-video {
    bottom: 0%;
    top: 90%;

    max-width: 80%;
    height: max-content;
    border-radius: 5px 30px 30px 30px;
}

.product-video {

    box-sizing: border-box;
    position: absolute;
    left: 5.1%;
    top: 36.5%;

    aspect-ratio: 720 / 480;
    
    width: 90%;
    z-index: 0;

   
}

.off-iframe {
    font-size: 90%;
    width: 12%;
    height: 8%;
    position:absolute;
 
    top: 0;
    right: 46%;
}

.fullwin-iframe {
    font-size: 90%;

    width: 14%;
    height: 8%;
    position:absolute;
    top: 0%;
    right: 30%;
    z-index: 0;
}

.full-win {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
}


@media (max-width: 700px){
    .fullwin-iframe, .off-iframe {
        top: -1%;
        font-size: 65%;
    }    
}
</style>
