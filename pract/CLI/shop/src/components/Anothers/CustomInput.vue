<template>
    
    <div class = "input-box" >
            
        <ErrorPlacholder 
                    class="error-custom"
                    v-if = "( isNeedErrorView && !isNameSuccess && valueError)"
                        :textPlaceholder = "valueError" > 
        </ErrorPlacholder>

        <h4 class="modal-input-topic"> {{ topic }} </h4>
                <textarea
                    type = "text"
                    :id = "nameValue"
                    :name= "nameValue" 
                    :value = "newInputValue"
                    class="modal-input" 
                    @input="userInput"> 
                </textarea>

        
        <UserGuid
            class="user-guid" 
            v-if ="userGuidArray"
                :insrtuction = "userGuidArray"> 
        </UserGuid>
    
    </div>
  
</template>

<script>


export default {
    name: "CustomInput",
    props: {
        nameValue: String,
        topic: String,
        inputValue: String,
        isNameSuccess: Boolean, 
        valueError: String,

        userGuidArray: Array,
        isNeedErrorView: Boolean,   
    },
    data() {
        return { 
            newInputValue: this.inputValue
        } 
    },
    methods: {
        userInput(event) {

            event.target.value = event.target.value.trimLeft()
            this.newInputValue = event.target.value

            this.$emit( 'userInput' , this.nameValue, event )
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.input-box{
    height: 90%;
    padding: 1% 0;

}

.modal-input {
    
    overflow-y: auto;
    box-sizing: border-box;
    width: 92%;
    height: 60%;
    margin: 0 4%;
    resize: none;

    padding: 2% 2%; 

    text-align: center;
    color: white;

    border: solid 1px rgb(120, 108, 83);
    background-color: rgba(18, 198, 201, 0.102);
    border-radius: 10px;

    font-size: 105%;

}
.modal-input-topic {
   
    width: 100%;
    padding: auto;
    padding-bottom: 5%;
    outline: none;
    color: white;
    text-align: center;

    position: relative;
    
}



.modal-input:focus {

    width: 93%;
    margin: 0 3.5%;

    border: solid 2px white;
    transition: 0.1s;
    outline: none;
}

.error-custom {
    position: absolute;
    left: 91%;
    margin-top: 5%;
}

.user-guid {
    position: relative;
    text-align: center;
    
    margin: 2% 5%;
    height: auto;
}




@media (max-width: 700px){

   
    .modal-input {
        height: 60%;
        font-size: 80%;
    }

    .modal-input-topic {
        font-size: 80%;
    }

  
}
</style>
