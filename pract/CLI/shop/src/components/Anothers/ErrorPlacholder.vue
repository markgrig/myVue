<template>
    <div> {{ textPlaceholder }} </div>
</template>

<script>
export default {
    name: "ErrorPlacholder" ,
    props: {
        textPlaceholder: String,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    z-index: 10;
    position: absolute;

    width: fit-content;  
    height: min-content;

    width: 150px;
    height: max-content;
    padding: 10px;
    border-radius: 30px 30px 30px 5px;

    color: white;
    background-color: rgba(255, 58, 58, 0.75);
    border: solid 3px rgb(198, 25, 25);
    transition: 1s;
    box-shadow:  0 0 0.2vw 0.05vw rgb(232, 209, 120);
    animation: show 1s;

    font-size: 14px;
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
        font-size: 10px;
        padding: 10px;
        border: solid 2px rgb(198, 25, 25);
        width: 80px;
    }
}
</style>
