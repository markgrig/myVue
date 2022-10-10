<template>
  <div class="novigatorPannel">
    <h1> {{ title }}</h1>
  </div>  
</template>

<script>
export default {
  name: 'NovigationPannel',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.novigator{
  width: 70%;
  display: block;
  margin: auto;
  color: rgba(0, 0, 255, 0.459);
}
</style>
