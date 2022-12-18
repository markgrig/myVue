<template>

    <div :class = "classList['product-price']">{{ priceUsersProduct || 0 }}  руб.

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
        valueError: String,
        isPage: Boolean,
    },
    data() {
        return {
            nameCategory: this.$route.params.id,
        }
    },
    computed: {
        classList() {

            if  ( this.isPage ) { 
                return { 
                    "product-price": `price-page`,
                }
            }
                return { "product-price": `product-price ${this.nameCategory}`           
            }
        },
    }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.price-page {
    box-sizing: border-box;
    position: static;
    margin: 5% 0%;
    width: 100%;
    padding: 4%;
    height: auto;

    text-align: center;
    color: rgb(0, 174, 255);
    background-color: rgba(53, 241, 24, 0.45);
    border-radius: 10px;
    border: solid 2px rgb(48, 154, 9);
    font-size: 150%;
}


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

    .price-page {
        font-size: 100%;
    }
}
</style>
