<template>
    <div class = "pannel left-pannel">

        
    
    <div class = "div-pannel left-div-pannel"> 

        <CustomIco
            :src = "src.addContact"
            @userClickedOnIco = "userOpenForm($event, 'contact')"
            :textPlaceholder =    "placeholder.addContact">
        </CustomIco>
        
    </div>
    

    
    <div 
        v-if = "typeCard === 'audioCard'"
        class = "div-pannel left-div-pannel "> 

        <CustomIco
            :src = src.addAudio
            @userClickedOnIco = "userUploadAudio"
            :textPlaceholder =    "placeholder.addAudio">
        </CustomIco>

        <input 
                hidden
                class="modal-input-audio" 
                type="file" 
                name="file"
                @input = "userInput($event, 'audio', 'file')">

    </div>

    <div 
        v-if = "typeCard === 'videoCard'"
        class = "div-pannel left-div-pannel "> 

        <CustomIco
            :src = src.addUrlVideo
            @userClickedOnIco = "userOpenForm($event, 'video')"
            :textPlaceholder =    "placeholder.addUrlVideo"
            >
        </CustomIco>

 
    </div>

    </div>
</template>

<script>
import { inject } from 'vue'

export default {
    name: "SpecificPropertyForm",
    props: {
        typeCard: String,
    },
    setup() {
        const productMaker = inject('productMaker')
        
        const updateUsersProduct = inject('updateUsersProduct')
        const updateMaker = inject('updateMaker')

        const openNewModal = inject('openNewModal')

        return {
            productMaker,
            updateUsersProduct,
            updateMaker,
            openNewModal,
        }
    },
   
    data() {
        return {
            src: {
                addContact: require('@/img/contact.jpg'),
                addAudio: require('@/img/muz_key.jpg'),
                addUrlVideo: require('@/img/video.webp'),
            },
            placeholder: {
                addContact:  'Добавить контактые данные?',
                addAudio: 'Добавьте аудиофайл',
                addUrlVideo: 'Добавьте ссылку на видео'
            },
            nameForm: "",
            userGuid: {
                video:
                    [
                        { 
                            words:   '1) Зайдите на сайт youtube.com',
                            img:   `${require('@/img/contactInstruction1.jpg')}`
                        },
                        { 
                            words:   '2) Найдите ознакомительное видео, которое вы хотели бы показать потенциальным покупателям. Нажмите на кнопку "Поделиться"',
                            img:   `${require('@/img/contactInstruction2.jpg')}`
                        },
                        { 
                            words:   '4) Выберите способ: Встроить',
                            img:   `${require('@/img/contactInstruction3.jpg')}`
                        },
                        { 
                            words:   '5) И вот нужное вам url!',
                            img:   `${require('@/img/contactInstruction4.jpg')}`
                        },



                    ]
                
            }
        }
    },
    computed: {
        additionalFrom() {
            return {
                video: 
                    [ 
                        { 
                            topic: "url видео",
                            nameValue: "src",  
                            inputValue: this.productMaker.usersProduct.specificProperty?.video?.src ,
                            error: {
                                status: this.productMaker.usersProduct.specificProperty.success.video?.status || false ,
                                value: this.productMaker.usersProduct.specificProperty.success.video?.value || ""
                            },                  
                            userGuidArray: this.userGuid.video,
                        } 
                    ]   
                ,
                contact:
                    [ 
                        { 
                            topic: "телефон",
                            nameValue: "phone",
                            inputValue: this.productMaker.usersProduct.specificProperty.contact.phone,  
                            error: {
                                status: this.productMaker.usersProduct.specificProperty.success.contact.status.phone || false ,
                                value: this.productMaker.usersProduct.specificProperty.success.contact.value.phone || ""
                            },
                            divPlaceholder: "",
                        },
                        { 
                            topic: "почта",
                            nameValue: "email",  
                            inputValue:  this.productMaker.usersProduct.specificProperty.contact.email,
                            error: {
                                status: this.productMaker.usersProduct.specificProperty.success.contact.status.email || false ,
                                value: this.productMaker.usersProduct.specificProperty.success.contact.value.email || ""
                            },
                            divPlaceholder: "",
                        }, 
                    ] 
            }
        },

    },
    watch: {
        additionalFrom( newVal ) {
            this.updateMaker( "additionalForm", newVal[this.nameForm], this.nameForm )   
        }
    },
    methods: {
        userInput( event, field, subfield) {
            
                let inputedValue

                if ( field === "audio" ) {
                    inputedValue = event.target.files[0]
                } else {          
                    inputedValue = event.target.value.trim()
                }

                this.updateUsersProduct( inputedValue , "specificProperty",  field, subfield)

        },
        userUploadAudio() {

            if ( !this.inputAudio) { this.inputAudio = document.querySelector(".modal-input-audio") }
                this.inputAudio.click()

        },
        userOpenForm(event, nameForm) {

            this.nameForm = nameForm
            
            this.updateMaker( "additionalForm", this.additionalFrom[nameForm], nameForm )       
            this.openNewModal("additionalForm", event.target)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.pannel{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    position: absolute;
    top: 20%;
    left: -35%;
    width: 23%;
    height: 80%;
}


.div-pannel {

    box-sizing: border-box;
    aspect-ratio: 1/1;
    width: 100%;

    position: relative;

}

@media (max-width: 700px){

}
</style>
