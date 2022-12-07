<template>
    <div>
        <AudioView
            v-if = "typeCard === 'audioCard' && isShowPlayer.audio" 
            :audioUrl = "specificProperty?.audio?.src">

        </AudioView>
        
        <VideoView
            v-if = "typeCard === 'videoCard' && isShowPlayer.video" 
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
        typeCard: String,
        isCategoryList: Boolean,
    },
    methods: {
        offVideo() {
            this.$emit("offVideo");
        }
    },
    computed: {
        isShowPlayer() {
                return {
                    audio: this.specificProperty?.audio?.src || false,
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

</style>
