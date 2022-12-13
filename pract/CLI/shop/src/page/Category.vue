<template >


 <div class = "main-pannel">
  <BlueButton class="but-create"
    @click="clickCreateProduct()" 
    textButton = "Создать товар"> 
  </BlueButton>

 <div class ="ico-box"
      v-if="canChangeTypeCard">

  <CustomIco
            :src = "src.changeTypeCard"
            @userClickedOnIco = "changeTypeCard()"
            :textPlaceholder =    "placeholder.changeTypeCard">
  </CustomIco>
 </div>

 </div>
  

  <ProductMaker v-if= "isCreatProduct"
      @deleteProductMaker = "deleteProductMaker"
      :store = 'this.$store'
      :nameCategory = "nameCategory"
      :typeCard = "typeCard"
      :canChangeTypeCard = "canChangeTypeCard"
      @changeTypeCard = "changeTypeCard"
      :necessarilySpecProp = "constants.category[nameCategory].necessarily">

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
        src: {      
          changeTypeCard: require('@/img/change.png'),      
        },
        placeholder: {
          changeTypeCard:  'Переключить тип карточки'
        },
        isCreatProduct: this.$store.state.isReturnMaker[this.$route.params.id],
        isUserWrite: false,
        cardIndex: 0,
        constants: constants
      }
    },
    methods: {
      clickCreateProduct() {  
        this.isCreatProduct = true
      },
      deleteProductMaker() {
        this.isCreatProduct = false
      },
      changeTypeCard() {
        this.cardIndex +=1;
        if ( this.cardIndex === constants.category[this.nameCategory].card.length ) {
          this.cardIndex = 0
        }
      },
    },
    computed: {
      canChangeTypeCard() { 
        if ( this.isNotCategory ) return false
        return constants.category[this.nameCategory].card instanceof Array
      },
      typeCard() {
        if ( this.isNotCategory ) return ""
        
        if ( this.canChangeTypeCard)  {
          return constants.category[this.nameCategory].card[this.cardIndex]
        }

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

.main-pannel {
  width: 20%;
  margin: auto;
  display: flex;
}

.ico-box{
  width: 20%;
  position: relative;
}

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
