<template>
     <div class = "footer">
        <div class="text-footer">
          <div class= "divf"> 
            <h5 class= "hf ligth"> Данный сайт написан в качестве проектной работы при осовение фрейворка Vue.js.  </h5>
          </div> 
          <div class= "divf">
            <h5 class= "hf ligth"> Автор сайта: markgrig </h5> 
          </div>
          <div class= "divf">
            <a href="https://github.com/markgrig">
                <h5 class= "hf ligth" target="_blank" > Гитхаб автора </h5>
            </a>
          </div>
          <div class= "divf">
            <a href="https://markgrig.github.io/resume/">
                <h5 class= "hf ligth" target="_blank" > Резюме автора</h5>  
            </a>
          </div>
          <div class= "divf" target="_blank">
            <a href="https://github.com/markgrig/myVue">
                <h5 class= "hf ligth" target="_blank"> Репозиторий проекта</h5> 
             </a>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: "WhiteFooter" ,
    props: {
        textPlaceholder: String,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer {
  
  box-sizing: border-box;
  border-top: solid 0.5vh rgba(0, 0, 0, 1);
  border-radius: 10vw 10vw 0 0;
  background-color: rgba(236, 226, 226, 0.7);
  height: max-content;
  padding: 1vh;
  width: 100vw;
  left: 0;

  flex-shrink: 0
}

.text-footer {
  display: flex;
  width: 80vw;
  margin: 1vh auto;
  justify-content: space-between;
  align-items: center;
  
}


.text-footer .hf {
  background-color: rgba(34, 97, 246, 0.3);
  border-top: solid 0.5vh blue;
  border: solid 0.35vh  ;
  border-radius: 10px;
  padding:  1vh 1vw;
  height: min-content;
  width: fit-content;
  margin: 0 0;

  text-align: center;
  color: black

}


@media (max-width: 700px){
    text-footer .divf {
        width: 80vw;

    }

  .text-footer {
    flex-direction: column;
  }

  .text-footer .hf {
    margin: auto;
    margin-bottom: 10px; 
    margin-top: 10px;
  }

}
</style>
