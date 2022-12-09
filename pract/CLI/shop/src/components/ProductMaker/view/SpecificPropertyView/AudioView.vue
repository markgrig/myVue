<template>
    
    <div :class="classList['card-audio']">
        
        <div 
            :class="classList['product-audio']"
            alt="">
                <AudioPlayer 
                
                    class="audio"
                    :audioUrl = "audioUrl">
                    
                </AudioPlayer>
        </div>
    </div>

</template>

<script>

export default {
    name: "AudioView",
    props: {
        deleteModal: Function,
        audioUrl: String,
        isPage: Boolean,
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
    aspect-ratio: 16/2;
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



@media (max-width: 700px){



}
</style>
