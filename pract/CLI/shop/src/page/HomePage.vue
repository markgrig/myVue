<template>
  <div id = "home">
    <Novigation title="Web-shop"/>
    <img src="@/img/shop.jpg">
  </div>
</template>

<script>
import Novigation from '../components/nonReused/Novigation.vue'


export default {
  name: 'HomePage',
  components: {
    Novigation,

}
}
</script>

<style>
#home {
  text-align: center;
}
</style>
