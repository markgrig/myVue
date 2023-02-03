<template>
       
     
        
      <div class = "total-box">
        <Novigation/>
        <router-view/>
      </div>
      <WhiteFooter></WhiteFooter>
</template>

<script>

import Novigation from '@/components/Novigation/Novigation.vue'
import WhiteFooter from "@/components/Anothers/WhiteFooter.vue"

  export default {
    
    name: 'App',
    components: {
      Novigation,
      WhiteFooter
    },

  }

</script>

<style>

#app {
  display: flex;
  flex-direction: column;
  height: max-content;
}

.total-box{
  
  box-sizing:content-box;
  min-height: 100vh;
}


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
  background: rgba(232, 212, 212, 0.1);
  border: solid 1px rgba(232, 212, 212, 0.1);
  
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(255, 254, 254, 0.9);
  border-radius: 2vw;
  border: 0.2vw solid black;
}

body{
  

   background-image: -webkit-image-set(
    url("./img/background1920w.jpg")  4x,
    url("./img/background1200w.jpg")  3x,
    ); 
    
  background-image: image-set(
    url("./img/background1200w.jpg") 2x,
    url("./img/background1920w.jpg")  1x);
  
  background-image: image-set(
    url("./img/background1200w.jpg") 1200wv,
    url("./img/background1920w.jpg") 1920wv);
  

  
  max-width: 100vw;
  max-height: 100vh;
  scrollbar-width: none;
  background-position: top center;
  margin: 0;
  


  background-size: 110vw auto;

  background-color: rgba(10, 10, 96, 0.822);
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow-x: hidden;
  overflow-y: auto;

}



.flex-class{
    display: flex;
    justify-content: space-around;
}



.footer {
  box-sizing: border-box;
  border-top: solid 0.5vh rgba(0, 0, 0, 1);
  background-color: rgba(192, 192, 192, 0.7);
  height: 15vh;
  width: 100%;
  bottom: 0;
  left: 0;

}

.text-footer .divf {
  width: 15%;
}


a{
  text-decoration: none;
}

a:hover{
  font-size: 101%;
  color: white;
}

@media (max-width: 1000px){
  body{
    
    background-image: -webkit-image-set(
    url("./img/background700w.jpg")  3x, 
    url("./img/background500w.jpg")  1x, 
    ); 
    
  background-image: image-set(
    url("./img/background500w.jpg")  4x, 
    url("./img/background700w.jpg")  3x);
  
  background-image: image-set(
    url("./img/background500w.jpg")  500wv, 
    url("./img/background700w.jpg")  700wv);
    } 

  html {
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
  }
  .flex-class {
    margin: 10px auto;
    flex-direction: column;
  }

}
</style>
