<template>
    <div class="cross" 
            @:click="deleteModal($event)"> &#10006; 
    </div>
</template>

<script>
export default {
    name: "RedCross",
    props: {
        deleteModal: Function
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cross {
    height: 3vw;
    width: 5vw;
    position: absolute;
    color: red;
    font-size: 2.5vw;
    top: -0.4vw;
    left: calc(100% - 2.5vw);
}

.cross:hover {
    font-size: 3vw;
    color: red;
    top: -0.6vw;
    left: calc(100% - 3vw);
}



@media (max-width: 700px){
    
    .cross {
        height: 6vw;
        position: absolute;
        font-size: 6vw;
        top: -1vw;
        left: calc(100% - 6vw);
        overflow: visible;
    }

    .cross:hover {
        height: 6vw;
        font-size: 6vw;
        color: red;
        top: -1vw;
        left: calc(100% - 6vw);
}
}
</style>
