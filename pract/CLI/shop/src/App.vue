<template>
    
        

      <div class = "box-background">
      <Novigation/>
    <router-view/>
    </div>
 
    <!-- Для создание бд в Нетфли!-->
    <form name="product-form" enctype="multipart/form-data" netlify netlify-honeypot="bot-field" hidden>
      <textarea type="text" name="name" > </textarea>
      <textarea type="text" name="price" > </textarea>
      <textarea type="text" name="info" > </textarea>
      <input    type="file" name="file">
    </form>




</template>

<script>

  import Novigation from '@/components/nonReused/Novigation.vue'


  export default {
    
    name: 'App',
    components: {
      Novigation
    },
  }

</script>

<style>
* {
  font-family: serif;
  padding: 0;
  margin: 0;
}

* {
  scrollbar-width: thin;
  scrollbar-color:  rgba(255, 0, 0, 0.605) rgba(234, 194, 114, 0.3);
}

*::-webkit-scrollbar {  
  width: 1.2vw;
}

*::-webkit-scrollbar-track {
  background: rgba(245, 164, 1, 0.6);
  padding: 10px;
  border: solid 3px black;
  
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(255, 254, 254, 0.6);
  border-radius: 2vw;
  border: 1px solid black;
}

body{

   background-image: -webkit-image-set(
    url("./img/background1920w.jpg")  4x,
    url("./img/background700w.jpg")  3x,
    url("./img/background1200w.jpg")  2x,
    url("./img/background500w.jpg")  1x, 
    ); 
    
  background-image: image-set(
    url("./img/background500w.jpg")  4x, 
    url("./img/background700w.jpg")  3x,
    url("./img/background1200w.jpg") 2x,
    url("./img/background1920w.jpg")  1x);
  
  background-image: image-set(
    url("./img/background500w.jpg")  500wv, 
    url("./img/background700w.jpg")  700wv,
    url("./img/background1200w.jpg") 1200wv,
    url("./img/background1920w.jpg") 1920wv);


  max-width: 100vw;
  max-height: 100vh;
  scrollbar-width: none;
  overflow: hidden;
  background-position: center center;
  margin: 0;
  
 /* background-image: -webkit-image-set(
    url("./img/background1920w.jpg")  2x,
    url("./img/background700w.jpg")  1x,
    url("./img/background1200w.jpg")  1x,
    url("./img/background500w.jpg")  2x, 
    ); */


  background-size: 110vw auto;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow-x: hidden;

 
}
.flex-class{
    display: flex;
    justify-content: space-around;
}

@media (max-width: 700px){
  body{
    overflow-y: hidden;
    }
  html {
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
  }
}
</style>
