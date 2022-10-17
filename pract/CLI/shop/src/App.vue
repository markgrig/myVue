<template>
    
    <div class = "box-background">
      <Novigation/>
    <router-view/>
    </div>
      
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
  background: url( './img/background.jpg' );
  background-size: 100% auto;
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
    background-size: auto 100%;
    background-position: center;
    
    }
}
</style>
