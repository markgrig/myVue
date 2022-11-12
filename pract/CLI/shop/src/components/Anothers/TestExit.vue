<template>
    
     <div class ="modal-window icons" >
            <div class = "flex-class">
                <div>
                    <img class ="ico-exit" src="@/img/exit.jpg" alt=""  @click ="userLeave()">
                    <h3> Да, я уверен  </h3>
                </div>
                <div>
                    <img class ="ico-noexit" src="@/img/noExit.jpg" alt="" @click ="userNotLeave()">
                    <h3> Нет, я добавлю</h3>
                </div>
            </div>
    </div>

</template>

<script>
export default {
    name: "TestExit" ,
    methods: {
        userNotLeave() {
            this.$emit( 'userNotLeave')
        },
        userLeave(){
            this.$emit( 'userLeave')
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-class{
    display: flex;
    flex-direction: row;
    }
.modal-window {
    z-index: 2;
    position: absolute;
    border-radius: 10px;
    border: solid 3px rgb(234, 194, 114);
    box-shadow: 0px 1px 5px 1px rgba(255, 255, 255, 0.343);

}

.icons{
    
    width: 60%;
    margin-left: 20%;
    top: 20px;
    box-shadow: none;
    border: none;
}
.icons h3 {
    margin-top: -60px;
    text-align: center;
    font-size: 140%;
    width: 80%;
    margin-left: 12%;
    color: white;
}
.ico-noexit, .ico-exit {
   margin: 100px 0px;
   width: 20vw;
   height: auto;
   
}
.ico-noexit:hover, .ico-exit:hover {
  animation: light 1.5s infinite;
}

@media (max-width: 700px){

    .flex-class{
        display: flex;
        flex-direction: column;
    }
    .icons{
        width: 80vw;
        margin-left: 8vw;
        top: 20px;
        box-shadow: none;
        border: none;
    }
    
    .ico-noexit, .ico-exit {
        margin: 30vw 26.5vw;
        width: 30vw;
   
    }
}
</style>
