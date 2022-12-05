<template>
    
    <div ref= "boxSlider" class = "box-slider">
      <div 
          class = "slider" 
          @mousemove = "userMoveSetting($event)"
          @touchmove= "userTouchedSetting($event)"
          @touchstart= "userStartSetting($event)"
          @touchend= "userEndSetting($event)">
         
           {{ nameSlider }}      
  
          <div 
              class = "line"
              @mousemove = "usedBall($event)"
              @mouseup="usedLine">
  
              <div
                  :class= "classData['ball-box']"
                  :style="possitionBall">
  
                 
  
              </div> 
          </div>
      </div>
  
    </div>
  </template>
  
  <script>
  
  export default {
      name: "SliderBallVolume" ,
      props: {
          nameSlider: String,
          index: Number,
          sliderSartX: Number,
      },
      mounted() {
        this.boxSliderDOM = this.$refs.boxSlider
      },
      data() {
          return {
              isFastmove: false,  
              userMoveBall: {  vector: this.sliderSartX , status: false },
              winWidth: window.screen.width,
              sliderWidth: 0,
              ballWidthL: 0,
              classData: {
                  "ball-box": "ball-box",
              },
          }
      },
      computed: {
          possitionBall() {
              return {
                  "left": `${ this.sliderSartX}px`
              }
          }
      },
      methods: { 
          usedBall( event ) {
              if ( event.target.closest( ".ball-box") ) {
                  
                  event.target.onmousedown = () => {    
                       if ( !this.isFastmove ) {
                          this.isFastmove = true
  
  
                          this.userMoveBall.status = ! this.userMoveBall.status
                          this.userMoveBall.status? this.userStartSetting():   this.userEndSetting()
  
                          setTimeout( ()=> {this.isFastmove = false}, 100)
                       }
  
                          
                  }
      
  
              } 
                   
              
          },
          userMoveSetting(event) {
  
              if ( !event.target.closest( ".ball-box") ) {
  
                  if ( this.userMoveBall.status  ) {
                  
                      console.log(event.target.offsetWidth, event.target );
  
                  this.sliderWidth = event.target.offsetWidth 
                  this.userMoveBall.vector =  event.offsetX 
  
                  this.isNotStartOrEnd()
                  this.possitionBall["left"] = `${ this.userMoveBall.vector + "px" }`
                  this.returnKoofSetting()
  
              }
          }
  
          if ( event.target.closest( ".ball-box") ) {
  
              if ( this.userMoveBall.status  ) {
  
                  this.ballWidth = event.target.offsetWidth
                  this.userMoveBall.vector =  this.userMoveBall.vector + event.offsetX - this.ballWidth/2
  
                  console.log(this.userMoveBall.vector);
                  this.isNotStartOrEnd()
                  this.possitionBall["left"] = `${ this.userMoveBall.vector + "px" }`
                  this.returnKoofSetting()
  
              }
  
          }
  
          },
          userTouchedSetting(event) {
  
            if ( event.target.closest( ".ball-box") ) {
                
                console.log( event.target.parentNode.getBoundingClientRect().x);

//                event.defaultPrevented = true

                this.test = this.userMoveBall.vector
                this.sliderWidth = event.target.parentNode.offsetWidth 
                this.ballWidth = event.target.offsetWidth
                this.userMoveBall.vector = event.touches[0].clientX - event.target.parentNode.getBoundingClientRect().x

                this.isNotStartOrEnd()
                this.possitionBall["left"] = `calc( -0.5vw + ${ this.userMoveBall.vector + "px" })`
                this.returnKoofSetting()

            }
              
  
          },
          isNotStartOrEnd(){
              const startValue = 0 
                  const endValue = this.sliderWidth - this.ballWidth
  
                  if (this.userMoveBall.vector < startValue ){
                      this.userMoveBall.vector = startValue 
                  }
  
                  if (this.userMoveBall.vector > endValue ){
                      this.userMoveBall.vector = endValue
                  }
          },
  
          usedLine(event) {
      
             
              if ( event.target.closest( ".ball-box") ) {
                  if ( event.target.closest( ".line") ) {
                      return false
                  }
              }
                  
                  const ballWidth = event.target.querySelector(".ball-box").offsetWidth
  
                  this.userMoveBall.vector = event.offsetX - ballWidth/2
  
                  if ( !this.userMoveBall.status ) {
                      
                          this.isFastmove = true
  
                          this.possitionBall["left"] =  `${ this.userMoveBall.vector} `
                          this.returnKoofSetting()
  
                          setTimeout( () => { this.isFastmove = false }, 100)
                      
                      
                  }
                      
              
          },
          returnKoofSetting() {
              
              const koof =  (this.userMoveBall.vector)/ (this.sliderWidth - this.ballWidth)
              this.$emit("returnSetting", this.userMoveBall.vector,  koof , this.index  )
  
          },
          userStartSetting() {
              this.classData["ball-box"]+= " " + "--use-ball" 
          },
          userEndSetting() {
              
              this.classData["ball-box"] =  this.classData["ball-box"].replace( " --use-ball", "") 
          },
  
      }, 
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  .box-slider {
      height: 20%;
  }
  .slider {
    position: relative;
    font-size: 1vw;
    padding: 1%;
  
  } 
  
  .ball-box {
      position: absolute;
      box-sizing: border-box;
      bottom: -50%;
      left: 0;    
  
      aspect-ratio: 2/3;
      height: 200%;

      background-color: rgb(6, 110, 245);
      border: solid 2px gold;
      border-radius: 40%;
  }

  .ball-box:hover {
    animation: light 2s infinite;
  }
  
  .line {
      position: absolute;
      width: 100%;
      height: 1000%;
      margin: 1vw 0;
      bottom: -100%;
  
      background-color: rgba(255, 255, 255, 1);
      border: solid 2px rgb(208, 131, 131);
      border-radius: 0.4vw;
  
  }
  
  .--use-ball{
      background-color: rgb(0, 115, 255, 0.9);
      animation: light 2s infinite;
  }
  
  @media (max-width: 700px){
  
    
  }
  
  
  
  </style>
  