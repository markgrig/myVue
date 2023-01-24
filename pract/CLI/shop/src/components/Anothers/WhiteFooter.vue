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
                <h5 class= "hf ligth" target="_blank"> Репозиторий проекта  </h5> 
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
  border-top: solid 0.5vh rgb(27, 3, 242);
  border-radius: 10vw 10vw 0 0;
  background-color: rgba(121, 167, 205, 0.9);
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
  background-color: white;
  
  border-top: solid 0.5vh blue;
  border: solid 0.35vh  blue ;
  border-radius: 10px;
  padding:  1vh 1vw;
  height: min-content;
  width: fit-content;
  margin: 0 0;

  text-align: center;
  
  color: black

}

.text-footer .divf {
  width: 15%;
}


.hf {
  filter: drop-shadow(1px 1px 1px  rgb(83, 3, 242));
}

.ligth:hover {
  animation: light 1.5s infinite;
}

@keyframes light {
  0% {
    box-shadow:  0 1px 5px 1px white;
  }
  50%{
    box-shadow:  0 1px 8px 5px white;
  }
  100%{
    box-shadow:  0 1px 5px 1px white;
  }
  }

@media (max-width: 700px){

  .text-footer {
    flex-direction: column;
  }

  .text-footer .divf {
    width: 80%;
    margin-bottom: 10px; 
    margin-top: 10px;
  }

  .text-footer .hf {
    margin: auto;
  }

}
</style>
