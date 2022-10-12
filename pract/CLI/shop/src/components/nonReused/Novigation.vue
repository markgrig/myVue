<template>
  <div class="novigation-element" @:click = 'goToCategory( name, urlName)'>
        {{ name }} 
  </div>  
</template>

<script>

export default {
  name: 'NovigationElement',
  props: {
    name: String ,
    urlName: String
  },
  methods: {
    goToCategory( name, urlName) {
      const url = '/category/' + urlName;
      this.$router.push({ path: url })
      this.$emit('changeCategory', name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.novigation-element{
    display: block;
    margin: auto;
    text-align: center;
    width: 200px;
    height: 30px;
    color: rgba(0, 0, 255, 0.459);
    background-color: rgba(105, 235, 240, 0.765);
    border: solid;

    padding: 10px 0px 0px 0px;
    border-radius: 10px;

}
@media (max-width: 850px){
  .novigation-element {
    display: block;
    margin: 30px;
  }
}
</style>
