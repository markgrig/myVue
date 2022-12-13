<template>

<div class ="audio-welcome ">
  <AudioView
              :isShowPlayer = 'isShowPlayer.audio'
              :isAudioSuccess = "true"
              :isPage  = 'true'
              :hidePause = "true"

              :audioUrl = "`${require('@/audio/test.mp3')}`">
  </AudioView>
</div>
  <div id = "home">
    
    <div class = "image-box"> 

      <img 
        class="image-quest ligth" 
        src="@/img/quest.jpg" 
        @mouseover="placholderMouseoverQestionary()"
        @mouseout="placholderMouseoverQestionary()"
        @click = "goToQuestionary">

      <WhitePlacholder 
        v-if = "mouseoverQestionary"
          class ="white-placeholder-quest" 
          textPlaceholder = "Пройдёшь опрос?">
      </WhitePlacholder> 

    </div>
    
    
    

      <div class ="audio-welcome ">
      
      <h2 class ="text-welcome"></h2>
      <img src ="https://media.giphy.com/media/9Pmf3QJiDHwyftez6i/giphy-downsized-large.gif"
            class="gif-welcome">

      
    

    </div>
    
   
  </div>

</template>

<script>



export default {
    name: "Welcome",
    data() {
        return {
            infoAbotShop: `Вы уже слышали что-то о нашем магазине?`,
            infoSilent: true,
            mouseoverQestionary: false,
            isShowPlayer: {
              audio: true
            }
        };
    },
    methods: {
        placholderMouseoverQestionary() {
        
        return this.mouseoverQestionary = !this.mouseoverQestionary
      },
      goToQuestionary() {
        const url = `/questionary`
        this.$router.push({ path: url })
      }
    }
}
</script>

<style>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vw;
}
img {
  margin: 0;
  box-sizing: border-box;
  border-radius: 2vw;
  border: solid 0.5vh rgb(243, 240, 50);
  box-shadow:  0 1px 5px 1px white;
  opacity: 1;
}

.gif-welcome{
  width: 50%;
  margin-left: 25%;
}
.image-quest{
  width: 70%;
  margin: 15% 15%;

}

.image-box {
  position: relative;
  box-sizing: border-box;
  width: 30%;
  height: max-content;
}

.ligth:hover {
  animation: light 1.5s infinite;
}
@keyframes light {
  0% {
    box-shadow:  0 1px 5px 1px white;
  }
  50%{
    box-shadow:  0 1px 15px 5px white;
  }
  100%{
    box-shadow:  0 1px 5px 1px white;
  }
}
.span-box {
  width: 40vw;
  height: max-content;
}

.text-welcome {
  box-sizing: border-box;
  text-align: center;
  font-size: 1.4vw;
  font-weight: 500;
  display: block;
  width: 80%;
  padding: 2vw 2vw;
  height: min-content;
  margin: 15% 10%;
  color: rgba(0, 0, 0, 1) ;
  background-color: rgba(255, 255, 239, 0.6);
  overflow: auto ;
  border: solid 0.5vh black;
  border-radius: 5px;
}

.text-welcome:hover {
  color: black;
  background-color: rgba(255, 255, 239, 0.7);
  transition: 1s;
}
.white-placeholder-quest {
  font-size: 1.3vw;
  width: 20%;
  height: max-content;
  position: absolute;
  left: -25%;
  bottom: 45%;
}


.audio-welcome{
  width: 40vw;
  height: max-content;
    
  }

@media (max-width: 700px){
  #home {
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
  }
  .image-box {
    box-sizing: border-box;
    width: 50%;
    height: max-content;
  }

  .image-quest {
    border-radius: 50%;
    width: 100%;
    margin: 0;
    margin-top: 6vh;
  }

  .span-box {
    margin-top: 6vh;
    box-sizing: border-box;
    width: 80%;
    height: max-content;
  }
  .text-welcome {
    font-size: 2.2vh;
    padding: 2vh 4vw;
    width: 100%;
    margin: auto;
  }


}
</style>
