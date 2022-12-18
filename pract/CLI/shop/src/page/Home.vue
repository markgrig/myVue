<template>


  <div id = "home">
    
    <SliderContent
      :sliderData = "slider.data">
    </SliderContent>
  
  </div>

</template>

<script>


export default {
    name: "Home",
    data() {
        return {
          slider: {
                data:
                    [
                        { 
                            words:   'Опрос',
                            img:   `${require('@/img/quest.jpg')}`,
                            placeholder: "Пройдите опрос для того, чтобы наше приложение смогло подстроится под вас",
                            func: ()=>{
                              const url = `/questionary/`;
                              this.$router.push({ path: url });
                            }
                        },
                        { 
                            words:   'Информация о магазине',
                            img:   'https://media.giphy.com/media/9Pmf3QJiDHwyftez6i/giphy-downsized-large.gif',
                            placeholder: "Нажмите, чтобы узнать больше информации о нашем магазине!",
                            func: ()=>{
                              const url = `/about/`;
                              this.$router.push({ path: url });
                            }
                        },
                        { 
                            words:   'Инструкция по добавлению',
                            img:   `${require('@/img/insrt.jpg')}`,
                            placeholder: "Перед тем как загрузить товар, прочтите инструкцию",
                            func: ()=>{
                              const url = `/instruction/`;
                              this.$router.push({ path: url });
                            }
                        },
                       
                    ]
                
            }
        }
       
    },
    methods: {
       
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

@media (max-width: 700px){
  #home {
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
  }
  


}
</style>
