<template>

 
<div>

  <BlueButton
        @click="clicktoBack()" 
        textButton = "Вернуться назад"> 
  </BlueButton>

</div>
  

</template>

<script>


export default {
    name: "About",
    data() {
        return {
    
        }
    },
   methods: {
      clicktoBack() {
        this.$router.go(-1)
      },
    }
}
</script>

<style>

</style>
