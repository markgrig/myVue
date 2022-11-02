<template>
    
    <div>

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
        
        <div class="flex-class div-picture">
            <div> 
                <img 
                    src="@/img/sell.png" 
                    alt=""  
                    class = "picture add-ico"  
                    @click = "$emit('isSuccessFillingForm')"> 

                <WhitePlacholder 
                    class ="white-placeholder-add"
                    textPlaceholder = "Всё уже готово?">
                </WhitePlacholder>
            </div>

            
            <div> 
                <img 
                    src="@/img/picture.jpg" 
                    alt=""  
                    class = "picture image-ico" 
                    @click="userUploadImage">
                    
                <WhitePlacholder 
                    class ="white-placeholder-img"
                    textPlaceholder = "Добавьте фото тавара">
                </WhitePlacholder>
            </div>
        </div>
    
            <input 
                hidden
                class="modal-input-image" 
                type="file" 
                name="file"
                @input = "userInput('image', $event)">
    
    

    
    </div>

      
                

    

</template>

<script scoped>

import WhitePlacholder from './WhitePlacholder.vue';

export default {
    name: "TotalPropertyForm",
    props: {
        isMobile: Boolean,
        isUserTouched: Boolean, 
    },
    emits: ['userInput', 'isSuccessFillingForm' , 'userTouchedTextarea'],
    data() {
        return {
            nameUsersProduct: "" ,
            priceUsersProduct: "" ,
            infoUsersProduct: "" ,
            
        }
    },
    methods: {
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

        },
        userUploadImage() {

            if ( !this.inputImg) { this.inputImg = document.querySelector(".modal-input-image") }
            this.inputImg.click()

           
            
        },
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
    min-height: 15vh;
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
    height: 16vh;
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

.white-placeholder-img {
    opacity: 0;
    color: rgb(255, 90, 2);
    font-weight: 500;
    font-size: 1.2vw;
    margin-top:  -18vh;
    margin-left: 5.5vw;
    text-align: center;  
    padding: 0.5vw 0.3vw;
    box-sizing: content-box;
    height: 3.3vw;
    width: 6vw;
    border-radius: 2vw 1.6vw 1.7vw 0.2vw;
    box-shadow: 0 0 2vw 0.1vw gray;
    height: max-content;
}

.white-placeholder-add {
    opacity: 0;
    color: rgb(255, 90, 2);
    font-weight: 500;
    font-size: 1.2vw;
    margin-top:  -15vh;
    margin-left: -7.5vw;
    text-align: center;  
    padding: 0.5vw 0.3vw;
    box-sizing: content-box;
    height: 3.3vw;
    height: max-content;
    width: 6vw;
    border-radius: 1.6vw  2vw  0.2vw 1.7vw;
    box-shadow: 0 0 2vw 0.1vw gray;


}

.image-ico:hover + .white-placeholder-img {
    opacity: 1;
}

.add-ico:hover + .white-placeholder-add {
    opacity: 1;
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
