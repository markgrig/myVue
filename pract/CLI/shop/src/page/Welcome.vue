<template>

  <div id = "home">
    
    <div class = "image-box"> 

      <img 
        class="image-quest ligth" 
        src="@/img/quest.jpg" 
        @mouseover="placholderMouseoverQestionary()"
        @mouseout="placholderMouseoverQestionary()">

      <WhitePlacholder 
        v-if = "mouseoverQestionary"
        class ="white-placeholder-quest" 
        textPlaceholder = "Пройдёшь опрос?">
      </WhitePlacholder> 

    </div>
  
    <div class="span-box">

        <span 
        class="text-welcome ligth" 
        @:mouseover="tellAboutShop()"> 
        {{ infoAbotShop }}
      </span>

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
        };
    },
    methods: {
        async tellAboutShop() {
            if (this.infoSilent) {
                this.infoSilent = false;
                const textHello = `Привет, гость! Добро пожаловать на сайт нашего магазина!
        Тут вы можете найти самые разные категории товаров.   В нашем магазине  очень много товаров, и все  товары - самые лучшие!`;
                this.infoAbotShop = "";
                for (const word of textHello.split("")) {
                    await new Promise(resolve => setTimeout(resolve, 50 / word.length));
                    this.infoAbotShop += word;
                }
            }
        },
        placholderMouseoverQestionary() {
        
        return this.mouseoverQestionary = !this.mouseoverQestionary
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
