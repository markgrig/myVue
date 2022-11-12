<template>

    <div class = "background-info error">
            
        <h3 class = "product-info-topic"> Описание: </h3>
        <div class = "product-info"> {{ infoUsersProduct }}
        
        </div>  

        <ErrorPlacholder  
                class = "error-info" 
                    v-if = "!isInfoSuccess  && valueError !== ''"
                    :textPlaceholder = "valueError"> 
            </ErrorPlacholder>

    </div>

    
</template>

<script>

export default {
    name: "InfoView",
    props: {
        infoUsersProduct: String,
        isInfoSuccess: Boolean,
        valueError: String
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.error{
    position: relative;
}
.background-info{
    position: absolute;
    margin:  0;
    right: 5%;
    top: 25%;
    width: 46%;

    min-height: 30%;
    height: min-content;
    border-radius: 5px; 
    padding:  1% 4%;

    word-break: break-word;
    background-color: rgba(192, 192, 192, 0.163);
    border: solid 1px   black
}
.product-info{
    
    height: min-content;
    max-height: 10pc;
    margin: 0  -7% 0  0% ;
    padding: 2% 5% 0 0%;
    

    text-align: justify ;
    overflow: auto;
    color: black;
 
    text-indent: 30px; 
    font-size: 140%;
}
.product-info-topic {

    height: 1.2vw;
    
    text-align: center;
    padding-bottom: 10px;
    color: rgb(246, 234, 234);
    text-indent: 0px;

    background-color:   rgba(121, 11, 11, 0.7);
    border-radius: 15px 15px 0 0;
    border-bottom: solid  0.1vw whitesmoke;

    font-size: 150%;
}

.error-info {
    position: absolute;

    bottom: 0%;
    top: 80%;
    left: 30%;
    padding-left: 20px;

    height: max-content;
    border-radius: 5px 30px 30px 30px;
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

   
    .error-info {
        position: absolute;
        top: 300%;;
        left: 10%;
   
    }

    .product-info{
        height: min-content;
        max-height: 90px;
        font-size: 12px;
    }

    .product-info-topic{
        font-size: 16px;
        height: 16px;
        padding: 2px;
    }

 

    *::-webkit-scrollbar {  
        width: 1.3vh;
    }

    *::-webkit-scrollbar-track {
       border: solid 1px black;    
    }

    *::-webkit-scrollbar-thumb {
        border: 2px solid hwb(0 0% 100% / 0.844);
    }
}
</style>
