<template>
    
    <div class="total-form">

        <div class="flex-class" >

            <div class="div-name" >

                <CustomInput
                    :nameValue = "nameValue['name']"
                    :topic = "topic['name']"
                    @userInput = "userInput"
                    >
                </CustomInput>

            </div>
            <div class="div-price" >
                
                <CustomInput
                    :nameValue = "nameValue['price']"
                    :topic = "topic['price']"
                    @userInput = "userInput"
                    >
                </CustomInput>

            </div>
        </div>

        <div class="div-info" >

            <CustomInput
                    :nameValue = "nameValue['info']"
                    :topic = "topic['info']"
                    @userInput = "userInput"
                    >
            </CustomInput>

        </div>
        
        <div class="bottom-pannel">
            
            <div class = "div-bottom-pannel"> 
      
                <CustomIco
                    :src = "src.testForm"
                    @userClickedOnIco = "$emit('isSuccessFillingForm')"
                    :textPlaceholder =  "placeholder.testForm">
                </CustomIco>

            </div>

            <div class = "div-bottom-pannel"> 

                <CustomIco
                    :src = "src.settingImg"
                    @userClickedOnIco = "userOpenNewModal('imageSettings', $event)"
                    :textPlaceholder =    "placeholder.settingImg">
                </CustomIco>
               
            </div>
            

            
            <div class = "div-bottom-pannel"> 

                <CustomIco
                    :src = src.addImg
                    @userClickedOnIco = "userUploadImage"
                    :textPlaceholder =    "placeholder.addImg">
                </CustomIco>
               
            </div>

        </div>

        <input 
                hidden
                class="modal-input-image" 
                type="file" 
                name="file"
                @input = "userInput('file', $event)">
    
                

    </div>

</template>

<script scoped>
import { inject } from 'vue'


export default {
    name: "TotalPropertyForm",
   setup() {
        const updateUsersProduct = inject('updateUsersProduct')
        const openNewModal = inject('openNewModal')
       
    
        return {
            updateUsersProduct,
            openNewModal
        }
    }, 
    emits: ['userInput', 'isSuccessFillingForm' , 'userTouchedTextarea'],
    data() {
        return {
            nameValue: {
                name:  "name",
                price:  "price",
                info:  "info",
            },
            topic: {
                name:  "Наименование",
                price:  "Цена(руб):",
                info:  "Описание:",
            },
            src: {
                testForm:  require('@/img/sell.png'),
                settingImg: require('@/img/setting.jpg'),
                addImg: require('@/img/picture.jpg')
            },
            placeholder: {
                testForm: 'Нажмите, если хотите опубликовать товар',
                settingImg:  'Хотите настроить стили картики?',
                addImg: 'Добавить фотографию товара?'
            }
        }
    },
    methods: {
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
        userOpenNewModal( nameModal, event) {
            this.openNewModal( nameModal, event.target)
        },
        
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.total-form{
    width: 100%;
    height: 85%;
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

.div-info{

    width: 95%;
    
    margin: 0 2.5%;
    height: 60%;

}

.bottom-pannel{
    display: flex;
    justify-content: space-between;

    position: absolute;
    top: 110%;

    width: 100%;
    height: 20%;

}


.div-bottom-pannel {

    box-sizing: border-box;
    aspect-ratio: 1/1;
    height: 100%;

    position: relative;

}






@media (max-width: 700px){

    .total-form {
        font-size: 12px;
        padding-top: 4%;
    }

}


</style>
