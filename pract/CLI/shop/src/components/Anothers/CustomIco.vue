<template>
    
   
  
        <img 
            :src="src" 
            alt=""  
            class = "picture add-ico"  
            @click = "$emit('userClickedOnIco', $event)">

        <WhitePlacholder 
            class ="placeh white-placeholder-ico"
            :textPlaceholder = "textPlaceholder">
        </WhitePlacholder>

   

</template>

<script>

export default {
    name: "CustomIco",
    emits: ['userClickedOnIco'],
    props: {
        nameValue: String,
        topic: String,
        src: String,
        textPlaceholder: String,
    },
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.picture {
    z-index: 1;
    margin: 0;
    height: auto;
    width: 100%;
    padding: 0;

    border-radius: 50%;
    border: solid 0.15vw rgb(199, 81, 1);
}
.picture:hover {
    animation: light 1s infinite;
}


.placeh {
    z-index: 5000;
    text-align: center;
    color: rgb(255, 90, 2);
    font-weight: 500;
    font-size: 20px;
    box-shadow: 0 0 5px 3px gray;
    border-radius: 30px 30px 30px 0;
}

.white-placeholder-ico {
    opacity: 0;
    z-index: 5000;
    
    box-sizing: content-box;
    width: auto;
    height: max-content;
    padding: 10%;
    bottom: 60%;
    left: 50%;
 



}


.add-ico:hover + .white-placeholder-ico {
    opacity: 1;
}





@media (max-width: 700px){

    .white-placeholder-ico {
        display: none;
    }
    .add-ico:hover + .white-placeholder-add {
        opacity: 0;
    }

  
}
</style>
