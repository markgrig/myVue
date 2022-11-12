<template >
  
  <BlueButton class="but-create"
    @click="clickCreateProduct()" 
    textButton = "Создать товар"> 
  </BlueButton>
     
  <ProductMaker v-if= "isCreatProduct"
  
      :isMobile = "isMobile"
      @deleteProductMaker = "deleteProductMaker"
      :nameCategory = "nameCategory">

  </ProductMaker>

 <div class = "box-product">
    <div
      v-for=" el, key in product[nameCategory]" :key ="key">

        <div class = "view-card">
          <ProductCard
            :usersProduct = "el"
            :isCategoryList = "true">
          </ProductCard>
        </div>
        
    </div>  
  </div>

</template>

<script>

export default {
    name: "Category",
    data() {
      return {
        isCreatProduct: false,
        isMobile: Boolean( ( window.innerWidth < 850)),
        isUserWrite: false
      }
    },
    methods: {
      clickCreateProduct() {  

        this.nameCategory = this.$route.params.id
        this.isCreatProduct = true
      },
      deleteProductMaker() {
        this.isCreatProduct = false
      },
    },
    computed: {
        nameCategory() {
          if ( !this.$route.params.id ) {
            return 
          }
          return this.$route.params.id
        },
    },
    watch:{
      nameCategory() {
          console.log(123);
        
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
    position: relative;
    width: 30vw;
    aspect-ratio: 8 / 5;
    margin-left: 2.2vw;
    margin-bottom: 1.1vw;
}


.view-card > div {
    width: 30vw;
    aspect-ratio: 8 / 5;
    margin: 0 0%;
    font-size: 80%;
}


.but-create{
  position: absolute;
  top: -20vh;
  right: 6px;
}
h1{
  text-align: center;
}

@media (max-width: 700px){


  .view-card {
    width: 94vw;
  }

  .view-card > div {
      width: 94vw;
  }
}


</style>
