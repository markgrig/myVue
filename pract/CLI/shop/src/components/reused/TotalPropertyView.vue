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
    min-width: 8vw;
    width: fit-content;
    color: white;
    padding: 0.75vh 2vw  0.75vh 2vw;
    text-align: center;
    border: solid 2px rgba(255, 0, 0, 0.66);
    border-radius: 3.5vw 0;
    background-color: #b60f0fb4;
}
.product-img {
    width: 15vw;
    height: 15vw;
    object-fit:cover;
    padding: 0.3vw;
    margin: 1vw;
}
.background-info{
    width: 23.2vw;
    word-break: break-word;
    margin:  1vw 3vw;
    background-image:  url( "../../img/backgroundInfo.jpg") ;
    background-size: 70%;
    height: min-content;
    max-height: 18vw;
    border-radius: 1vw; 
    padding:  1vw;
    border: solid 0.25vw   black
}
.product-info{
    text-align: justify ;
    font-size: 1.12vw;
    overflow: auto;
    margin: 0;
    padding: 0.5vw 3vw 1vw 1.5vw;
    color: rgb(246, 234, 234);
    width: 22vw;
    min-height: 30px; 
    text-indent: 2vw; 
    height: min-content;
    max-height: calc(18vw - 3vw - 40px);
    border-radius: 0vw 0vw 0.5vw 0.5vw; 
    

}
.product-info-topic {
    padding-bottom: 10px;
    color: rgb(246, 234, 234);
    text-align: center;
    font-size: 2vw;
    height: 2vw;
    text-indent: 0px;
    background-color:   rgba(121, 11, 11, 0.7);
    border-radius: 0.5vw 0.5vw 0 0;
    border-bottom: solid  0.1vw whitesmoke
}

.error-name {
    font-size: 1.2vw;
    bottom: calc( 26vw - 50px );
    left:  25vw ;
    width: 13vw;
    height: max-content;
    padding: 0.5vw 1vw 0.5vw 2vw ;
    border-radius: 2vw 2vw 2vw 0.2vw;
}

.error-price {
    bottom: 26vw ;
    left: 3vw;
    font-size: 1.2vw;
    width: 15vw;
    height: max-content;
    padding: 0.5vw 1vw 0.5vw 2vw ; 
    border-radius: 2vw 2vw 2vw 0.2vw;
}
.error-info {
    top: calc( 11vw + 40px );
    left: 24vw;
    font-size: 1.2vw;
    width: 15vw;
    height: max-content;
    padding: 0.5vw 1vw 0.5vw 2vw ; 
    border-radius: 0.2vw 2vw 2vw 2vw;
}

* {
  scrollbar-width: thin;
  scrollbar-color:  rgba(255, 0, 0, 0.605) rgba(234, 194, 114, 0.3);
}

*::-webkit-scrollbar {  
  width: 1.2vw;
}

*::-webkit-scrollbar-track {
  background: rgba(234, 194, 114, 0.3);
  padding: 10px;
  border-radius: 0.2vw;
  border: solid 1px black;
  box-shadow: 0 0  10px 1px white;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(255, 0, 0, 0.605);
  border-radius: 0.4vw;
  border: 3px solid hwb(0 0% 100% / 0.844);
  box-shadow: none;

}


@media (max-width: 700px){

    
    .product-name {
    font-size: 5vw;
    padding-bottom: 5vw;
    width: 60vw;
    margin: 0 10vw;
    }

    .product-price{

    font-size: 4.5vw;
    min-width: 35vw;
    height: 8vw;
    padding: 1vw;
    border-radius: 8vw 0;
    box-sizing: border-box;
    }

    .product-img {
        margin: 6vw 0vw;
        width: 25vw;
        height: 25vw;
    }
    

    .background-info{
        width: 50vw;
        word-break: break-word;
        margin:  3vw 0vw;
        background-image:  url( "../../img/backgroundInfo.jpg") ;
        background-size: 45%;
        height: min-content;
        max-height: 45vw;
        border-radius: 1vw; 
        padding:  1vw;
        border: solid 0.25vh   black
    }

    .product-info{
        padding: 3vw 1.2vw 3vw 2vw;
        font-size: 3vw;
        max-height: calc(45vw - 4vw -  40px);

    

        width: 48vw;
      
    }
    .product-info-topic {
        padding-bottom: 10px;
        color: rgb(246, 234, 234);
        text-align: center;
        font-size: 4vw;
        height: 4vw;
        text-indent: 0px;
        background-color:   rgba(178, 39, 39, 0.731);
        border-radius: 4vw 4vw 0 0;
        border-bottom: solid  0.5vw whitesmoke
    }

    * {
  scrollbar-width: thin;
  scrollbar-color:  rgba(255, 0, 0, 0.605) rgba(234, 194, 114, 0.3);
}

    *::-webkit-scrollbar {  
    width: 3vw;
    }

    *::-webkit-scrollbar-track {
    border: solid 3px black;
    box-shadow: 0 0  20px 2px white;
    }

    *::-webkit-scrollbar-thumb {
    border-radius: 0.8vw;
    }


    
.error-name {
    font-size: 2.5vw;
    bottom: 65vw ;
    left: 32vw;
    width: 35vw;
    padding: 0.5vw 1vw 0.5vw 1vw ;
    padding: 3vw 4vw;
    border-radius: 6vw 6vw 6vw 0.6vw;
}

.error-price {
    bottom:  0;
    top: 50vw ;
    left: 6vw;
    font-size: 3vw;
    width: 22vw;
    height: max-content;
    padding: 3vw 2vw;
    border-radius:  0.6vw 6vw 6vw 6vw;
}
.error-info {
    top: 85vw;
    left: 33vw;
    font-size: 3vw;
    width: 35vw;
    height: max-content;
    padding: 3vw 4vw;
    border-radius: 0.6vw 6vw 6vw 6vw;
}
}
</style>
