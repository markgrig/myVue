<template>
     <form  
        name = "product-form"
        enctype="multipart/form-data"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit">

        <input type="hidden" name="form-name" value="product-form" />

        <div class="flex-class" >
            <div>
                <h4 class="modal-input-topic"> Наименование: </h4>
                <textarea
                    type = "text"
                    id = "name"
                    name="name"  
                    class="modal-input" 
                    :value= "nameUsersProduct"
                    @click="userTouched($event)" 
                    @input="userInput('name' ,  $event)"> 
                </textarea>
            </div>
            <div>
                <h4 class="modal-input-topic"> Цена(руб): </h4>
                <textarea 
                    type = "text"
                    name="price" 
                    id = "price" 
                    class="modal-input" 
                    :value= "priceUsersProduct"
                    @click="userTouched($event)" 
                    @input = "userInput('price', $event)">
                </textarea>
            </div>
        </div>

        <div>
            <h4 class="modal-input-topic"> Описание: </h4>
            <textarea
                type = "text"
                id = "info" 
                name="info" 
                class="modal-input modal-input-info"
                :value= "infoUsersProduct"
                @click="userTouched($event)" 
                @input = "userInput('info' ,  $event)">
            </textarea>
        </div>
            13123
        <div class="flex-class div-picture">
            <div>
                <img src="@/img/sell.png" alt="" class = "picture" @:click="userLoadPicture()"> 
                <WhitePlacholder class ="white-placeholder" textPlaceholder = "Пройдёшь опрос?" v-if = "mouseoverQestionary"></WhitePlacholder>
            </div>
            <div> 
                <img src="@/img/sell.png" alt="" class = "picture"> 
            </div>
            <div> 
                <img src="@/img/picture.jpg" alt="" class = "picture"> 
            </div>
        </div>
    
            <input 
                class="modal-input-image" 
                type="file" 
                name="file"
                @input = "userInput('image', $event)">
    
            
        <button> okey </button>
    </form>

</template>

<script scoped>

import WhitePlacholder from './WhitePlacholder.vue';
export default {
    name: "TotalPropertyForm",
    props: {
        isMobile: Boolean,
        isUserTouched: Boolean,
    },
    data() {
        return {
            nameUsersProduct: "" ,
            priceUsersProduct: "" ,
            infoUsersProduct: "" ,
        }
    },
    methods: {
        show() {
            console.log(this.totalProperty);
        },
        userTouched(event) {         
            event.target.value =  event.target.value.trimLeft()
             
            if ( this.isMobile ) {
                this.$emit( "userTouchedTextarea",  this.isMobile , event.target.id ) 
            }
         
        },
        userInput( field, event) {

            if ( field === "image") {

                console.log("отправлен файл!");
              
                this.$emit( 'userInput',  field , event.target.files[0] )
                
            } 
            else {

                event.target.value =  event.target.value.trimLeft()
                this.$emit( 'userInput',  field ,  event.target.value.trim() )
            
            }

        }
    },
    components: { WhitePlacholder }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name-category {
    font-size: 2vw;
    width: 20vw;
    margin-top: 4vh;
    margin-left: 5vw;
    text-align: center;
    position: absolute;
    color: white;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.modal-input {
    
    font-size: 1.5vw;
    text-align: center;
    color: white;
    overflow: hidden;

    height: 6vh;
    min-height: 2vw;
    width: 8vw;
    resize: none; 
    padding: 5px 2vw;
    margin-left:  0vw;
    margin-top: 4%;
    margin-bottom: 3vh;
    border: solid 1px rgb(120, 108, 83);
    background-color: rgba(18, 198, 201, 0.102);
    border-radius: 1vh;
}
.modal-input-topic {
    font-size: 1.5vw ;
    outline: none;
    color: white;
    width: 100%;
    text-align: center;
    margin-top: 5px;
}

.modal-input:focus {
    border: solid 2px white;
    height: 8vh;
    margin-left: -1px;
    margin-bottom: 0;
    transition: 0.1s;
    outline: none;
}
.modal-input-info {
    text-align: justify ;
    text-indent: 2vw;
    font-size: 1vw;
    width: 80%;
    height: 10vh;
    min-height: 18vh;
    padding: 1.5vw 5% 1.5vw;
    margin-left: 5%;
    margin-bottom: 30%;

    
}

.modal-input-info::placeholder {
    opacity: 0.9;
    color:#ffffff;
}



.modal-input-info:focus {
    border: solid 2px white;
    height: 20vh;
    margin-left: calc(5% - 2px);
    margin-bottom: 10%;
    transition: 0.1s;
    outline: none;
}
.div-picture {
    position: absolute;
    top:  63vh;

}
.picture {
    z-index: 100;
    width: 11vh;
    margin: 0;
    border-radius: 10vh;
    height: auto;
    padding: 1vh;
}
.picture:hover {
    animation: light 1s infinite;
}
.div-picture{
    display: flex;
    justify-content: space-between;
    width: 30vw;
    
}

.modal-input-image {
    color: white;
}

@media (max-width: 700px){


    .modal-input-topic {
        font-size: 3.5vw;
    }
    .modal-input {
        height: 3vh;
        width: 25vw;
        font-size: 3vw;
        margin-bottom: 0vh;
    }

    .modal-input-info {
        min-height: 15vh;
        width: 60vw;
        margin-left: 3vh;
        font-size: 4vw;
    }

    .modal-input:focus {
        margin-bottom: 0vh;
    }

    .modal-input-info:focus {
        height: 6vh;
        margin-left: 5.5vw;
    }
    .div-picture {
        position: fixed;
        left: 0;
        top: 78vh;  
        width: 70vw;
        margin-left: 15vw;
       
    }
    .picture {
        margin: 0;
        width: 13vw;
    }
    
}


</style>
