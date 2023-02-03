<template>
    <div   class = "error-box">
        <h2 class = 'error-h'> Важная информация:  </h2>
        <div class = "error-text"> {{ textError }} </div>
    </div>

</template>

<script>
export default {
    name: "ErrorCard",
    props: {
        textErrors: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.error-h{
    padding-bottom: 3%;
}
.error-box {
    
    box-sizing: border-box;
    width: 50%;
    margin: 4% auto;
    height: max-content;
    padding: 3%;
    text-align: center;
    
    background-color: white;
    border: solid 5px rgb(234, 194, 114);
    box-shadow: 0px 1px 5px 1px rgba(255, 255, 255, 0.343);
    border-radius: 30px 0;

    font-size: 1.75vw;
}

.error-text {
    padding: 0 20%;
}


@media (max-width: 700px){
    
    .error-box {
    width: 90%;
    font-size: 2vh;
}

}
</style>
