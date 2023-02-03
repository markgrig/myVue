<template>

    <div
        v-for = "el, key in contact" 
        :key="key">
            
        <div 
            v-if = "el">

                <h2 class = "topic-page">   {{ topics[key] }}:</h2>
                <div class = "conact-page-el"> {{ el }} </div>

        </div>
            
    </div>
     

</template>

<script>

export default {
    name: "ConactView",
    props: {
        contact: Object,
        isPage: Boolean,
    },
    data() {
      return {
        topics: {
        phone: "Tелефон",
        email: "Электронная почта"
      }
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.conact-page-el{
    box-sizing: border-box;
    position: static;
    margin: 5% 0%;
    width: 100%;
    padding: 6%;
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




@media (max-width: 700px){
  
    .conact-page-el{

        font-size: 100%;
    }

}
</style>
