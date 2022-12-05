<template>

    <div class ="error" >
        <h3 :class = "classList['product-name']">  {{ nameUsersProduct }}    </h3>
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
    data() {
        return {
            nameCategory: this.$route.params.id,
        }
    },
    computed: {
        classList() {
                   return { "product-name": `product-name ${this.nameCategory}`           
                }
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.error{
    position: relative;
}

.product-name {

    height: 5%;

    text-align: center;
    color: black;

    font-size: 140%;
}

.video {

    width: 50%;

    margin-left: 25%;
    margin-top: 12%;

    font-size: 130%;
}

.music_instrument {

    width: 50%;

    margin-left: 25%;
    margin-top: 8%;

}

.clothes {

    width: 90%;
    
    margin-left: 5%;
    margin-top: 18%;
}


.error-name {
    bottom: 50%;
    left:  50%;
}


@media (max-width: 700px){
  
    
    .error-name {
        min-width: 45%;
        padding-right: 0;
    }

    .music_instrument{
        font-size: 95%;
    }

    .video{
        font-size: 60%;
    }


    .clothes {
        font-size: 65%;
        margin-top: 18%;
    }

}
</style>
