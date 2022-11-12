<template>

    <div class ="error" >
        <h3 class="product-name">  {{ nameUsersProduct }}    </h3>
        <ErrorPlacholder 
            class="error-name" 
            v-if = "!isNameSuccess && valueError !== ''"
            :textPlaceholder = "valueError" > 
        </ErrorPlacholder>
    </div>

</template>

<script>

export default {
    name: "NameView",
    props: {
        nameUsersProduct: String,
        isNameSuccess: Boolean,
        valueError: String,
        productData: Object
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.error{
    position: relative;
}

.product-name {
    font-size: 140%;
    width: 50%;
    height: 5%;
    margin-top: 8%;
    margin-left: 25%;
    text-align: center;
    color: black;

    font-size: 120%;
}





@media (max-width: 700px){
  
    
    .error-name {
        min-width: 45%;
        padding-right: 0;
    }

    .product-name {
        font-size: 95%;
        width: 80%;
        margin:  8% auto;
    }

}
</style>
