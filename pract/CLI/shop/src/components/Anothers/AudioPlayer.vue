<template>
  
    <div class = "player">

        <img 
          class = "ico-play" 
          src = "@/img/play.png"
          v-if = "!isPlay"
            @click="playAudio($event)">
    
        <img 
          class = "ico-pause" 
          src = "@/img/pause.png"
          v-if = "isPlay"
            @click="pauseAudio()">
        
          <div 
            class= "volume">

                <div class ="volume-slider">
                  <SliderBallVolume  
                                  :sliderSartX = "volumeSliderX"
                                  @returnSetting="setNewVolume"> 
                  </SliderBallVolume>
                </div>

          </div>
        

       <div ref = "slider" class ="slider-player">
          <SliderBall  
                              :nameSlider= "timer"
                              :sliderSartX = "sliderSartX"
                              @returnSetting="setNewTime"> 
          </SliderBall>
       </div>
       
    </div>

</template>

<script>
import { reactive } from 'vue'

export default {
  name: "AudioPlayer" ,
  props: {
      textPlaceholder: String,
      audioUrl: String
  },

  setup(props) {
  
    const audioObj = reactive( new Audio(props.audioUrl) )

    const audioData = reactive({

      isLoad: false, 
      time: 0,
      timeMax: 1,
      volume: 1,

    })

    audioObj.addEventListener('loadedmetadata', () => {

      audioData.timeMax = audioObj.duration
      audioData.isLoad = true

    });

    return { audioObj, audioData }
  },
  mounted() {
    this.widthPlayer = this.$refs.slider.offsetWidth
  },
  data() {
      return {
        widthPlayer: 1,
        interval: {},
        volumeSliderX: 0,
        isPlay: false
      }
  },
  computed: {
      sliderSartX() { 
        return this.audioData.time*this.widthPlayer/(this.audioData.timeMax) 
      },
      timer() {
        
        
        if ( this.audioData.isLoad ) {
          const minute = Math.floor( this.audioData.time % 3600 / 60);
          const minuteMax = Math.floor( this.audioData.timeMax % 3600 / 60);

        
          const s = Math.floor( this.audioData.time % 3600 % 60);
          const sMax = Math.floor( this.audioData.timeMax % 3600 % 60);

          const volume = this.audioData.volume;

          return ` ⌚️ [${minute}:${s}/ ${ minuteMax }:${sMax}] 🔊 ${volume}`
        }

          return `Загрузка данных`


      }
  },
  methods: {
    setNewTime(sliderMemberX) {

    console.log(this.widthPlayer);
    this.sliderSartX = sliderMemberX
    this.audioObj.currentTime = sliderMemberX*(this.audioData.timeMax)/(this.widthPlayer)
    this.audioData.time =  this.audioObj.currentTime

    },
    setNewVolume(sliderMemberX, koof) {

      this.volumeSliderX = sliderMemberX
      const volume = Math.round( (1 - koof)*10)/10;

      if (koof===1) { 
        this.audioObj.volume = 0 
      }

      if ( volume && (koof!==1) ) { 
        this.audioObj.volume = volume 
      }

      this.audioData.volume = this.audioObj.volume

    },
    playAudio() {
      
      this.audioObj.play();
      this.isPlay = true 
      
      this.interval = setInterval( ()=>{
        this.audioData.time =  this.audioObj.currentTime
        this.audioData.timeMax = this.audioObj.duration
        this.audioData.volume = this.audioObj.volume
      }, 100)

      
    },
    pauseAudio() {

      this.audioObj.pause(); 
      this.isPlay = false
      clearInterval( this.interval );
      
    },


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.player {
  box-sizing: border-box;
  position: absolute;
  
  width: 100%;
  height: 100%;
  padding: 1%;

  background-color: rgba(0, 124, 247, 0.5);
  border: solid 2px rgb(5, 84, 240);  
  border-radius: 5px;
  
}

.slider-player {
  position: relative;
  width: 60%;
  margin-left: 20% ;
  text-align: center;

  font-size: calc(50% + 0.5vw);
 
}


.ico-play {
  z-index: 1;
  top: 10%;
  left: 6%;

  position: absolute;
  aspect-ratio: 1/1;
  height: 80%;

  background-color: rgb(113, 237, 11);
  box-shadow: none;
  border-radius: 50%;
}

.ico-play:hover {
  animation: light-play 1.5s infinite; animation: light-play 1.5s infinite;
}
.ico-pause {
  z-index: 0;
  top: 10%;
  left: 6%;
  position: absolute;

  aspect-ratio: 1/1;
  height: 80%;

  background-color: rgba(246, 109, 109, 0.912);
  border-color:  rgba(251, 214, 2, 0.856);
  
  box-shadow: none;
  border-radius: 50%;
}

.ico-pause:hover {
  animation: light-pause 1.5s infinite;
}

@keyframes light-play {
  0% {
    box-shadow:  0 0px 4px 1px    rgb(113, 237, 11)

  }
  50%{
    box-shadow:  0 0px 5px 4px  rgb(113, 237, 11)
  }
  100%{
    box-shadow:  0 0px 4px 1px  rgb(113, 237, 11)
  }
}

@keyframes light-pause {
  0% {
    box-shadow:  0 0px 4px 1px  rgba(246, 109, 109, 0.912);

  }
  50%{
    box-shadow:  0 0px 5px 4px  rgba(246, 109, 109, 0.912);
  }
  100%{
    box-shadow:  0 0px 4px 1px   rgba(246, 109, 109, 0.912);
  }
}

.volume {

  top: 10%;
  right: 3%;
  position: absolute;

  aspect-ratio: 1/1;
  height: 80%;
  
}
.volume-slider {
  position: absolute;
  width: 100%;
  rotate: 90deg;
  z-index: 1;
  
  top: 44%;
  right: 32%;

  

}



.ico-volume {
  top: 5%;
  right: 1%;
  position: relative;
  z-index: 4;
  aspect-ratio: 1/1;
  height: 90%;

  border: solid 2px black;
  padding: 3px;
  background: rgba(246, 245, 247, 0.912);
}



@media (max-width: 700px){

  .slider-player {
    font-size: 85%;
  }

}
</style>
