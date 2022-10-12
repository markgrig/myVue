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
  background-color: rgba(182, 255, 80, 0.285);
}

</style>
