<template>
    <div> {{ textPlaceholder }} </div>
</template>

<script>
export default {
    name: "ErrorPlacholder" ,
    props: {
        textPlaceholder: String,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    font-size: 2.5vh;
    padding: 20px;
    position: absolute;
    color: white;
    bottom:  0px;
    left: 0;
    width: fit-content;
    margin-right: 10vh;
    height: min-content;
    padding: 1vh 2vh 1vh 2vh;
    background-color: rgba(255, 58, 58, 0.8);
    border-radius: 4vh 4vh 4vh 4vh;
    border: solid 3px rgb(198, 25, 25);
    transition: 1s;
    box-shadow:  0 0 0.2vw 0.05vw rgb(232, 209, 120);
    animation: show 1s;
} 
@keyframes show {
    0% { 
        opacity: 0;
    }
    50% { 
        opacity: 0.7;
    }
    100% {
        opacity: 1;
    }
}
@media (max-width: 700px){
    div {
        margin: 0;
        margin-top: -160px;
        margin-left: 15px;
        font-size: 3.5vw;
        padding: 10px 10px 0px 2    0px;
        width: 80px;
    }
}
</style>
