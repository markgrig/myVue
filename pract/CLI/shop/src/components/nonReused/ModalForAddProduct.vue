<template>
    
    <div class = "overflower">




    <div  @click = "userClicked">
        <div class="black-window" ></div>

    <h4  class="modal-window computed-window " >
         {{ getStatusProdaction }} {{ answerFactory }} 
    </h4>

    <div class="modal-window product-form" 
        :style="{ 
                margin: modalFormMargin , 
                display: modalFormDisplay,
                width: modalFormWidth,
                height: modalFormHeight , 
                }">

        <div class="cross" 
            @:click="deleteModal($event)"> &#10006; </div>

        <TotalPropertyView 
            :isMobile = 'isMobile'

            :nameUsersProduct = "usersProduct.totalProperty.name"
            :priceUsersProduct = "usersProduct.totalProperty.price"
            :infoUsersProduct = "usersProduct.totalProperty.info"

            :isNameSuccess =  "usersProduct?.success.name"
            :isPriceSuccess =  "usersProduct?.success.price"
            :isInfoSuccess =  "usersProduct?.success.info"
            >
        </TotalPropertyView>

        <SpecificPropertyView >
        </SpecificPropertyView>

    </div>

    <div
     
        class="modal-window product-card" 
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
            :isUserTouched = "isUserTouched"
            @isSuccessFillingForm = "isSuccessFillingForm"
            @userTouchedTextarea = "userTouchedTextarea"
            @userInput = "userInput">
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
            modalCardMargin: this.startCardMargin,
            modalFormMargin: this.startFormMargin,
            modalCardDisplay: "",
            modalFormDisplay: "",
            nameDeletemodal: "",
            modalHide: false,
            isExit: false,
            isUserTouched: false,
            usersProduct: this.getAbstactFactory().createProduct(""),
            productFormDOM: "",
            
        }
    },
    methods: {
        deleteModal(event) {
            if ( event.target.closest(".product-card") ) {
                
                this.modalCardDisplay = "none"
                this.modalFormMargin = this.centralFormMargin
                this.nameDeletemodal = "oкно с вводом данных"
            } else {
    
                this.modalFormDisplay = "none"
                this.modalCardMargin = this.centralCardMargin
                this.nameDeletemodal = "демонстрационное окно"
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
                if ( !this.productFormDOM ) { this.productFormDOM  = document.querySelector( ".product-card")}

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
            
            
            this.usersProduct.totalProperty[property] = value;
            //console.log (this.usersProduct);
            if ( property == "name" ) {
                this.usersProduct.totalProperty.name = this.usersProduct.checkQualityName()
            }
            if ( property === "price" ) {
                this.usersProduct.totalProperty.price = this.usersProduct.checkQualityPrice()
            }
            if ( property === "info" ) {
                this.usersProduct.totalProperty.info = this.usersProduct.checkQualityInfo()
            }
            if ( property === "image" ) {
                this.usersProduct.totalProperty.image = this.usersProduct.checkQualityImage()
            }
 
        },
        async isSuccessFillingForm() {
            console.log( Object.values(  this.usersProduct.success ));
            const isSuccess = Object.values(  this.usersProduct.success ).every( (element) => {
                return element.status === true
            });
            console.log(isSuccess);
            if ( isSuccess ) { 

                const urlImg =  await this.productData.uploadFile( this.usersProduct.totalProperty.image )
                this.usersProduct.totalProperty.image = urlImg

                this.productData.writeProduct( this.usersProduct.totalProperty ) 
                this.userLeave()

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
                console.log(pannelPictures);
            

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
    z-index: 1;
    height: 100%;
}

.modal-window {
    z-index: 2;
    position: absolute;
    border-radius: 10px;
    border: solid 3px rgb(234, 194, 114);
    box-shadow: 0px 1px 5px 1px rgba(255, 255, 255, 0.343);

}

.icons{
    
    width: 60%;
    margin-left: 20%;
    top: 20px;
    box-shadow: none;
    border: none;
}
.icons h3 {
    margin-top: -60px;
    text-align: center;
    font-size: 140%;
    width: 80%;
    margin-left: 12%;
    color: white;
}
.ico-noexit, .ico-exit {
   margin: 100px 0px;
   width: 20vw;
   height: auto;
   
}
.ico-noexit:hover, .ico-exit:hover {
  animation: light 1.5s infinite;
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

.product-form {
    padding: 10px;
    box-sizing: border-box;
    top: 0;
    background-color: white;
    border-radius: 3.5vw 0;
    clip-path: polygon(0% 0%, 0% , 46% 100%, 46% 21%, 92% 21%, 92% 61%, 46% 61%, 46% 100%, 100% 100%, 100% 0%);

}

.product-form:hover {

    transition: 0.7s;
    box-shadow: 0px 0px 10px 2px rgb(136, 133, 133);
}

.product-card {
    top: 0;
    background-color: rgba(255, 255, 255, 0.15);
}

.product-card:hover {

    transition: 0.7s;
    border-radius: 12px;
    box-shadow: 0px 0px 20px 5px rgb(136, 133, 133);
}

.cross {
    height: 40px;
    position: relative;
    font-size: 30px;
    color: red;
    bottom: -5px;
    left: calc(100% - 40px);
}

.cross:hover {
    font-size: 32px;
    position: relative;
    color: red;
    left: calc(100% - 40px);
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

    .product-form {
        padding: 10px;
        border-radius: 8vw 0;
    }
}
</style>
