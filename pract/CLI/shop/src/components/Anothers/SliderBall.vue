<template>
    
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

</template>

<script>

export default {
    name: "SliderBall" ,
    props: {
        nameSlider: String,
        index: Number,
        sliderSartX: Number,
    },
    data() {
        return {
            isFastmove: false,  
            userMoveBall: {  vector: this.sliderSartX , status: false },
            winWidth: window.screen.width,
            possitionBall: {
                "left": `${ this.sliderSartX}px`
            },
            classData: {
                "ball-box": "ball-box",
            },
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

                this.sliderWidth = event.target.offsetWidth 
                this.userMoveBall.vector =  event.offsetX 

                this.isNotStartOrEnd()
                this.possitionBall["left"] = `calc( -0.5vw + ${ this.userMoveBall.vector + "px" })`
                this.returnKoofSetting()

            }
        }

        if ( event.target.closest( ".ball-box") ) {

            if ( this.userMoveBall.status  ) {

                this.userMoveBall.vector =  this.userMoveBall.vector + event.offsetX

                this.isNotStartOrEnd()
                this.possitionBall["left"] = `calc( -0.5vw + ${ this.userMoveBall.vector + "px" })`
                this.returnKoofSetting()

            }

        }

        },
        userTouchedSetting(event) {

            if ( !event.target.closest( ".ball-box") ) {

                
                
                this.test = this.userMoveBall.vector

                this.sliderWidth = event.target.offsetWidth 
                this.userMoveBall.vector = event.touches[0].clientX - 100

                this.isNotStartOrEnd()
                this.possitionBall["left"] = `calc( -0.5vw + ${ this.userMoveBall.vector + "px" })`
                this.returnKoofSetting()

            }
            

        },
        isNotStartOrEnd(){
            const startValue = 0 
                const endValue = this.sliderWidth

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

                this.userMoveBall.vector = event.offsetX

                if ( !this.userMoveBall.status ) {
                    
                        this.isFastmove = true

                        this.possitionBall["left"] =  `calc( -1vw + ${ this.userMoveBall.vector }px ) `
                        this.returnKoofSetting()

                        setTimeout( () => { this.isFastmove = false }, 100)
                    
                    
                }
                    
            
        },
        returnKoofSetting() {
            
            const koof =  (this.userMoveBall.vector)/ (this.sliderWidth)
            this.$emit("returnSetting", koof , this.index , this.userMoveBall.vector  )

        },
        userStartSetting() {
            this.classData["ball-box"]+= " " + "--use-ball" 
        },
        userEndSetting() {
            console.log(23444444);
            this.classData["ball-box"] =  this.classData["ball-box"].replace( " --use-ball", "") 
        },

    }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.slider {
    position: relative;
    height: 4vw;
} 

.ball-box {
    position: relative;
    top: -0.6vw;
    left: 0.5vw;    

    width: 1.1vw;
    height: 1.1vw;
    
    background-color: red;
    border: solid 0.15vw gold;
    border-radius: 0.5vw;
}

.line {
    position: absolute;
    width: 100%;
    height: 0.5vw;
    margin: 1vw 0;

    background-color: rgba(255, 255, 255, 1);
    border-radius: 0.4vw;

}

.--use-ball{
    background-color: red;
}

@media (max-width: 700px){

    .slider {
        height: max-content;
        padding: 15px 0;
        font-size: 70%;
    } 

    .ball-box {
        position: relative;

        top: -1vh;
        left: 0.5vw;    
        width: 2vh;
        height: 2vh;
        
        border: solid 0.25vh gold;
        border-radius: 1vh;
      

    }

    .line {
            position: absolute;
            height: 0.6vh;
            margin: 1vh 0;

            background-color: rgba(255, 255, 255, 1);
            border-radius: 0.4vh;
        }

}



</style>
