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
    font-size: 100%;
    background-color: rgb(6, 130, 254, 0.92);
    border: solid 2px rgba(255, 0, 0, 0.6);      
    display: block;
    margin: auto 15px;
    color: rgb(238, 236, 236);
    border-radius: 16px;
    margin-top: 1.5%;
    padding: 10px;
    width: max-content;
    height: min-content;
    min-height: 50px;

  

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
        min-height:  20px;
        padding: 4px 5px;

        border: solid 1px rgba(255, 0, 0, 0.6);  
        border-radius: 8px;
        font-size: 70%;


    }

    button:hover {
    font-size: 73%;
}

}

</style>
