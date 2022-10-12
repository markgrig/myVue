<template>
    <div> {{ textPlaceholder }} </div>
</template>

<script>
export default {
    name: "WhitePlacholder" ,
    props: {
        textPlaceholder: String,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    padding: 20px;
    position: absolute;
    top: auto;
    left: 100px;
    height: 50px;
    width: 100px;
    padding: 10px 0px 10px 20px;
    background-color: rgba(240, 255, 255, 0.8);
    border-radius: 30px 30px 0px 30px;
    border: solid 3px white;
    transition: 1s;
    box-shadow:  0 0 5px 3px white;
}
</style>
