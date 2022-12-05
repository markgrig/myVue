<template >
  
  <BlueButton class="but-create"
    @click="clickCreateProduct()" 
    textButton = "Создать товар"> 
  </BlueButton>
     
  <ProductMaker v-if= "isCreatProduct"
      @deleteProductMaker = "deleteProductMaker"
      :nameCategory = "nameCategory">

  </ProductMaker>
  
  <div class = "box-product">
    <div
      v-for=" el, key in product[nameCategory]" :key ="key">

        <div :class = "classList['view-card']">
          <ProductCard
            :usersProduct = "el"
            :isCategoryList = "true">
          </ProductCard>
        </div>
        
    </div> 
    
   
  </div>
  
  <div>

  </div>
  <div ref = "observer" class="observer"></div>

</template>

<script>
import productData from "@/mixins/ProductDataMixin"

export default {
    name: "Category",
    mixins: [productData],
    data() {
      return {
        isCreatProduct: false,
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
        nameCategory() {
          this.listenNewProduct()
          return this.$route.params.id
        },
        classList() {
              return { "view-card": `view-card vc-${this.nameCategory}`}    
               
        },
    },
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
.vc-video {
    width: 45vw;
    aspect-ratio: 8 / 8;
    margin-left: 26vw;

}


.vc-music_instrument {
    width: 45vw;
    aspect-ratio: 8 / 5;
    margin-left: 2.5vw;
}

.vc-clothes {
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


  .vc-video {
    width: 94vw;
    font-size: 150%;
  }

  .vc-music_instrument {
    width: 94vw;
    font-size: 110%;
  }
  

  .vc-clothes {
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
