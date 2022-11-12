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
  padding: 0vh 0;
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

.text-footer {
  width: 90%;
  margin: 1vh auto;
  justify-content: space-between;
  align-items: center;
  
}
.text-footer .divf {
  width: 15%;
}

.text-footer .hf {
  background-color: rgba(34, 97, 246, 0.2);
  border-top: solid 0.5vh blue;
  border: solid 0.3vh  ;
  border-radius: 10px;
  padding: 1vh;
  height: min-content;
  width: fit-content;
  max-width: 300px;
  margin: auto;
  text-align: center;
  color: black

}

a{
  text-decoration: none;
}

a:hover{
  font-size: 101%;
  color: white;
}

@media (max-width: 700px){
  body{
    overflow-y: auto;
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

  .text-footer .divf {
    width: 80%;
  }

  
  .text-footer .hf {
    width: 80%;
    margin-bottom: 10px; 
    margin-top: 10px;
    border-radius: 0;
  }

}
</style>
