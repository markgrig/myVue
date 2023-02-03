<template>
    
    <div class = "overflower"   @click = "userClicked">

        <div class = 'from-and-card' >
            
            <div class = 'overflower-product-card'
                v-if = "!isHide.card" >
        
                <ProductCard
                    :typeCard = "typeCard"
                    :keyProduct  = "0" 
                    :isHideCard = "isHide.card"
                    :aspectRatioImage = "aspectRatioImage"
                    @hideModal= "hideModal"
                    :usersProduct = "productMaker.usersProduct">
                </ProductCard>

            </div>


            <div class= 'overflower-product-form'
                v-if = "!isHide.form" >

                <ProductForm
                    :typeCard = "typeCard"
                    :isHideForm = "isHide.form"
                    :canChangeTypeCard = "canChangeTypeCard"
                    @hideModal= "hideModal"
                    @isSuccessFillingForm = "isSuccessFillingForm"
                    @changeTypeCard = "changeTypeCard">
                </ProductForm>
                
                <div class= "div-calc"> 
                    <div :class = "classCalc"> {{ getNumberOfErrors }} </div>
                </div>
            </div>


            <div  class = 'modal-window return-two-window'

                v-show="( isHide.card || isHide.form ) && !isExit"
                    @click ="returnModal()"> 
                    Вернуть {{ nameDeletemodal }}  
            </div>

            <div class = "but-exit">
            <BlueButton
                @click="testExit"
                v-if = "!isExit" 
                textButton = "Выйти"
                >
                </BlueButton>    
            </div>
        </div>
        
         <div class="black-window" ></div>
        
        <h4 class ='modal-window computed-window'>
            {{ getStatusProdaction }}
        </h4>

    
        <TestExit

                v-if: ='isExit'
                    @userNotLeave = "userNotLeave"
                    @userLeave = "userLeave">
            
        </TestExit>
        


        <ImageCropper

            v-if = "productMaker.imageSettings.isOpen"   
                :setting = "productMaker.imageSettings.data" 
                :aspectRatioImage = "aspectRatioImage"
                :src = "productMaker.usersProduct.totalProperty.image.src"
                @returnSettings =  "updateMaker"
                @hideModalPicture = "closeNewModal">

        </ImageCropper>

        <CustomForm
            v-if = "productMaker.additionalForm.isOpen"
                :typeProperty = "'specificProperty'"
                
                :arrayInput = "productMaker.additionalForm.data"
                :nameProperty = "productMaker.additionalForm.name"
                @hideModalPicture = "closeNewModal"
                @userInput = "updateUsersProduct">

        </CustomForm>
        
        
        

    </div>


</template>

<script>
import { provide, reactive } from 'vue'
import *  as AbstactFactory from "@/factory/AbstructFactory.js"

