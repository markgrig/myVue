<template>
    
    <div :class="classList['card-audio']">
        
        <div 
            :class="classList['product-audio']"
            alt="">
                <AudioPlayer  

                    v-if ="isShowPlayer"
                        class="audio"
                        :audioUrl = "audioUrl">
                    
                </AudioPlayer>

        </div>
        
        <ErrorPlacholder 
            class="error-audio" 
            v-if = "!isAudioSuccess && valueError !== ''"
                :textPlaceholder = "valueError" > 
        </ErrorPlacholder>

    </div>

</template>

<script>

export default {
    name: "AudioView",
    props: {
        deleteModal: Function,
        audioUrl: String,
        isPage: Boolean,
        isShowPlayer: Boolean,

        isAudioSuccess: Boolean,
        valueError: String
    },
    computed:{
        classList() {
            if  ( this.isPage ) { 
                return { 
                        "card-audio": `card-audio-page`,
                        "product-audio": `product-audio-page`
                    }   
            }
                
            return  { 
                        "card-audio": `card-audio`,
                        "product-audio": `product-audio error`
                    }    
               
        },
    }    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card-audio {
    position: absolute;
    bottom: 3%;
    left: 0%;

    width: 100%;

}

.product-audio {
    position: relative;
    aspect-ratio: 15/2;
    width: 90%;
    margin: 1% 5%;
}

.card-audio-page{
    position: static;
    width: 100%;
}

.product-audio-page {
    position: relative;
    aspect-ratio: 20/2;
    width: 98%;
    margin: 5% 1%;
}

.error{
    position: relative;
}

.error-audio {
    bottom: 0;
    left: 30%;
    max-width: 80%;
    height: max-content;
    border-radius: 5px 30px 30px 30px;
}

@media (max-width: 700px){


    .product-audio-page {
        position: relative;
        aspect-ratio: 16/2;
        width: 98%;
        margin: 5% 1%;
    }



}
</style>
