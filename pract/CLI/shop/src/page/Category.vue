<template >
 
  <BlueButton class="but-create"
    @click="clickCreateProduct()" 
    textButton = "Создать товар"> 
  </BlueButton>

  <ProductMaker v-if= "isCreatProduct"
      @deleteProductMaker = "deleteProductMaker"
      :store = 'this.$store'
      :nameCategory = "nameCategory"
      :typeCard = "typeCard">

  </ProductMaker>
  
  
  <div class = "box-product">
    <div
      v-for=" el, key in productsByСategory[nameCategory]" :key ="key">

        <div :class = "classList['view-card']">
          <ProductCard
            :typeCard = "typeCard"
            :keyProduct  = "key" 
            :usersProduct = "el"
            :isCategoryList = "true">
          </ProductCard>
        </div>
        
    </div> 

  
      <ErrorCard
        :textError = "textError"
        v-if = "isError">
      </ErrorCard>
     
  </div>
  
  <div>

  </div>
  <div ref = "observer" class="observer"></div>

</template>

<script>
import productData from "@/mixins/ProductDataMixin"
import { constants } from '@/components/Novigation/constants.js'

export default {
    name: "Category",
    mixins: [productData],
    data() {
      return {
        isCreatProduct: this.$store.state.isReturnMaker[this.$route.params.id],
        isUserWrite: false,
      }
    },
    methods: {
      clickCreateProduct() {  
        this.isCreatProduct = true
      },
      deleteProductMaker() {
        this.isCreatProduct = false
      },
    },
    computed: {
      typeCard() {
        if ( this.isNotCategory ) return ""
        return constants.category[this.nameCategory].card 
      },
      classList() {
            return { "view-card": `view-card vc-${this.typeCard}`}    
              
      },
    },
    watch: {
      nameCategory() {
        this.listenNewProduct()
      }
    }
}

</script>

<style>

.box-product{
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: left;
  padding: 2.5vh 0;
}

.view-card {
    z-index: 0;
    position: relative;
    margin-bottom: 10%;
}
.vc-videoCard {
    width: 45vw;
    aspect-ratio: 8 / 8;
    margin-left: 26vw;

}


.vc-audioCard {
    width: 45vw;
    aspect-ratio: 8 / 5;
    margin-left: 2.5vw;
}

.vc-longCard  {
    width: 30vw;
    aspect-ratio: 4 / 6;
    margin-left: 2vw; 
}


.view-card > div {
    width: 100%;
    margin: 0 0%;
}

h1{
  text-align: center;
}

@media (max-width: 700px){


  .vc-videoCard {
    width: 94vw;
    font-size: 150%;
  }

  .vc-audioCard {
    width: 94vw;
    font-size: 110%;
  }
  

  .vc-longCard  {
    width: 80vw;
    margin-left: 8vw;

    font-size: 180%;
  }


}

.observer {
  height: 30px;
  background-color: green;
}
</style>
