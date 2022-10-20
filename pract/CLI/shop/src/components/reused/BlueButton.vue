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
    background-color: rgba(8, 35, 117, 0.3); 
    border: solid 0.05vw rgb(128, 101, 48);     
    padding: 1vw; 
    display: block;
    margin: auto;
    color: white;
    border-radius: 1vw;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: calc( 0.7vh + 0.7vw );
    height: fit-content;
}
button:hover {
    box-shadow: 0 0 6px 3px rgba(78, 77, 77, 0.315);
    background-color: rgba(8, 35, 117, 0.3); 
    border: solid 0.05vw rgb(236, 212, 164);
}
</style>
