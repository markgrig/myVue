<template>
    
    <div class = "overflower">

        <div  @click = "userClicked">
        <div class="black-window" ></div>


    <div class = "from-and-card" >

        <h4  class="modal-window computed-window " >
         {{ getStatusProdaction }}  
        </h4>

    <div class="modal-window rproduct-cad" 
        :style="{ 
                margin: modalFormMargin , 
                display: modalFormDisplay,
                width: modalFormWidth,
                height: modalFormHeight , 
                }">

        <div class="cross" 
            @:click="deleteModal($event)"> &#10006; 
        </div>

        <TotalPropertyView 
            :isMobile = "isMobile"

            :nameUsersProduct = "usersProduct.totalProperty.name"
            :priceUsersProduct = "usersProduct.totalProperty.price"
            :infoUsersProduct = "usersProduct.totalProperty.info"
            :srcImageUsersProduct = "usersProduct.totalProperty.image.src"
            :styleProductPicture = "styleProductPicture" 
            :isHideModalPicture = "isHideModalPicture"
            :isStyleChange = "isStyleChange"

            :isNameSuccess =  "usersProduct.success.name"
            :isPriceSuccess =  "usersProduct.success.price"
            :isInfoSuccess =  "usersProduct.success.info"
            >
        </TotalPropertyView>

        <SpecificPropertyView >
        </SpecificPropertyView>

        <div> 
                <div :class = "classCalc"> {{  numberOfErrors }} </div>
        </div>
    </div>

    <div
     
        class="modal-window product-form" 
        :style="{ margin : modalCardMargin, 
                  display:  modalCardDisplay,
                  width: modalCardWidth,
                  height: modalCardHeight , 
                }"
    >
                
        <div class="cross" 
            @:click="deleteModal($event);"
            > &#10006;
         </div>

        <TotalPropertyForm

            :isMobile = "isMobile"
            :isUserTouched = "isUserTouched" q

            @isSuccessFillingForm = "isSuccessFillingForm"
            @userTouchedTextarea = "userTouchedTextarea"
            @userInput = "userInput"
            @userSetStyleImage ="userSetStyleImage"
           >

        </TotalPropertyForm>

        <SpecificPropertyForm></SpecificPropertyForm>
      


    </div>


    <div v-show="modalHide" @click ="returnModal()" class="modal-window return-two-window"> Вернуть {{ nameDeletemodal }} </div>
    
    <div v-show="isExit"  class ="modal-window icons" >
            <div class = "flex-class">
                <div>
                    <img class ="ico-exit" src="@/img/exit.jpg" alt=""  @click ="userLeave()">
                    <h3> Да, я уверен  </h3>
                </div>
                <div>
                    <img class ="ico-noexit" src="@/img/noExit.jpg" alt="" @click ="userNotLeave()">
                    <h3> Нет, я добавлю</h3>
                </div>
            </div>
    </div>
    </div>

    </div>



    
        <ImageCropper 

            v-if = "!isHideModalPicture"
            
                :src = "usersProduct.totalProperty.image.src"
                :koofMember = "koofMember"
                :sliderSartXMember = "sliderSartXMember"
                :startImgX = "startImgX"
                :startImgY = "startImgY"
                :startScrollValue = "startScrollValueImg"

                :isHideModalPicture ="isHideModalPicture"

                @setStyleProductPicture = "setStyleProductPicture"
                @hideModalPicture = "hideModalPicture">
                
        </ImageCropper>
    
    


    </div>

</template>

<script>