export default {
    name: "ProductMaker",
    props: {
        productData: String,
        typeCard: String,
        store: Object,
        canChangeTypeCard: Boolean,
        nameCategorys: String,
        necessarilySpecProp: Object
    },
    setup(props) {

        let product = {}
        
        if ( props.store.state.isReturnMaker[props.nameCategorys] ) {
            product = reactive(  props.store.state.product[props.nameCategorys])
        } else {
            product = reactive( AbstactFactory.createProduct(props.typeCard))
        }
        
        const productMaker =  reactive( { 
            usersProduct: reactive( product),
            imageSettings: { 
                isOpen: false,
                data: {},
                name: "image",
                
                isNewImage: true,
                style: {},

            },
            additionalForm: {
                isOpen: false,
                data: [],
                name: "form",
            },
           
        })

       
        const updateUsersProduct = (inputedValue, typeProperty,  field, subfield) => { 

            if ( field === "name" ||  field === "price" ||  field === "info"  ) {
                
                productMaker.usersProduct[typeProperty][field] = inputedValue;
                productMaker.usersProduct[typeProperty][field] = productMaker.usersProduct.checkQuality(field)
            }

            if ( field === "image" ||  field === "audio" ||  field === "video"  ) {
                
                productMaker.usersProduct[typeProperty][field][subfield] = inputedValue;
                productMaker.usersProduct[typeProperty][field].src =  productMaker.usersProduct.checkQuality(field)

                if (field === "image" ) { productMaker.imageSettings.isNewImage = true }
            }



            if ( field === "contact") {
                productMaker.usersProduct[typeProperty][field][subfield] = inputedValue;
                productMaker.usersProduct[typeProperty][field] = productMaker.usersProduct.checkQuality(field, subfield)
            }            
        }

        
        const updateMaker = (field, data, name, param) =>  {
            
            
            productMaker[field].data = data 
            productMaker[field].name = name 

            if ( field === "imageSettings" ) {
 
                productMaker.usersProduct.totalProperty.image.style = param
                productMaker[field].style = param
            
            }
            
        }

        const openNewModal = (field, target) =>  {

            productMaker[field].isOpen  = true 

            const formAndCard = target.closest(".from-and-card")
            formAndCard.classList.remove("opacityModalEnter")
            formAndCard.classList.add("opacityModalLeave")
            
            
        }

        const closeNewModal = (field, target) =>  {
            
            productMaker[field].isOpen  = false 

            const formAndCard = target.closest(".overflower").querySelector(".from-and-card")
            formAndCard.classList.remove("opacityModalLeave")
            formAndCard.classList.add("opacityModalEnter")  

            if ( field === "imageSettings" ) {
                productMaker.imageSettings.isNewImage = false
            }
            
        }

        provide('productMaker', productMaker)
        provide('updateUsersProduct', updateUsersProduct)

        provide('imageSettings', productMaker.imageSettings)
        provide('additionalForm', productMaker.additionalForm)
        provide('updateMaker', updateMaker)

        provide('openNewModal', openNewModal)
        provide('closeNewModal', closeNewModal)

        return { 
            productMaker,
            updateUsersProduct,
            updateMaker,
            closeNewModal,
        }

    },
    mounted() {
        //this.productMaker.usersProduct =  AbstactFactory.createProduct(this.typeCard)
    },
    data() {
        return {
            isHide: {
                card: false,
                form: false,
            },
            cardIndex: 0,
            nameDeletemodal: "",
            isExit: false,
            classCalc: "calcValidation",
            emptyFields:  "",
            productDataObject: this.productData
        }
    },
    methods: {
        changeTypeCard() {
            this.$emit('changeTypeCard')
        },
        returnModal() {

            this.isHide.form = false
            this.isHide.card = false

        },
        hideModal( nameModal, status ){

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
       
        },
        async isSuccessFillingForm() {
            
            const successTotalProperty = this.productMaker.usersProduct.totalProperty.success
            const successSpecificProperty = this.productMaker.usersProduct.specificProperty.success
            const successContact = this.productMaker.usersProduct.specificProperty.success.contact.status

            const isSuccessTotal = Object
                                    .values(  successTotalProperty)
                                    .every( (element) => {
                                        return element.status === true
                                    });

            const isSuccessSpecial =  this.necessarilySpecProp
                                        .every( (element) => {
                                            return successSpecificProperty[element].status === true
                                    });

            const isSuccsecOneOfContact = Object
                                                .values(successContact)
                                                .some( (element) => {
                                                    return element === true
                                                });

            let message
            isSuccsecOneOfContact ? message = '' : message = "one contact"
            this.emptyFields  = [

                                ...Object
                                    .keys( successTotalProperty )
                                    .filter( key => successTotalProperty[key].status === false ),

                                ...this.necessarilySpecProp
                                    .filter( key =>  successSpecificProperty[key].status === false ),
                                    
                                message,
                               
                                     
                                ].join(" | ")
                                

            const isSuccess = isSuccessTotal && isSuccessSpecial && isSuccsecOneOfContact            
                                    
            
            if ( isSuccess ) { 

                const urlImg =  await this.uploadFile( this.productMaker.usersProduct.totalProperty.image.file, "productImage", this.typeCard )
                
                if (  this.productMaker.imageSettings.style.background ) {

                    this.productMaker.imageSettings.style.background = this.productMaker.imageSettings.style.background
                    .replace(this.productMaker.usersProduct.totalProperty.image.src,  urlImg)

                } else {
                    this.productMaker.imageSettings.style.background = `url(${urlImg}) no-repeat 50% 50% / 100% auto`
                }

                this.productMaker.usersProduct.totalProperty.image.src = urlImg
                this.productMaker.usersProduct.totalProperty.image.style = this.productMaker.imageSettings.style  || {}

                if (  this.productMaker.usersProduct.specificProperty?.audio?.src ) {

                    const urlAudio =  await this.uploadFile( this.productMaker.usersProduct.specificProperty.audio.file, "productAudio", this.typeCard )
                    this.productMaker.usersProduct.specificProperty.audio.src = urlAudio
                }

                delete this.productMaker.usersProduct.checkQualityFun;
             
                Object.keys( this.productMaker.usersProduct.totalProperty.success ).forEach( ()=>{
                    this.productMaker.usersProduct.totalProperty.success.value = ""
                })

                Object.keys(  this.productMaker.usersProduct.specificProperty.success ).forEach( ()=>{
                    this.productMaker.usersProduct.specificProperty.success.value = ""
                })
            
                this.writeProduct( this.productMaker.usersProduct , this.$route.params.id ) 
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
        testExit() {

            Object.keys( this.isHide).forEach((key)=>{
                this.isHide[key] = true
            })
            
            this.isExit = true
        }
        
    },
    computed: {
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
        getStatusProdaction() {
            if ( this.productMaker.additionalForm.isOpen ) {
                return "Заполните дополнительную форму"
            }
            if ( this.productMaker.imageSettings.isOpen ) {
                return "Настройте изображение"
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
            return "Заполните основные поля, наблюдая за карточкой"
            },
        getNumberOfErrors() {      
            if (!this.emptyFields) { return "" }  
            return `Добавьте: ${this.emptyFields}`
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
    aspect-ratio: 1/1;
    
    display: block;
    margin: auto;
}

.overflower-product-form {
    position: relative;
    width: 40%;
    aspect-ratio: 1/1;

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
    top: 5.5vw;
    font-size: 100%;


    text-align: center;
    color: white;
  
}

.red-color {
    color: red;

    animation: red-color 2s ease-in;
}

@keyframes red-color {
    0%   { color:white }
    50%  {  color:rgb(238, 58, 58); font-size: 101%;  }
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

.but-exit{
    z-index: 10;
    position: absolute;
    right: 2%;
    top: 2%;
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
    z-index: 200;
    position: static;
    width: 98%;
    height: max-content;
}

.overflower-product-form {
    position: static;
    width: 98%;
    height: max-content;
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
    font-size:  65%;
    width: 95%;
    left: 2.5%;
    top: 55vh;
}

@keyframes red-color {
    0%   { color:white }
    50%  {  color:rgb(238, 58, 58); font-size: 65%;  }
    100% { color:white }
}


.but-exit{
    position: static;
    width: 100%;
    font-size: 150%;
}

}


</style>
