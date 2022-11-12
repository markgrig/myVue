<template>
    
    <div class = "overflower"   @click = "userClicked">

        <div class = 'from-and-card' >

            <div class = 'overflower-product-card'
                v-if = "!isHide.card" >

                <ProductCard
                    :isHideCard = "isHide.card"
                    @hideModal= "hideModal"
                    :usersProduct = "productMaker.usersProduct">
                </ProductCard>

            </div>


            <div class= 'overflower-product-form'
                v-if = "!isHide.form" >

                <ProductForm
                    :isHideForm = "isHide.form"
                    @hideModal= "hideModal"
                    @isSuccessFillingForm = "isSuccessFillingForm">
                </ProductForm>
                
                <div class= "div-calc"> 
                    <div :class = "classCalc"> {{ numberOfErrors }} </div>
                </div>
            </div>


            <div  class = 'modal-window return-two-window'

                v-show="( isHide.card || isHide.form ) && !isExit"
                    @click ="returnModal()"> 
                    Вернуть {{ nameDeletemodal }} 
            </div>

        </div>

         <div class="black-window" ></div>

        <h4 class ='modal-window computed-window'>
                {{ getStatusProdaction }}  
        </h4>


        <ImageCropper 

                v-if = "productMaker.imageSettings.isOpenSetting"   
                    :setting = "productMaker.imageSettings.settingMember" 
                    :src = "productMaker.usersProduct.totalProperty.image.src"
                    @hideModalPicture = "hideModal">
                
        </ImageCropper>
    
        <TestExit

                v-if: ='isExit'
                    @userNotLeave = "userNotLeave"
                    @userLeave = "userLeave">
            
        </TestExit>
        
    
    </div>


</template>

<script>
import { provide, reactive } from 'vue'
import *  as AbstactFactory from "@/factory/AbstructFactory.js"

