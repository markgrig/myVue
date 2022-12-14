<template>

<BlueButton
        @click="clicktoBack()" 
        textButton = "Вернуться назад"> 
</BlueButton>

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
        Слушать аудифалы, закреплённые за товаром.   
      </li>   
      <li>
        Смотреть видео, закреплённые за товаром.      
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

<style>

.box-about{
  display: flex;
  padding: 4%;
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
  transition: 0.1s;
}

.text-about h3 {
  width: max-content;
  margin: 5% auto;
  padding: 1% 4%;

  text-align: center;
  color: brown;
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
  padding: 1% 8%;

  text-indent: 30px;
  font-weight: 600;
  color: white;
  filter: drop-shadow(0px 0px 4px rgb(135, 135, 135));
 
  
}

.ligth-one:hover {
  transition: 0.5s;
  box-shadow:  0 1px 20px 2px white;
}



</style>
