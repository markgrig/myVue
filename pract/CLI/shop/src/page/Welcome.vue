<template>

  <div id = "home">
    
    <div> <img class="ligth" src="@/img/quest.jpg" 
      @mouseover="placholderMouseoverQestionary()"
      @mouseout="placholderMouseoverQestionary()">
      <WhitePlacholder class ="white-placeholder" textPlaceholder = "Пройдёшь опрос?" v-if = "mouseoverQestionary"> </WhitePlacholder> 
    </div>
  
    <span class="ligth" @:mouseover="tellAboutShop()"> {{ infoAbotShop }}</span>
   
  </div>

</template>

<script>
import WhitePlacholder from "../components/reused/WhitePlacholder.vue";



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
    },
    components: { WhitePlacholder }
}
</script>

<style>
#home {
  display: flex;
  justify-content: center;
  padding: 50px;
  margin: 10vh;
}
img {
  position: relative;
  margin: 0;
  box-sizing: border-box;
  border-radius: 30px;
  border: solid 0.2vh rgb(156, 101, 19);
  height: 250px;
  margin: 20px 0;
  box-shadow:  0 1px 5px 1px white;
  opacity: 1;
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
span {
  text-align: center;
  font-size: 120%;
  font-weight: 500;
  display: block;
  width: 30%;
  padding: 40px;
  margin: 50px ;
  height: 20vh;
  color: rgba(0, 0, 0, 0.876) ;
  background-color: rgba(245, 245, 220, 0.4);
  overflow: auto ;
  border: solid 3px black;
  border-radius: 5px;
}

span:hover {
  margin-top: 20px;
  color: black;
  height: calc(20vh + 40px);
  background-color: rgba(255, 255, 239, 0.5);
  transition: 1s;
}
span:focus {
  font-size: 100%;
  margin-top: 20px;
  color: black;
  height: calc(20vh + 40px);
  background-color: rgba(255, 255, 239, 0.5);
  transition: 1s;  
}

@media (max-width: 700px){
  #home {
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
  }
  span {
    font-size: 18px;
    padding: 10px 20px;
    width: 70%;
    margin: auto;
    height: 25vh;
  }
  img {
    width: 120px;
    margin: 20px calc(50% - 65px);
    height: auto;
  }
  span:hover {
  margin-top: 0px;
  padding: 20px;
  height: calc(24vh + 20px);

}

}
</style>
