<template>

    <div class ="error" >
        <div :class = "classList['product-name']"> {{ nameUsersProduct }}    </div>
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
        productData: Object,
        isPage: Boolean,
        typeCard: Object
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
                    "product-name": `name-page`,
                }
            }
                return { "product-name": `product-name ${this.typeCard}`           
            }
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.name-page {
    box-sizing: border-box;
    position: static;
    margin-top: 3%;
    margin-bottom: 5%;
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

.topic-page{
    text-align: center;
}

.error{
    position: relative;
}

.product-name {

    height: 5%;

    text-align: center;
    color: black;

    font-size: 140%;
}

.videoCard {

    width: 50%;

    margin-left: 25%;
    margin-top: 12%;

    font-size: 130%;
}

.audioCard {

    width: 50%;

    margin-left: 25%;
    margin-top: 11%;

}

.longCard {

    width: 90%;
    
    margin-left: 5%;
    margin-top: 18%;
}


.error-name {
    bottom: 50%;
    left:  50%;
}


@media (max-width: 700px){
  
        
    .name-page {
        font-size: 100%;
    }


    
    .error-name {
        min-width: 45%;
        padding-right: 0;
    }

    .audioCard{
        font-size: 95%;
    }

    .videoCard{
        font-size: 60%;
    }


    .longCard {
        font-size: 65%;
        margin-top: 18%;
    }

}
</style>
