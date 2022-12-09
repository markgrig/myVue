<template>
     <div 
            class = "modal-backgroud">


            <div
                class = "customForm-win" >
                
                <RedCross 
                    :deleteModal= "deleteModal">
                </RedCross>

                <div class="customForm">
                    <div
                        class= "input-el"
                        v-for = "el, i in arrayInput" :key = "i">
                    
                            <CustomInput
                                :isNeedErrorView = "true"

                                :nameValue = "el.nameValue"
                                :inputValue = "el.inputValue"
                                :topic = "el.topic"

                                :isNameSuccess = "el.error.status" 
                                :valueError = "el.error.value"

                                :userGuidArray  ="el.userGuidArray"
                                
                                @userInput = "userInput">
                            </CustomInput>
                    </div>

                </div>
              
              
            </div>
        </div>

</template>

<script>
export default {
    name: "CustomForm",
    props: {
        arrayInput: Array,
        nameProperty: String,
        typeProperty: String
    },
    methods: {
        deleteModal(event) {   
            this.$emit( "hideModalPicture" , "additionalForm", event.target)

        },
        userInput(  event , nameInput) {
            
            this.$emit( 'userInput' , event.target.value ,  this.typeProperty , this.nameProperty, nameInput )
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.customForm-win {
    position:absolute;
    box-sizing: border-box;
    z-index: 5;

    aspect-ratio: 7/5;
    width: 50%;
    left: 25%;
    top: 12%;
    padding: 3%;
    
    
    background-color: rgba(28, 142, 241, 0.58);
    border: solid 4px rgb(241, 213, 90);
    border-radius: 15px;
}

.customForm {
  
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    
}


.modal-backgroud {
    opacity: 1;
    z-index: 3;
    position: fixed;

    top: 0vw;
    left: 0vw;
    background-color: rgba(93, 0, 255, 0.050);
    width: 100vw;
    height: 100vh;

}

.input-el {
    height: 40%;
    padding: 2%;
  
}

@media (max-width: 700px) { 

    .customForm-win {
        aspect-ratio: 5/8;
        width: 80%;
        left: 9%;
        top: 10%;
    }
    .customForm-win {
        padding-top: 5%;
        padding-bottom: 0%;
    }

}


</style>
