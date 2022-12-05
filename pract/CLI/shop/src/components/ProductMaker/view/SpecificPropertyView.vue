<template>
    <div>
        <AudioView
            v-if = "nameCategoty === 'music_instrument' && isShowPlayer.audio" 
            :audioUrl = "specificProperty?.audio?.url">

        </AudioView>
        
        <VideoView
            v-if = "nameCategoty === 'video' && isShowPlayer.video" 
                :isCategoryList = "isCategoryList" 
                :videoUrl = "specificProperty?.video?.src"
                :usersStyle = "totalProperty.image.style"
                :aspectRatioImage = "aspectRatioImage"
                :onVideo = "onVideo"
                @offVideo = "offVideo">
            
        </VideoView>
    </div>
</template>

<script>
export default {
    name: "SpecificPropertyView",
    props: {
        totalProperty: Object,
        specificProperty: Object,
        onVideo: Boolean,
        aspectRatioImage: String,
        isCategoryList: Boolean,
    },
    data() {
            return {
                nameCategoty: this.$route.params.id,   
        }
    },
    methods: {
        offVideo() {
            this.$emit("offVideo");
        }
    },
    computed: {
        isShowPlayer() {
                return {
                    audio: this.specificProperty?.audio?.url || false,
                    video: this.specificProperty?.video?.src || false
                }
            }
    },
    watch: {
        isShowPlayer:  function (newObj) {
                    
                    if ( newObj.video ) {
                        this.isShowPlayer.video = true
                    }

                    if ( newObj.audio ) {
                        this.isShowPlayer.audio = true
                    }   

                }
           
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    background-color: rgba(0, 0, 255, 0.465);       
    padding: 10px; 
    display: block;
    margin: auto;
    color: white;
    border-radius: 12px;
    margin-top: 20px;
}
button:hover {
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.315);
}
</style>