export default {
    name: "ModalForAddProduct",
    props: {
        productData: Object,
        startCardMargin: String,
        centralCardMargin: String,
        startFormMargin: String,
        centralFormMargin: String,
        modalCardWidth: String,
        modalCardHeight: String,
        modalFormWidth: String,
        modalFormHeight: String,
        isMobile: Boolean,
        getAbstactFactory: Function,
        
    },
    data() {
        return {
            isHideModalPicture: true,
            isStyleChange: false,
            modalCardMargin: this.startCardMargin,
            modalFormMargin: this.startFormMargin,
            styleProductPicture: {},
            modalCardDisplay: "",
            modalFormDisplay: "",
            nameDeletemodal: "",
            classCalc: "calcValidation",
            modalHide: false,
            isExit: false,
            isUserTouched: false,
            usersProduct: this.getAbstactFactory().createProduct(""),
            productFormDOM: "",
            koofMember: 0,
            sliderSartX: 0,
            startImgX: 0,
            startImgY: 0,
            startScrollValueImg: 1
            
        }
    },
    methods: {
        deleteModal(event) {

            
            if (  event.target.parentNode.className === "modal-window product-card"  ) {
    
                this.modalFormDisplay = "none"
                this.modalCardMargin = this.centralCardMargin
                this.nameDeletemodal = "демонстрационное окно"
}

            if ( event.target.parentNode.className === "modal-window product-form" ) {
                
                this.modalCardDisplay = "none"
                this.modalFormMargin = this.centralFormMargin
                this.nameDeletemodal = "oкно с вводом данных"
            }
            
            
          
            this.modalHide = true
            
            if (  this.modalFormMargin === this.centralFormMargin &&  this.modalCardMargin === this.centralCardMargin ) {
                this.isExit = true
                this.modalHide = false
            }
            
           
        },
        returnModal() {
            this.modalCardMargin = this.startCardMargin
            this.modalFormMargin = this.startFormMargin
            this.modalCardDisplay = ""
            this.modalFormDisplay = ""
            this.modalHide = false
           
        },

        setStyleProductPicture( style , koof , sliderStartX , memberX, memberY, scrollValueImg   ) {
            
            this.styleProductPicture = style
            this.koofMember = koof
            this.sliderSartXMember = sliderStartX
            this.startImgX =  memberX
            this.startImgY = memberY
            this.startScrollValueImg = scrollValueImg
            
            this.isStyleChange = true
            
        },
        hideModalPicture( target, status) {
            
            
            this.isHideModalPicture = status
            target.querySelector(".from-and-card").classList.remove("opacityModalLeave")
            target.querySelector(".from-and-card").classList.add("opacityModalEnter")
            
        
        },
        userNotLeave() {
            this.isExit = false
            this.returnModal()
        },
        userLeave(){
            this.isExit = false
            this.$emit( 'deleteModalWindow')
        },
        userTouchedTextarea(status) {

            if ( this.modalCardMargin !== this.centralCardMargin ) {
                if ( !this.productFormDOM ) { this.productFormDOM  = document.querySelector( ".product-form")}

            this.isUserTouched = status

            this.productFormDOM.style.opacity = "0" 
            }
         
        
        },
        userClicked(event) {

            if ( event.target.tagName !== "TEXTAREA" && this.isUserTouched ) {

                    this.productFormDOM.style.opacity = "1" 
                    this.isUserTouched = false
                }
        },
        userInput( property , value  ) {
            
            if ( property == "name" ) {
                this.usersProduct.totalProperty[property] = value;
                this.usersProduct.totalProperty.name = this.usersProduct.checkQualityName()
            }
            if ( property === "price" ) {
                this.usersProduct.totalProperty[property] = value;
                this.usersProduct.totalProperty.price = this.usersProduct.checkQualityPrice()
            }
            if ( property === "info" ) {
                this.usersProduct.totalProperty[property] = value;
                this.usersProduct.totalProperty.info = this.usersProduct.checkQualityInfo()
            }
            if ( property === "file" ) {
                this.usersProduct.totalProperty.image[property] = value;
               
                this.usersProduct.totalProperty.image.file = this.usersProduct.checkQualityImage()
                this.styleProductPicture = this.newStyleProductPicture()

                this.isStyleChange = false
            }
 
        },
        async isSuccessFillingForm() {
            
            const isSuccess = Object.values(  this.usersProduct.success ).every( (element) => {
                return element.status === true
            });
            
            if ( isSuccess ) { 

                const urlImg =  await this.productData.uploadFile( this.usersProduct.totalProperty.image.file )
                this.usersProduct.totalProperty.image = urlImg

                this.productData.writeProduct( this.usersProduct.totalProperty ) 
                this.userLeave()

            } else {
                this.classCalc =  "calcValidation red-color"
                setTimeout( ()=> { this.classCalc = "calcValidation" }, 2000 )
            }

        },
        newStyleProductPicture() {
            
            return {
                    'background': `url(${this.usersProduct.totalProperty.image.src}) 
                    no-repeat
                    50% 50% / 100% auto` , 
                }

            
        }
        
    },
    computed: {
        getStatusProdaction() {
            console.log( this.centralCardMargin ,  this.modalFormMargin);
            if (   this.modalFormMargin === this.centralFormMargin &&   this.modalCardMargin === this.centralCardMargin  ) {
                return "Вы уверены, что не хотите добавлять продукт?"
            }
            if (   this.modalFormMargin === this.centralFormMargin ) {
                return "Сейчас вы можете сконцетрироваться на карточке продукта"
            }
            if (   this.modalCardMargin === this.centralCardMargin  ) {
                return "Сейчас вы можете сконцетрироваться на заполнении полей"
            }
            return "Сейчас вы можите наблюдать за карточкой и заполнять её"
            },
        changePositionPicuresInput() {

            if ( this.isMobile ) { 
                const pannelPictures = document.querySelector(".div-picture")
                

                if ( this.modalFormMargin === this.centralFormMargin ||   this.modalCardMargin === this.centralCardMargin ) {
                    if ( pannelPictures ) {
                        pannelPictures.style.top = "10vh"
                    }
                else {
                    if ( pannelPictures ) {
                        pannelPictures.style.top = ""         
                    }
                }
            }
            }   
            return ""
        },
        numberOfErrors() {
    
            const number = Object.values( this.usersProduct.success)
                .filter( el => !el.status)
                .reduce( acc=> { return acc+1 }, 0 )
           
            return `Число незаполненыйх полей: ${number}`
        },
        
    },
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
    opacity: 1    ;
}

