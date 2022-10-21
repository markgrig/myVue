<template>
    
    <div class = "box-background">
      <Novigation/>
    <router-view/>
    </div>
      
    <form  
        name = "ask-question"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="ask-question" />
            <input type="text"   name="productImg" > 
        <button> okey </button>
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
  padding: 0;
  margin: 0;
}
body{
  scrollbar-width: none;
  background-position: center center;
  margin: 0;
  background: url( './img/background1920w.jpg' );
 
  background-image: image-set(
    url("./img/background500w.jpg") 500w, 
    url("./img/background700w.jpg") 700w,
    url("./img/background1200w.jpg") 1200w,
    url("./img/background1920w.jpg") 1920w);
  
  
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
    background-size: auto 100vh;
    background-position: center;
    overflow-y: hidden;
    }
}
</style>
