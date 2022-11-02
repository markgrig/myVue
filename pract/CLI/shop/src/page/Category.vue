<template >
  <BlueButton 
    @click="clickCreateProduct()" 
    textButton = "Создать товар"> 
  </BlueButton>
     
  <ModalForAddProduct v-if= "isCreatProduct && !isMobile" 
      
      @deleteModalWindow = "deleteThisCompanent"
      :productData = "productData"
      :isMobile = "isMobile" 
      :isUserWrite = 'isUserWrite' :getAbstactFactory = "getAbstactFactory"
      :modalCardWidth = "'30%'" :modalCardHeight = "'55%'"
      :modalFormWidth = "'48%'" :modalFormHeight = "'55%'"
      :startCardMargin = "'8%  60%'" :centralCardMargin = "'8% 35%'"
      :startFormMargin = "'8% 10%'"    :centralFormMargin = "'8%  27%'"
      >

  </ModalForAddProduct>

  <ModalForAddProduct v-if= "isCreatProduct && isMobile" 
     
      @deleteModalWindow = "deleteThisCompanent"
      :isMobile = "isMobile"
      :isUserWrite = "isUserWrite" :getAbstactFactory = "getAbstactFactory"
      :modalCardWidth = "'80%'" :modalCardHeight = "'75vw'"
      :modalFormWidth = "'90%'" :modalFormHeight = "'75vw'"
      :startCardMargin = "'50vh 9%'" :centralCardMargin = "'10vh 9%'" 
      :startFormMargin = "'15% 4%'" :centralFormMargin = "'25vh  4%'"> 
  </ModalForAddProduct>

  

</template>

<script>
import *  as AbstactFactory from "@/factory/AbstructFactory.js"
import ProductData  from "@/store/ProductData.js"
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
        nameCategory: this.$route.params.id,
        productData: new ProductData,
        isCreatProduct: false,
        isMobile: Boolean( ( window.innerWidth < 850)),
        isUserWrite: false
      }
    },
    methods: {
      getAbstactFactory() {
        return AbstactFactory
      },
      clickCreateProduct() {
        //this.productData.writeProduct( { name: "123" } )
        console.log( this.productData );
        this.nameCategory = this.$route.params.id
        this.isCreatProduct = true
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
