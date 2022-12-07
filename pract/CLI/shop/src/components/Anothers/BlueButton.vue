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
    background-color: rgba(49, 97, 240, 0.8); 
    border: solid 2px rgba(0, 0, 0, 0.323);      
    display: block;
    margin: auto;
    color: white;
    border-radius: 16px;
    margin-top: 1.5%;
    padding: 10px;
    width: max-content;
    height: min-content;
    min-height: 50px;

}
button:hover {
    box-shadow: 0 0 10px 2px rgba(16, 151, 248, 0.744);
    background-color: rgba(49, 97, 220, 0.8); 
 
}
</style>