export default {
    name: "ProductMaker",
    setup() {
        const productMaker =  reactive( { 
            usersProduct: AbstactFactory.createProduct(""),
            imageSettings: { 
                    style: {},
                    settingMember: {},
                    isOpenSetting: false,
                    isNewImage: true
            } 
        })

        const updateUsersProduct = (inputedValue, typeProperty,  field) => { 

            if ( field == "name" ) {

                productMaker.usersProduct[typeProperty][field] = inputedValue;
                productMaker.usersProduct[typeProperty][field] = productMaker.usersProduct.checkQualityName()
            }
            if ( field === "price" ) {

                productMaker.usersProduct[typeProperty][field]  = inputedValue;
                productMaker.usersProduct[typeProperty][field]  = productMaker.usersProduct.checkQualityPrice()
            }
            if ( field === "info" ) {

                productMaker.usersProduct[typeProperty][field]  = inputedValue;
                productMaker.usersProduct[typeProperty][field]  = productMaker.usersProduct.checkQualityInfo()
            }

            if ( field === "file" ) {

                productMaker.usersProduct[typeProperty].image[field] = inputedValue;
                productMaker.usersProduct[typeProperty].image[field] =  productMaker.usersProduct.checkQualityImage()
                productMaker.imageSettings.isNewImage = true
            }

        }

        
        const updateSettings = (field, style, settingMember) =>  {
            productMaker.usersProduct.totalProperty.image.style = style
            productMaker[field].style = style 
            productMaker[field].settingMember = settingMember
            productMaker[field].isOpenSetting  = false
        }

        const openSettings = (field, target) =>  {

            

            if ( target.closest(".from-and-card") ) {
                
                target.closest(".from-and-card").classList.remove("opacityModalEnter")
                target.closest(".from-and-card").classList.add("opacityModalLeave")

            }

            setTimeout(()=> {
                productMaker[field].isOpenSetting  = true 
            }, 50)
        }

        provide('usersProduct', productMaker.usersProduct)
        provide('updateUsersProduct', updateUsersProduct)

        provide('imageSettings', productMaker.imageSettings)
        provide('updateSettings', updateSettings)
        provide('openSettings', openSettings)

        return { productMaker }

    },
    props: {
        productData: String,
        nameCategory: String,
        isMobile: Boolean,
    },
    data() {
        return {
            isHide: {
                card: false,
                form: false,
            },
            nameDeletemodal: "",
            isExit: false,
            classCalc: "calcValidation",
            productDataObject: this.productData
        }
    },
    methods: {
        returnModal() {

            this.isHide.form = false
            this.isHide.card = false

        },
        hideModal( nameModal, status , target ){

             if ( nameModal === "card" && status === true) {
                this.isHide.card = true    
                this.nameDeletemodal = " демонстрационное окно"
            }

            if ( nameModal === "form" && status === true) {
                this.isHide.form = true    
                this.nameDeletemodal = " окно для заполнения"
            }

            if (  this.isHide.form &&  this.isHide.card) {
                this.isExit = true
            }

            if ( nameModal === "image-cropper" && status === true) {
                this.isHide.imageCropper = true
                
                this.productMaker.imageSettings.isNewImage = false
        
                target.querySelector(".from-and-card").classList.remove("opacityModalLeave")
                target.querySelector(".from-and-card").classList.add("opacityModalEnter")
                
            }
        },
        async isSuccessFillingForm() {

            const isSuccess = Object
                                    .values(  this.productMaker.usersProduct.totalProperty.success )
                                    .every( (element) => {
                                        return element.status === true
                                    });
            
            if ( isSuccess ) { 

                const urlImg =  await this.uploadFile( this.productMaker.usersProduct.totalProperty.image.file, this.nameCategory )
            
                if (  this.productMaker.imageSettings.style.backgroud ) {
                    this.productMaker.imageSettings.style.background = this.productMaker.imageSettings.style.background
                    .replace(this.productMaker.usersProduct.totalProperty.image.src,  urlImg)
                } else {
                    this.productMaker.imageSettings.style.background = `url(${urlImg}) no-repeat 50% 50% / 100% auto`
                }

                this.productMaker.usersProduct.totalProperty.image.style = this.productMaker.imageSettings.style  || {}
                
                this.writeProduct( this.productMaker.usersProduct , this.nameCategory ) 
                this.userLeave()

            } else {
                this.classCalc =  "calcValidation red-color"
                setTimeout( ()=> { this.classCalc = "calcValidation" }, 2000 )
            }

        },
        userNotLeave() {
            this.isExit = false
            this.returnModal()
        },
        userLeave(){
            this.isExit = false
            this.$emit( 'deleteProductMaker', true)
        },
        
    },
    computed: {
        getStatusProdaction() {
            if ( this.productMaker.imageSettings.isOpenSetting ) {
                return ""
            }
            if (   this.isHide.card && this.isHide.form ) {
                return "Вы уверены, что не хотите добавлять продукт?"
            }
            if (   this.isHide.form ) {
                return "Сейчас вы можете сконцетрироваться на карточке продукта"
            }
            if (   this.isHide.card  ) {
                return "Сейчас вы можете сконцетрироваться на заполнении полей"
            }
            return "Сейчас вы можите наблюдать за карточкой и заполнять её"
            },
        numberOfErrors() {
            
            const number = Object.values( this.productMaker.usersProduct.totalProperty.success)
                .filter( el => !el.status)
                .reduce( acc=> { return acc+1 }, 0 )
        
            return `Число незаполненыйх полей: ${number}`
        },
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
body, html {
    width: 100%;
    height:  100%;
    overflow-x: hidden;
    overflow: hidden;
}

</style>
<style scoped>

.from-and-card {
    opacity: 1;
    display: flex;
    width: 100%;
    height: 100%;
}

.overflower {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;    
}
.black-window {
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.98);
    width: 100%;
    z-index: 0;
    height: 100vh;
}

.overflower-product-card {
    position: relative;
    width: 60%;
    height: 100%;
    
    display: block;
    margin: auto;
}

.overflower-product-form {
    position: relative;
    width: 40%;
    height: 100%;

    display: block;
    margin: auto;
}

.modal-window {
    z-index: 2;
    position: absolute;
    border-radius: 10px;
    border: solid 3px rgb(234, 194, 114);
    box-shadow: 0px 1px 5px 1px rgba(255, 255, 255, 0.343);

}

.computed-window {
    z-index: 0;
    font-size: 125%;
    color: white;
    padding: 3px;
    box-shadow: none;
    border: none;
    width: 97%;
    text-align: center;
    height: 3%;
    top: 2vw ;
}


.return-two-window {
    
    box-sizing: border-box;
    font-size: 100%;
    text-align: center;
    color: white;
    padding: 0.5% 1%;

    left: 40%;
    bottom: 2%;
    width: 20%;
    height: max-content;
}


.return-two-window:hover {
    transition: 0.7s;
    box-shadow: 0px 0px 10px 2px rgb(136, 133, 133);
}


.calcValidation {
    position: absolute;
    z-index: 4;
    width: 80%;
    left: 10%;
    top: 10%;


    text-align: center;
    color: white;
  
}

.red-color {
    color: red;

    animation: red-color 2s ease-in;
}

@keyframes red-color {
    0%   { color:white }
    50%  {  color:rgb(238, 58, 58); font-size: 1.51vw;  }
    100% { color:white }
}


.opacityModalLeave {
  opacity: 0.9; 
  transition: 0.5s ease-in-out;
}

.opacityModalEnter {
  opacity: 1;
  transition: 0.1s ease-in-out; 
}

@media (max-width: 700px){

.black-window{
    height: 100vh;
}

.from-and-card {
    display: flex;
    flex-direction: column;
    padding-top: 7%;
    width: 100%;
    height: 75%;
}


.overflower-product-card {
    position: relative;
    width: 98%;
    height: 35%;
}

.overflower-product-form {
    position: relative;
    width: 98%;
    height: 65%;
}

.return-two-window   {

    left: 10%;
    top: 25vw;

    width: 80%;

    height: 12vw;
    padding: 3vw;
}

.computed-window {
    font-size: 70%;
}

.calcValidation {
    width: 80%;
    left: 10%;
    top: 115vw;
}

}


</style>
