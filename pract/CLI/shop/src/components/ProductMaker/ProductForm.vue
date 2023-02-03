<template>
    
    <div class = "product-form" id="form">
   
        <RedCross 
            :deleteModal= "hideModal">
        </RedCross>

        <TotalPropertyForm
            @isSuccessFillingForm = "$emit('isSuccessFillingForm')">
        </TotalPropertyForm>

        <SpecificPropertyForm
            :typeCard = "typeCard"
            :canChangeTypeCard = "canChangeTypeCard"
            @changeTypeCard = "changeTypeCard">
            
        </SpecificPropertyForm>

    </div>


</template>

<script>

export default {
    name: "ProductForm",
    props: {
        typeCard: String,
        canChangeTypeCard: Boolean,
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
        },
        changeTypeCard() {
             this.$emit('changeTypeCard')
        }
    
   
    },    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

.product-form {
    z-index: 3;
    position: relative;
    box-sizing: border-box;

    aspect-ratio: 1 / 1;
    width: 70%;
    margin: 20% 0%; 
    margin-left: 15%;

    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    border: solid 3px rgb(234, 194, 114);
    box-shadow: 0px 1px 5px 1px rgba(255, 255, 255, 0.343);
}

@media ( max-width: 700px) {
    .product-form {
    
        aspect-ratio: 100 / 90 ;
        width: 58%;

        margin: 0; 
        margin-left: 25%;
        margin-top: 10%;
        margin-bottom: 20%;
        padding-top: 1%;

    }
}

</style>
