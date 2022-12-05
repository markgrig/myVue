<template>

    <div :class = "classList['product-price']"> {{ priceUsersProduct }}  руб.

    <div class="error">
        <ErrorPlacholder 
                class="error-price" 
                v-if = "!isPriceSuccess && valueError !== '' "
                :textPlaceholder = "valueError">
         </ErrorPlacholder> 

    </div>
    </div>

  
</template>

<script>

export default {
    name: "PriceView",
    props: {
        priceUsersProduct: String,
        isPriceSuccess: Boolean,
        valueError: String
    },
    data() {
        return {
            nameCategory: this.$route.params.id,
        }
    },
    computed: {
        classList() {
                   return { "product-price": `product-price ${this.nameCategory}`           
                }
        },
    }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.product-price{
    position: absolute;

    top: -2px;
    left: -2px;

    min-width: 18%;
    width: fit-content;
    padding: 1% 5%;
    
    text-align: center;
    color: white;
    border: solid 2px rgba(255, 0, 0, 0.66);
    border-radius: 30px 0;
    background-color: #b60f0fb4;


    font-size: 140%;
}

.error-price {
    bottom: 70%;
    left: 30%;
}


@media (max-width: 700px){
  
    .product-price {
        font-size: 12px;
    }

}
</style>
