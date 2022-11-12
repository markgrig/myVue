<template>
    
    <div class = "product-form" id="form">

        <RedCross 
            :deleteModal= "hideModal">
        </RedCross>

        <TotalPropertyForm

            :isMobile = "isMobile"
            :isUserTouched = "isUserTouched" 

            @isSuccessFillingForm = "$emit('isSuccessFillingForm')"
            @userTouchedTextarea = "userTouchedTextarea"
            @userInput = "userInput"
           >

        </TotalPropertyForm>

        <SpecificPropertyForm>
            
        </SpecificPropertyForm>

    </div>


</template>

<script>

export default {
    name: "ProductForm",
    props: {
      
    },
    data() {
        return {
                isHideForm: false
        }
    },
    methods: {
        hideModal() {
            this.isHideForm = true
            this.$emit( "hideModal", "form" , this.isHideForm )
        }
   
    },    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

.product-form {
    z-index: 3;
    position: absolute;
    box-sizing: border-box;
    width: 70%;
    aspect-ratio: 1 / 1;
    margin: 20% 15%;

    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    border: solid 3px rgb(234, 194, 114);
    box-shadow: 0px 1px 5px 1px rgba(255, 255, 255, 0.343);
}

@media ( max-width: 700px) {
    .product-form {
        padding-top: 1%;
        width: 70%;
        /* height: 80%; */ 
        margin: 0 15%;
        margin-top: 26vw;
        height: 60vw;
    }
}

</style>
