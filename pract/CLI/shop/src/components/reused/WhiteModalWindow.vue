<template>

    <div class="black-window"></div>

    <h4  class="modal-window computed-window ">
         {{ getStatusProdaction }} 
    </h4>

    <div class="modal-window product-form" :style="{ left: modalFormLeft , display: modalFormDisplay}">
        <div class="cross" @:click="deleteModal($event)"> &#10006; </div>
    </div>

    <div class="modal-window product-card" :style="{ left: modalCardLeft, display:  modalCardDisplay }">
        <div class="cross" @:click="deleteModal($event)"> &#10006; </div>
        <h4 class="modal-input-topic"> Название товара: </h4>
        <span contenteditable="true" class="modal-input"> 123</span>
    </div>


    <div v-show="modalHide" @click ="returnModal()" class="modal-window return-two-window"> Вернуть {{nameDeletemodal}} </div>
    
    <div v-show="isExit"  class ="modal-window icons">
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

</template>

<script>

export default {
    name: "WhiteModalWindow",
    data() {
        return {
            modalCardLeft: "60%",
            modalFormLeft: "8%",
            modalCardDisplay: "",
            modalFormDisplay: "",
            nameDeletemodal: "",
            modalHide: false,
            isExit: false,
        }
    },
    methods: {
        deleteModal(event) {
            if ( event.target.closest(".product-card") ) {
                this.modalCardDisplay = "none"
                this.modalFormLeft = "27%"
                this.nameDeletemodal = "oкно с вводом данных"
            } else {
                this.modalFormDisplay = "none"
                this.modalCardLeft = "35%"
                this.nameDeletemodal = "демонстрационное окно"
            }

            this.modalHide = true
            
            if (  this.modalFormLeft === "27%" &&  this.modalCardLeft === "35%" ) {
                this.nameDeletemodal =  'оба окна'
                this.isExit = true
                this.modalHide = false
            }
            
        },
        returnModal() {
            this.modalCardLeft = "60%"
            this.modalFormLeft = "8%"
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
        }
        
    },
    computed: {
        getStatusProdaction() {
            if (  this.modalFormLeft === "27%" &&  this.modalCardLeft === "35%" ) {
                return "Вы не хотите добавить продукт продукт?"
            }
            if (  this.modalFormLeft === "27%" ) {
                return "Сейчас вы можете сконцетрироваться на карточке продукта"
            }
            if (  this.modalCardLeft === "35%" ) {
                return "Сейчас вы можете сконцетрироваться на заполнении полей"
            }
            return "Сейчас вы можите наблюдать за карточкой и заполнять её"
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
.flex-class{
    display: flex;
    justify-content: space-around;
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
    left: 40%;
    width: 20%;
    bottom: 2%;
}

.return-two-window:hover {
    transition: 0.7s;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 2px rgb(136, 133, 133);
}

.product-form {
    background-color: rgba(255, 255, 255, 0.85);
    height: 80%;
    width: 46%;
    top: 10%;
}

.product-form:hover {

    transition: 0.7s;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 2px rgb(136, 133, 133);
}

.product-card {
    background-color: rgba(255, 255, 255, 0.15);
    height: 60%;
    width: 30%;
    top: 20%;

}

.product-card:hover {

    transition: 0.7s;
    border-radius: 12px;
    box-shadow: 0px 0px 20px 5px rgb(136, 133, 133);
}

.modal-input {
    height: 24px;
    font-size: 16px;
    padding: 4px 5% 4px 5px;
    width: 50%;
    margin-top: 4%;
    margin-left: 21%;
    border: solid 1px rgb(120, 108, 83);
    ;
    background-color: rgba(18, 198, 201, 0.102);
    border-radius: 5px;
    color: white;
}

.modal-input-topic {
    outline: none;
    color: white;
    /* rgb(236, 107, 51);*/
    text-align: center;
    width: 50%;
    margin-top: 10%;
    margin-left: 25%;
}

.modal-input:focus {
    border: solid 1.5px white;
    margin-left: calc(21% - 2px);
    transition: 0.1s;
    outline: none;
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
</style>
