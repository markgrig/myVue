<template>
    
    <div class="card-audio">
        
        <div 
            class = 'product-audio error'  
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
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card-audio {
    position: absolute;
    bottom: 3%;
    left: 5%;

    aspect-ratio: 16/2;
    width: 90%;

}
.priduct-audio {
    position: relative;
}


@media (max-width: 700px){



}
</style>
