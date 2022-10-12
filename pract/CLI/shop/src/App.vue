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
    }
    
  }

</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body{
  background-image: url( './img/background.jpg' );
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-attachment: fixed;
}
</style>
