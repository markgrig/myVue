<template>
    
    <Novigation/>
    <router-view/>
      
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
  background-position: center center;
  margin: 0;
  background: url( './img/background.jpg' );
  background-size: 100% auto;
  background-attachment: fixed;
  background-repeat: no-repeat;
  overflow-x: hidden;
}

@media (max-width: 850px){
  body{
    background-size: 100% auto;
    }
}

@media (max-width: 700px){
  body{
    background-size: auto 100%;
    overflow: hidden;
    }
}
</style>
