<template >
      
      <div class = "main-pannel">
  
        <h3 class = "topic-mp">  Панель управления </h3>

          <div class="div-main-pannel">
            <BlueButton 
              @click="clicktoBack()" 
              textButton = "Вернуться назад"> 
            </BlueButton>
          </div>
        
      </div>

      <ErrorCard
         :textErrors = "textError"
         v-if = "isError">
       </ErrorCard>

      <div class = "page-box">
        <h2 class = "topic-page-box">  {{ namePage }} </h2>
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

          <h2 class = "topic-page">  {{ topics.name }} </h2>
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
            :topics = "topicsContact"   
            >
          </ConactView>
        </div>

        
      </div>

      
      <InfoView
        :isPage  = 'true'
        :isCategoryList = "true" 
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
            :isShowPlayer = "isShowPlayer.audio"
            :isPage  = 'true'
            :isAudioSuccess = "true"
            :audioUrl = "product?.specificProperty?.audio?.src">

        </AudioView>
        
        <VideoView
            v-if = "isShowPlayer.video" 
                :isPage  = 'true'
                :isCategoryList = "true"
                :videoUrl = "product?.specificProperty?.video?.src"
                :usersStyle = "product?.totalProperty.image.style"
                :aspectRatioImage = "aspectRatioImage"
                :onVideo = "true" >
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
      namePage(){
        if ( Number(this.idProduct)) {
          return this.topics.product
        }
        return "Новый товар"
      },
      product() {
        return this.productsByСategory[this.nameCategory][this.idProduct] 
      },
      typeCard() {
            if ( this.isNotCategory ) return ""

            const typeCard = constants.category[this.nameCategory].card
            
            if ( typeCard instanceof Array ) { 
              return typeCard[0] 
            } 
            else {
              return typeCard
            }   

      },
      nameCategoryRUS() {
            if ( this.isNotCategory ) return ""
            return constants.category[this.nameCategory].name 
      },
      topics() {
            return constants.category[this.nameCategory].topics 
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

.main-pannel div {
  position: relative;
  display: flex;
  width: max-content;
  margin: auto;
}

.div-main-pannel {
  margin:  0 15px;
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

.flex-page {
  display: flex;
  padding: 4% 0 ;
}
.page-box {
  position: relative;
  box-sizing: border-box;
  width: 70%;
  margin: 2% auto;
  padding: 5%;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  border: solid 3px saddlebrown;
  box-shadow:  0 1px 20px 2px white;
}

.el-page-box{

  width: max-content;
  margin: auto;
  margin-bottom: 40px;

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
  filter: drop-shadow(0px 2px 1px rgb(109, 109, 109));
}

.topic-page{
    text-align: center;
    filter: drop-shadow(0px 2px 1px rgb(109, 109, 109));
}


.left-list {
  position: relative;
  width: max-content;
  min-width: 30%;
  padding: auto 0;
  margin: auto;
}
 
 
 @media (max-width: 700px){
  .main-pannel div {
    flex-direction: column;
    font-size: 120%;
  }

  .page-box {
    width: 95%;
  }

  .flex-page {
    flex-direction: column;
  }
  .el-page-box{
    font-size: 100%;
  }

  .topic-page{
    margin: 5px;
    font-size: 110%;
  }
  .topic-page-box{
    font-size: 120%;
  }
 
 }
 </style>
 