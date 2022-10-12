<template>
  <BlueButton @click="clickCreateProduct()"/>
</template>

<script>
import { createProduct } from "@/factory/factory.js"

export default {
    name: "Category",
    data() {
      return {
        nameCategory : ""
      }
    },
    methods: {
      clickCreateProduct() {
        const res = createProduct()
        console.log(res);
      }
    }
}

</script>

<style>
h1{
  text-align: center;
}
</style>
