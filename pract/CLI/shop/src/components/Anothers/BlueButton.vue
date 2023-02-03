<template>
    <button> <div> {{ textButton }}</div> </button>
</template>

<script>
export default {
    name: "BlueButton",
    props: {
        textButton: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    font-size: calc(60% + 0.5vw);
    background-color: rgb(6, 130, 254, 0.92);
    border: solid 2px rgba(255, 0, 0, 0.6);      
    display: block;
    margin: auto;

    color: rgb(238, 236, 236);
    border-radius: 16px;
    margin-top: 1%;
    padding: 3px 12px;
    width: max-content;
    height: min-content;
    

  

}

button div {
    filter: drop-shadow(0px 0px 1px black);
    font-weight: 900;
}
button:hover {
    box-shadow: 1px 1px 6px 2px rgb(234, 222, 153);
    background-color: rgb(6, 130, 254);
    color: white;
    font-size: 103%;
}


@media (max-width: 700px){
    button {
        margin: 5px auto;
        margin-top: 1%;
        min-height:  16px;
        padding: 4px 5px;

        border: solid 1px rgba(255, 0, 0, 0.6);  
        border-radius: 8px;
        font-size: calc(60% + 0.5vw);


    }

    button:hover {
    font-size: 68%;
}

}

</style>
