<template>

  <div class = "main-pannel">
  
    <h3 class = "topic-mp">  Панель управления </h3>

      <div>
        <BlueButton 
          @click="clicktoBack()" 
          textButton = "Вернуться назад"> 
        </BlueButton>
      </div>
    
  </div>
   
<div class = "box-about">

  <img 
      class = "img-about ligth-one" 
      :src = "require('@/img/girlInShop.jpg')">
  <div class = "text-about ligth-one ">
    <h3> Инфрмация о магазине</h3>
    <div>
      <div  class="black-text-shodow" >  
        Данное некомерческое приложение, написанно в рамках в освоения фреймвока vue.js.  
      </div>
    </div>
    <div>  
      <div class="black-text-shodow"> Тут вы можете: </div>
      <li>
        Слушать аудиофайлы, закреплённые за товарами.   
      </li>   
      <li>
        Смотреть видео, закреплённые за товарами.      
      </li>
      <li>
        Найти или добавить самые разные товары от муз. инструментов до видеокурсов!
      </li>   
      <li>
        Cкинуть страницу товара друзьям!  
      </li> 
      
    </div> 
       
  </div>

</div>
  

</template>

<script>


export default {
    name: "About",
    data() {
        return {
    
        }
    },
   methods: {
      clicktoBack() {
        this.$router.go(-1)
      },
    }
}
</script>

<style scoped>

.main-pannel div {
  position: relative;
  display: flex;
  width: max-content;
  margin: auto;
}

.main-pannel {
  position: relative;
  width: 90%;
  margin: 10px auto;
  padding-top: 6px;
  padding-bottom: 15px;
  background-color: rgba(130, 190, 249, 0.615);
  filter: drop-shadow(0px 0px 4px rgb(255, 255, 255));
  border-radius: 4px;
  border: solid 2px rgb(5, 13, 248);
}

.box-about{
  display: flex;
  padding: 1%;
}
.img-about {
  width: 50%;
  display: block;
  margin: auto;
}

.img-about:hover {
  width: 52%;
  margin-left: auto;
  transition: 0.1s;
}

.text-about {
  box-sizing: border-box;
  width: 40%;
  aspect-ratio: 12/10;
  display: block;
  margin: auto;
  padding:  auto;
  padding-top: 3%;

  background-color: rgba(15, 130, 197, 0.9);
  border: solid 0.5vh  gold;
  border-radius: 2vw;
  
}
.text-about:hover{
  width: 41%;
  margin-left: auto;
  font-size: 103%;
  transition: 0.1s;
}

.text-about h3 {
  width: fit-content;
  max-width: 80%;
  margin: 5% auto;
  padding: 1% 4%;

  text-align: center;
  color: brown;
  word-wrap: break-word;
  filter: drop-shadow(0px 0px 2px rgb(115, 99, 6));

  background-color: rgb(243, 240, 50); 
  border: solid 0.2vw   gold;
  border-radius: 0.5vw;

}

.black-text-shodow{
  color: white;
  filter: drop-shadow(0px 0px 1px black);
}
.text-about > div {
  padding: 3%;
  margin: 0 20px;
  text-indent: 30px;
  font-weight: 600;
  font-size: 100%;
  color: white;
  filter: drop-shadow(0px 0px 4px rgb(135, 135, 135));

  word-wrap: break-word;

 
  
}

.ligth-one:hover {
  transition: 0.5s;
  box-shadow:  0 1px 20 px 2px white;
}

@media (max-width: 700px){

  .main-pannel div {
      flex-direction: column;
      font-size: 120%;
    }
    

  .img-about {
    width: 90%;
  }

.img-about:hover {
  width: 92%;
}

  .box-about{
  flex-direction: column;
  }


  .text-about {
    margin-top: 30px;
    width: 90%;
  }
  .text-about:hover{
    width: 91%;
    font-size: 103%;
  }
}

</style>
