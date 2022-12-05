<template>
    <div>
        <div v-for = "el, i in insrtuction" 
             :key = "i" >
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
.words {
    width: 100% ;
    padding: 2.5%;
    color: white;
}
.img-instr {
    z-index: 0;
    box-sizing: border-box;
    width: 100%;
    border-radius: 20px;
    margin-top: 0.3%;
    margin-bottom: -1%;
    border: solid 4px rgb(23, 22, 22);
    box-shadow: none;
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
