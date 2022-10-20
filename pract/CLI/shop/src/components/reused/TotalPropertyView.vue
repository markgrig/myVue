<template>
    
    <div>
        <h3 class="product-name">  {{ nameUsersProduct }}  </h3>
        <ErrorPlacholder 
            class="error-name" 
            v-if = "!isNameSuccess.status && isNameSuccess.value !== ''"
            :textPlaceholder = "isNameSuccess.value" >  </ErrorPlacholder>
    </div>
    

    <div class="flex-class">

        <div>
            <img class = "product-img" src="@/img/123.jpeg" alt="">
            <div class="product-price"> {{ priceUsersProduct }}  руб.</div>
            <ErrorPlacholder 
                class="error-price" 
                v-if = "!isPriceSuccess.status && isPriceSuccess.value !== '' "
                :textPlaceholder = "isPriceSuccess.value"></ErrorPlacholder> 
        </div>
    
        <div class = "background-info">
            
            <h3 class = "product-info-topic"> Описание: </h3>
            <div class = "product-info"> {{ infoUsersProduct }} </div>   
        </div>    
    </div>

    <ErrorPlacholder  
        class = "error-info" 
        v-if = "!isInfoSuccess.status  && isInfoSuccess.value !== ''"
        :textPlaceholder = "isInfoSuccess.value"> </ErrorPlacholder>
    

</template>

<script>

import ErrorPlacholder from '@/components/reused/ErrorPlacholder.vue'

export default {
    name: "TotalPropertyView",
    props: {
        totalProperty: Object,
        nameUsersProduct: String,
        priceUsersProduct: String,
        infoUsersProduct: String,
        isNameSuccess: String, 
        isPriceSuccess: String, 
        isInfoSuccess: String, 

    },
    components: {
        ErrorPlacholder
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-name {
    font-size: 2vw;
    width: 50%;
    height: 2vw;
    margin-left: 25%;
    text-align: center;
    color: black
}

.product-price{
    position: absolute;
    font-size: 2.5vw;
    top: -3px;
    left: -3px;
    width: 12vw;
    min-width: 8vw;
    width: fit-content;
    color: white;
    padding: 0.75vh 1vw  0.75vh 1vw;
    text-align: center;
    border: solid 2px rgba(255, 0, 0, 0.66);
    border-radius: 9vmax 0;
    background-color: #b60f0f99;
}
.product-img {
    width: 15vw;
    height: 15vw;
    object-fit:cover;
    padding: 0.3vw;
    margin: 1vw;
}
    .background-info{
    word-break: break-word;
    margin:  1vw 3vw;
    background-image:  url( "../../img/backgroundInfo.jpg") ;
    background-size: 70%;
    height: 30px; 
    height: min-content;
    max-height: 15vw;
    border-radius: 1vw; 
    border: solid 0.25vw   black
}
.product-info{
    overflow: auto;
    font-size: 1.4vw;
    margin: 0;
    padding: 0px 10px 30px 20px;
    color: rgb(246, 234, 234);
    width: 20vw;
    min-height: 30px; 
    text-indent: 30px; 
    --height: min-content;
    max-height: calc(12vw - 30px);
    background-color:  rgba(76, 76, 76, 0.2);
    border-radius: 0vw 0vw 0.5vw 0.5vw; 
}
.product-info-topic {
    padding-bottom: 10px;
    color: rgb(246, 234, 234);
    text-align: center;
    font-size: 2vw;
    height: 2vw;
    text-indent: 0px;
    background-color:   rgba(76, 76, 76, 0.2);
    border-radius: 0.5vw 0.5vw 0 0;
    border-bottom: solid  0.1vw whitesmoke
}

.error-name {
    top: -4vh;
    left: 60vh;
    border-radius: 2vw 2vw 2vw 0.2vw;
}

.error-price {
    top: -4vh;
    left: 8vh;
    border-radius: 2vw 2vw 2vw 0.2vw;
}
.error-info {
    bottom: 10vh;
    left: 60vh;
    border-radius: 0.2vw 2vw 2vw 2vw;
}
@media (max-width: 850px){
    h3 , .price {
     font-size: 5vh;
    }

}
</style>
