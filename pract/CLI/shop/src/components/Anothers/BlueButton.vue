<template>
    <button> {{ textButton }} </button>
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
    border: solid 2px rgba(67, 64, 64, 0.323);      
    display: block;
    margin: auto;
    color: rgb(238, 236, 236);
    border-radius: 16px;
    margin-top: 1.5%;
    padding: 10px;
    width: max-content;
    height: min-content;
    min-height: 50px;

    box-shadow: 0 0 1px 1px blueviolet;

}
button:hover {
    box-shadow: 0 0 3px 2px blueviolet;
    background-color: rgb(6, 130, 254);
    color: white;
    font-size: 103%;
}



</style>
