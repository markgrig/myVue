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
    border: solid 1px rgb(128, 101, 48);     
    padding: 10px 20px; 
    display: block;
    margin: auto;
    color: white;
    border-radius: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 80px;
}
button:hover {
    box-shadow: 0 0 6px 3px rgba(78, 77, 77, 0.315);
    background-color: rgba(8, 35, 117, 0.3); 
    border: solid 1px rgb(236, 212, 164);
}
</style>
