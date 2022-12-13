<template >
      
      <BlueButton
        @click="clicktoBack()" 
        textButton = "Вернуться назад"> 
      </BlueButton>

      <ErrorCard
         :textError = "textError"
         v-if = "isError">
       </ErrorCard>

      <div class = "page-box">
        <h2 class = "topic-page-box">  Страница товара </h2>
      <div class = "flex-page">
        <ImageView

          :isPage  = 'true'
          :typeCard = "typeCard"
          :isCategoryList = "true"
          :srcImageUsersProduct = "product?.totalProperty.image.src"
          :usersStyle = "product?.totalProperty.image.style"
          :aspectRatioImage = "aspectRatioImage"
          
          isImageSuccess = ""
          valueError = "">
        </ImageView>

        <div class= "left-list">

          <h2 class = "topic-page">  Наименование: </h2>
          <NameView
            :isPage  = 'true'
            :nameUsersProduct = "product?.totalProperty.name"
            isNameSuccess = ''
            valueError = ''    
            >
          </NameView>

          <h2 class = "topic-page">  Цeна: </h2>

          <PriceView
              :isPage  = 'true'
              :priceUsersProduct = "product?.totalProperty.price"
              isPriceSuccess = ''
              valueError = ''   
              >
          </PriceView>
          
          <ConactView
            :isPage  = 'true'
            :contact = "product?.specificProperty.contact"   
            >
          </ConactView>
        </div>

        
      </div>

      
      <InfoView
        :isPage  = 'true'
        :isCategoryList = "isCategoryList" 
        :typeCard = "typeCard"
        :infoUsersProduct = "product?.totalProperty.info"
        :srcImageUsersProduct = "product?.totalProperty.image.src"
        :aspectRatioImage = "aspectRatioImage"
        :usersStyle = "product?.totalProperty.image.style"

        isInfoSuccess = ''
        valueError = ''>
      </InfoView>

  

       
      <h2 class = "topic-page-box">  Категория: </h2>
      <h2 class = "el-page-box">  {{ nameCategoryRUS }} </h2>
      <AudioView
            v-if = "isShowPlayer.audio" 
            :isPage  = 'true'
            :audioUrl = "product?.specificProperty?.audio?.src">

        </AudioView>
        
        <VideoView
            v-if = "isShowPlayer.video" 
                :isPage  = 'true'
                :isCategoryList = "true"
                :videoUrl = "product?.specificProperty?.video?.src"
                :usersStyle = "product?.totalProperty.image.style"
                :aspectRatioImage = "aspectRatioImage"
                :onVideo = "true"
                @offVideo = "offVideo">
        </VideoView>

      </div>

       
      
 </template>
 
 <script>
 import productData from "@/mixins/ProductDataMixin"
 import { constants } from '@/components/Novigation/constants.js'
 
 export default {
    name: "Product",
    mixins: [productData],
    mounted() {

      if ( this.idProduct === "newProduct" ) { 

        this.productsByСategory[this.nameCategory][this.idProduct]  = this.$store.state.product[this.nameCategory];
        this.$store.commit('returnMaker', this.nameCategory )
       
      } else {

        this.getNewProduct(this.idProduct)
      }

    },
    computed: {
      product() {
        return this.productsByСategory[this.nameCategory][this.idProduct] 
      },
      typeCard() {
            if ( this.isNotCategory ) return ""
            return constants.category[this.nameCategory].card 
      },
      nameCategoryRUS() {
            if ( this.isNotCategory ) return ""
            return constants.category[this.nameCategory].name 
      },
      aspectRatioImage() {
            switch (this.typeCard) {
              case "videoCard":

                  return '720 / 480'
              
              case "audioCard":
              
                  return '1/1'

              case "longCard":
              
                  return '80 / 110'
            
              default:
                  return '1/1'
            }
      },
      isShowPlayer() {
                return {
                    audio: this.product?.specificProperty?.audio?.src || false,
                    video: this.product?.specificProperty?.video?.src || false
                }
            }
    },
    watch: {
        isShowPlayer:  function (newObj) {
                    
                    if ( newObj.video ) {
                        this.isShowPlayer.video = true
                    }

                    if ( newObj.audio ) {
                        this.isShowPlayer.audio = true
                    }   

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

.flex-page {
  display: flex;
  padding: 4% 0 ;
}
.page-box {
  position: relative;
  box-sizing: border-box;
  width: 80%;
  margin: 2% 10%;
  padding: 5%;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  border: solid 3px saddlebrown;
}

.el-page-box{

  width: max-content;
  margin: auto;
  margin-bottom: 5%;
  padding: 1% 5%;

  border-radius: 20px;
  background-color: rgba(0, 255, 51, 0.08);
  border: solid 2px rgb(48, 154, 9);
  color: rgb(0, 174, 255);

  font-size: 150%;
  text-align: center;
}

.topic-page-box{

  text-align: center;
  font-size: 180%;
  padding-top: 4%;
  padding-bottom: 1%;
}

.topic-page{
    text-align: center;
}


.left-list {
  position: relative;
  width: max-content;
  min-width: 30%;
  padding: auto 0;
  margin: auto;
}
 
 
 @media (max-width: 700px){
 
 
 }
 </style>
 