.overflower {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    overflow: hidden;
}
.black-window {
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.95);
    width: 100%;
    z-index: 0;
    height: 100%;
}


.computed-window {
    font-size: 1.2vw;
    color: white;
    padding: 3px;
    box-shadow: none;
    border: none;
    width: 100vw;
    text-align: center;
    height: 3%;
    top: 10px;
}


.return-two-window {
    
    font-size: 1vw;
    text-align: center;
    color: white;
    padding: 0.5vw 1vw 0vw 1vw;
    left: 42vw;
    width: 15vw;
    bottom: 6vw;
    height: 2vw;
}

.return-two-window:hover {
    transition: 0.7s;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 2px rgb(136, 133, 133);
}

.product-card {
    padding-top: 4vw;
    box-sizing: border-box;
    top: 0;
    background-color: white;
    border-radius: 3.5vw 0;
    clip-path: polygon(0% 0%, 0% , 46% 100%, 46% 21%, 92% 21%, 92% 61%, 46% 61%, 46% 100%, 100% 100%, 100% 0%);

}

.product-card:hover {

    transition: 0.7s;
    box-shadow: 0px 0px 10px 2px rgb(136, 133, 133);
}

.product-form {
    padding-top: 4vw;
    z-index: 1;
    top: 0;
    background-color: rgba(255, 255, 255, 0.15);
}

.product-form:hover {

    transition: 0.7s;
    border-radius: 12px;
    box-shadow: 0px 0px 20px 5px rgb(136, 133, 133);
}

.cross {
    height: 3vw;
    width: 5vw;
    position: absolute;
    color: red;
    font-size: 2.5vw;
    top: -0.4vw;
    left: calc(100% - 2.5vw);
}

.cross:hover {
    font-size: 3vw;
    color: red;
    top: -0.6vw;
    left: calc(100% - 3vw);
}

.calcValidation {
    position: absolute;
    bottom: -15vh;
    width: 25vw;
    left: 10vw;
    height: 3vh;
    text-align: center;
    color: white;
    font-size: 1.5vw;
    padding: 2vh;
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
  opacity: 0.05;
  transition: 1.5s 
}

.opacityModalEnter {
  opacity: 1;
  transition: 1.5s; 
}

.move-to-centr {
    transition: 1s;
}
@media (max-width: 700px){
    
    .flex-class{
    display: flex;
    flex-direction: column;
    }

    .icons{
    width: 80vw;
    margin-left: 8vw;
    top: 20px;
    box-shadow: none;
    border: none;
    }
    
    .ico-noexit, .ico-exit {
        margin: 30vw 26.5vw;
        width: 30vw;
   
    }

.computed-window {
    font-size: 3.5vw;
    padding: 3px;
    width: 80%;
    height: 1%;
    top: 10px;
    left: 10%;
    overflow: visible;
    }

.return-two-window {
    font-size: 3.5vw;
    text-align: center;
    color: white;
    padding: 0.5vw 1vw 0vw 1vw;
    left: 15vw;
    width: 70vw;
    bottom: 26vw;
    height: 5vw;
}

    .cross {
    height: 7vw;
    position: relative;
    font-size: 7vw;
    bottom: -5px;
    left: calc(100% - 40px);
    overflow: visible;
}
}

@media (max-width: 700px){
    
    html, body {
        overflow: hidden;
    }

    .product-card {
        padding: 10px;
        border-radius: 8vw 0;
    }
}
</style>
