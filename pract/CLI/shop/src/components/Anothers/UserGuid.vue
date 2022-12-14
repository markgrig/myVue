<template>
    <div class= "box">
        <div v-for = "el, i in insrtuction" 
             :key = "i" 
             class="el">
            <h4 class ="words" > {{ el.words }}  </h4>
            <img class = "img-instr" :src= "`${ el.img }`" alt="">
            <hr class = "hr-instr">
        </div>
        
    </div>
</template>

<script>
export default {
    name: "UserGuid",
    props: {
        insrtuction: Array
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.el{
    padding: 20px;
}

.words {
    width: 100% ;
    padding: 2.5%;
    color: white;
    filter: drop-shadow(0px 0px 2px black);
}
.img-instr {
    z-index: 0;
    box-sizing: border-box;
    width: 100%;
    border-radius: 20px;
    margin-top: 0.3%;
    margin-bottom: -1%;
    border: solid 4px rgb(23, 22, 22);
    box-shadow: 0 0 50px 1px white;
}

.img-instr:hover {
    width: 102%;
    margin-left: -1%;
    transition: 0.1s ease-out;
}
.hr-instr {
    z-index: 7;
    box-sizing: border-box;
    width: 50%;
    margin-left: 25%;
    margin-bottom: 0.2%;  
    height: 16px;
    background: radial-gradient(rgb(130, 130, 130), rgb(32, 31, 31)); 
    border: solid 2px rgb(16, 16, 16);
    border-radius: 10px 10px 5px 5px;
}
</style>
