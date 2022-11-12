<template>
    
    <div class="total-form">

        <div class="flex-class" >
            <div class="div-name" >
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
            <div class="div-price" >
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

        <div class="div-info" >
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
        
        <div class="flex-class bottom-pannel">
            <div class = "div-bottom-pannel"> 
      
                <img 
                    src="@/img/sell.png" 
                    alt=""  
                    class = "picture add-ico"  
                    @click = "$emit('isSuccessFillingForm')"> 

                <WhitePlacholder 
                    class ="placeh white-placeholder-add"
                    textPlaceholder = "Всё уже готово?">
                </WhitePlacholder>
            </div>

            <div class = "div-bottom-pannel"> 
                <img 
                    src="@/img/setting.jpg" 
                    alt=""  
                    class = "picture add-ico"  
                    @click = "userSetStyleImage"> 

                <WhitePlacholder 
                    class ="placeh white-placeholder-setting-img"
                    textPlaceholder = "Настроить картику?">
                </WhitePlacholder>
            </div>
            

            
            <div class = "div-bottom-pannel"> 
                <img 
                    src="@/img/picture.jpg" 
                    alt=""  
                    class = "picture image-ico" 
                    @click="userUploadImage">
                    
                <WhitePlacholder 
                    class ="placeh white-placeholder-img"
                    textPlaceholder = "Добавьте фото тавара">
                </WhitePlacholder>
            </div>

            <input 
                hidden
                class="modal-input-image" 
                type="file" 
                name="file"
                @input = "userInput('file', $event)">

        </div>
    
           
    
    

    
    </div>

</template>

<script scoped>
import { inject } from 'vue'


export default {
    name: "TotalPropertyForm",
    setup() {
        const usersProduct = inject('usersProduct', )
        const updateUsersProduct = inject('updateUsersProduct')
        const openSettings = inject('openSettings')

        return {
            usersProduct,
            updateUsersProduct,
            openSettings
        }
    },
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

            let inputedValue
            
            if ( field === "file" ) {
                inputedValue = event.target.files[0]
            } else {          
                inputedValue = event.target.value.trim()
            }
            
            this.updateUsersProduct( inputedValue , "totalProperty",  field)

        },
        userUploadImage() {

            if ( !this.inputImg) { this.inputImg = document.querySelector(".modal-input-image") }
                this.inputImg.click()

           
            
        },
        userSetStyleImage(event) {
            this.openSettings("imageSettings", event.target)
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.total-form{
    width: 100%;
    height: 80%;
    padding-top: 15%;
    font-size: 100%;
}


.flex-class {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 30%;
}
.div-name {
    width: 40%;
}
.div-price {
    width: 40%;
}
.modal-input {
    
    box-sizing: border-box;
    width: 95%;
    margin: 0 2.5%;
    min-height: 50%;
    height: 50%;
    resize: none; 
    padding: 5% 10%; 

    text-align: center;
    color: white;
    overflow: hidden;

    border: solid 1px rgb(120, 108, 83);
    background-color: rgba(18, 198, 201, 0.102);
    border-radius: 10px;

    font-size: 105%;

}
.modal-input-topic {

    width: 100%;
    min-height: 15%;
    height: 10%;
    margin-bottom: 2%;

    outline: none;
    color: white;
    text-align: center;
    
}

.flex-class .modal-input-topic {
    min-height: 30%;
}

.modal-input:focus {

    height: 53%;
    width: 100%;
    margin: 0;

    border: solid 2px white;
    transition: 0.1s;
    outline: none;
}

.div-info{
    height: 50%;
}

.modal-input-info {
    width: 88%;
    height: 88%;
    
    padding: 3% 6%;
    margin-left: 6%;

    text-align: justify ;
    text-indent: 24px;

    font-size: 105%;

    
}

.modal-input-info::placeholder {
    opacity: 0.9;
    color:#ffffff;
}



.modal-input-info:focus {

    width: 90%;
    height: 90%;
    margin: 0 5%;

    border: solid 2px white;
    transition: 0.1s;
    outline: none;
}
.bottom-pannel {
    position: relative;
    bottom: -30%;
    height: 30%;
}
.picture {
    z-index: 100;
    margin: 0;
    height: 100%;
    width: auto;
    padding: 4%;

    border-radius: 50%;
    border: solid 0.15vw rgb(199, 81, 1);
}
.picture:hover {
    animation: light 1s infinite;
}
.bottom-pannel{
    display: flex;
    justify-content: space-between;
    width: 100%;
  
}

.modal-input-image {
    color: white;
}

.div-bottom-pannel {
    position: relative;
    padding: 1% 5%;
}

.placeh {
    bottom: 60%;
    left: 75%;

    text-align: center;
    color: rgb(255, 90, 2);
    font-weight: 500;
    font-size: 20px;
    box-shadow: 0 0 5px 3px gray;
    border-radius: 30px 30px 30px 0;
}
.white-placeholder-img {
    opacity: 0;
    z-index: 500;

    box-sizing: content-box;
    width: 80%;
    height: max-content;
    padding: 10%;
    bottom: 55%;
    left: 70%;


}

.white-placeholder-add {
    opacity: 0;
    z-index: 5000;
    
    box-sizing: content-box;
    width: 100%;
    height: max-content;
    padding: 15% 3%;
    bottom: 60%;
    left: 75%;
    bottom: 60%;
    left: 75%;



}
.white-placeholder-setting-img {
    opacity: 0;
    z-index: 500;

    box-sizing: content-box;
    width: 90%;
    height: max-content;
    padding: 16% 12%;
    bottom: 60%;
    left: 70%;
    
   
}

.image-ico:hover + .white-placeholder-img {
    opacity: 1;
}

.add-ico:hover + .white-placeholder-add {
    opacity: 1;
}

.add-ico:hover + .white-placeholder-setting-img {
    opacity: 1;
}


@media (max-width: 700px){

    .total-form {
        font-size: 75%;
        padding-top: 4%;
    }

    .modal-input {
        min-height: 10vw;
        height: 10vw;
        overflow-y: auto;
    }

    .modal-input-info {
        min-height: 20vw;
        max-height: 20vw;
        font-size: 14px;
    }

    .modal-input-info:focus {
        height: min-content;
    }

    .image-ico:hover + .white-placeholder-img {
        opacity: 0;
    }

    .add-ico:hover + .white-placeholder-add {
        opacity: 0;
    }

    .add-ico:hover + .white-placeholder-setting-img {
        opacity: 0;
    }
}


</style>
