<template >

 <div class = "main-pannel">
  
<h3 class = "topic-mp">  Панель управления </h3>
    <div>
      <div class="div-main-pannel">
      <BlueButton 
        class="but-create"
        @click="clickCreateProduct()" 
        textButton = "Создать товар"> 
      </BlueButton>
    </div>
      <div class="div-main-pannel">
        <BlueButton 
          class="but-create"
          @click="goToHome()" 
          textButton = "На главную"> 
        </BlueButton>
      </div>

      <div class="div-main-pannel">
        <div class ="ico-box"
          v-if="canChangeTypeCard">

          <CustomIco
                    :src = "src.changeTypeCard"
                    @userClickedOnIco = "changeTypeCard()"
                    :textPlaceholder =    "placeholder.changeTypeCard">
          </CustomIco>
        </div>
      </div>
    </div>
    </div>
  

  <ProductMaker v-if= "isCreatProduct"
      @deleteProductMaker = "deleteProductMaker"
      :store = 'this.$store'
      :nameCategorys = "nameCategory"
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
            :keyProduct  = "Number(key)" 
            :usersProduct = "el"
            :isCategoryList = "true">
          </ProductCard>
        
          <br>
        </div>
        
    </div> 

  
      <ErrorCard
        :textErrors = "textError"
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
      goToHome() {
        const url = `/`
        this.$router.push({ path: url })
      }
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
            return { 
              "view-card": `view-card vc-${this.typeCard}`,
            }    
              
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

.topic-mp{
  padding:  4px 10px;
  text-align: center;
  color: black;
  filter: drop-shadow(0px 0px 1px rgb(255, 255, 255));
}

.main-pannel div {
  position: relative;
  display: flex;
  width: max-content;
  margin: auto;
}

.main-pannel {
  position: relative;
  width: 90%;
  margin: 10px auto;
  padding-top: 6px;
  padding-bottom: 15px;
  background-color: rgba(130, 190, 249, 0.615);
  filter: drop-shadow(0px 0px 4px rgb(255, 255, 255));
  border-radius: 4px;
  border: solid 2px rgb(5, 13, 248);
}

.div-main-pannel {
  padding: 0 15px;
}

.ico-box{
  box-sizing: border-box;
  width: 50px;
  max-width: 50px;
  padding-top: 6px;
  position: static;
  
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
    margin-left: 27.5vw;

}


.vc-audioCard {
    width: 45vw;
    aspect-ratio: 8 / 5;
    margin-left: 3vw;
}

.vc-longCard  {
    width: 25vw;
    aspect-ratio: 4 / 7;
    margin-left: 6vw; 
}


.view-card > div {
    width: 100%;
    margin: 0 0%;
}

h1{
  text-align: center;
}

@media (max-width: 700px){

  
    .main-pannel div {
      flex-direction: column;
      font-size: 120%;
    }
    

  .vc-videoCard {
    width: 94vw;
    margin: 2vw;
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
  height: 3px;
}
</style>
