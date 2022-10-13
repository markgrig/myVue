<template>
  <BlueButton @click="clickCreateProduct()"/>
  <WhiteModalWindow v-if= "isCreatProduct && !isMobile" @deleteModalWindow = "deleteThisCompanent"> </WhiteModalWindow>
  <WhiteModileModalWindow v-if= "isCreatProduct && isMobile" @deleteModalWindow = "deleteThisCompanent"> </WhiteModileModalWindow>
  {{ isMobile}}
</template>

<script>
import { createProduct } from "@/factory/factory.js"

export default {
    name: "Category",
    data() {
      return {
        nameCategory : "",
        isCreatProduct: false,
        isMobile: RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i").test(navigator.userAgent)
      }
    },
    methods: {
      clickCreateProduct() {
        const res = createProduct()
        this.isCreatProduct = true
        console.log(res);
      },
      deleteThisCompanent() {
        this.isCreatProduct = false
      }
    }
}

</script>

<style>
h1{
  text-align: center;
}
</style>
