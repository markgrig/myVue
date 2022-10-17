<template >
  <BlueButton @click="clickCreateProduct()" textButton = "Создать товар"> </BlueButton>

  <ModalForAddProduct v-if= "isCreatProduct && !isMobile" 
      
      @deleteModalWindow = "deleteThisCompanent"
      :product= 'product' :isMobile = 'isMobile' :isUserWrite = 'isUserWrite'
      :modalCardWidth = "'30%'" :modalCardHeight = "'60%'"
      :modalFormWidth = "'46'" :modalFormHeight = "'80'"
      :startCardMargin = "'8%  60%'" :centralCardMargin = "'10% 35%'"
      :startFormMargin = "'5% 8%'"    :centralFormMargin = "'4%  27%'"
      >

  </ModalForAddProduct>

  <ModalForAddProduct v-if= "isCreatProduct && isMobile" 
     
      @deleteModalWindow = "deleteThisCompanent"
      :product= 'product' :isMobile = 'isMobile'
      :modalCardWidth = "'80%'" :modalCardHeight = "'40vh'"
      :modalFormWidth = "'90%'" :modalFormHeight = "'40%'"
      :startCardMargin = "'50vh 9%'" :centralCardMargin = "'30vh 9%'" 
      :startFormMargin = "'15% 4%'" :centralFormMargin = "'25vh  4%'"> 
  </ModalForAddProduct>

  

</template>

<script>
import *  as AbstactFactory from "@/factory/factory.js"
import ModalForAddProduct from '@/components/nonReused/ModalForAddProduct.vue'
import BlueButton from "../components/reused/BlueButton.vue"

export default {
    name: "Category",
    components: {
    ModalForAddProduct,
    BlueButton
},
    data() {
      return {
        nameCategory : this.$route.params.id,
        isCreatProduct: false,
        product: {},
        isMobile: Boolean( ( window.innerWidth < 850)),
        isUserWrite: false
      }
    },
    methods: {
      clickCreateProduct() {
        this.nameCategory = this.$route.params.id
        //создание пустого продукт
        this.product = AbstactFactory.createProduct(this.nameCategory)
        this.isCreatProduct = true
        console.log(this.product);
       
       
      },
      deleteThisCompanent() {
        this.isCreatProduct = false
      },
    }
}

</script>

<style>

h1{
  text-align: center;
}

</style>
