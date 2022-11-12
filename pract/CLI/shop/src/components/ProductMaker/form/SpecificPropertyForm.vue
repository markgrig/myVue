<template>
   <div display= none></div>
</template>

<script>
export default {
    name: "SpecificPropertyForm",
    props: {
        specificPropetry: Object
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    background-color: rgba(0, 0, 255, 0.465);       
    padding: 10px; 
    display: block;
    margin: auto;
    color: white;
    border-radius: 12px;
    margin-top: 20px;
}
button:hover {
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.315);
}
</style>
