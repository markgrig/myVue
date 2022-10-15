<template>

    <div>
        <div class="black-window" ></div>

    <h4  class="modal-window computed-window ">
         {{ getStatusProdaction }}
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
            :totalProperty = "product.totalProperty" 
            :isMobile = 'isMobile'>
        </TotalPropertyView>

        <SpecificPropertyView 
            :specificPropetry = "product.specificPropetry" >
        </SpecificPropertyView>

    </div>

    <div class="modal-window product-card" 
        :style="{ margin : modalCardMargin, 
                  display:  modalCardDisplay,
                  width: modalCardWidth,
                  height: modalCardHeight , 
                }"
    >
                
        <div class="cross" 
            @:click="deleteModal($event)"
            > &#10006;
         </div>

        <TotalPropertyForm
            :totalProperty = "product.totalProperty"
            :isMobile = "isMobile">
            :isUserWrite = "isUserWrite" 
        </TotalPropertyForm>

        <SpecificPropertyForm 
            :specificPropetry = "product.specificPropetry" >
        </SpecificPropertyForm>


    </div>


    <div v-show="modalHide" @click ="returnModal()" class="modal-window return-two-window"> Вернуть {{ nameDeletemodal }} </div>
    
    <div v-show="isExit"  class ="modal-window icons" >
            <div class = "flex-class">
                <div>
                    <img class ="ico-exit" src="@/img/exit.jpg" alt=""  @click ="Leave()">
                    <h3> Да, я не хочу</h3>
                </div>
                <div>
                    <img class ="ico-noexit" src="@/img/noExit.jpg" alt="" @click ="noLeave()">
                    <h3> Нет. я хочу вернутся! </h3>
                </div>
            </div>
    </div>
    </div>
    
</template>

<script>





export default {
    name: "ModalForAddProduct",
    props: {
        product: Object,
        startCardMargin: String,
        centralCardMargin: String,
        startFormMargin: String,
        centralFormMargin: String,
        modalCardWidth: String,
        modalCardHeight: String,
        modalFormWidth: String,
        modalFormHeight: String,
        isMobile: Boolean,
        isUserWrite: Boolean,
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
            isUserWriteData: this.isUserWrite
           
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
        noLeave() {
            this.isExit = false
            this.returnModal()
        },
        Leave(){
            this.isExit = false
            this.$emit( 'deleteModalWindow')
        },
        
    },
    computed: {
        getStatusProdaction() {
            console.log( this.centralCardMargin ,  this.modalFormMargin);
            if (   this.modalFormMargin === this.centralFormMargin &&   this.modalCardMargin === this.centralCardMargin  ) {
                return "Вы не хотите добавить продукт продукт?"
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
            }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.black-window {
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.95);
    width: 100%;
    height: 100%;
    z-index: 1;
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
    width: 40%;
    margin-left: 30%;
    color: white;
}
.ico-noexit, .ico-exit {
   margin: 100px 0px;
   width: 30% auto;
   
}
.ico-noexit:hover, .ico-exit:hover {
  animation: light 1.5s infinite;
}

.computed-window {
    font-size: 130%;
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
    text-align: center;
    color: white;
    padding: 5px;
    left: 42vw;
    width: 15vw;
    bottom: 2%;
}

.return-two-window:hover {
    transition: 0.7s;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 2px rgb(136, 133, 133);
}

.product-form {
    top: 0;
    background-color: rgba(255, 255, 255, 0.85);
    height: 80%;
    width: 46%;
}

.product-form:hover {

    transition: 0.7s;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 2px rgb(136, 133, 133);
}

.product-card {
    top: 0;
    background-color: rgba(255, 255, 255, 0.15);
    height: 60%;
    width: 30%;

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

@media (max-width: 850px){
    
    .flex-class{
    display: flex;
    flex-direction: column;
    }

    .icons{
    width: 80%;
    margin-left: 10%;
    top: 20px;
    box-shadow: none;
    border: none;
    }
    
    .ico-noexit, .ico-exit {
   margin: 80px 23%;
   width: 30% auto;
   
    }

.computed-window {
    font-size: 80%;
    padding: 3px;
    width: 80%;
    height: 1%;
    top: 10px;
    left: 10%;
    overflow: visible;
    }

.return-two-window {
    text-align: center;
    left: 23%;
    width: 50%;
    bottom: 2%;
    }

    .cross {
    height: 5vh;
    position: relative;
    font-size: 5vh;
    bottom: -5px;
    left: calc(100% - 40px);
    overflow: visible;
}
}

@media (max-width: 850px){
    * {
        overflow: hidden;
    }
}
</style>
