<template>
    
    <div 
        class = "slider" 
        @mousemove = "userMoveSetting($event)">
         {{ nameSlider }} 
                
        <div 
            class = "line"
            @mousemove = "usedBall($event)"
            @mouseup="usedLine">

            <div
                class= "ball-box"
                :style="possitionBall">

                <div 
                    class= "ball"
                    id= "shadow" > 
                </div>

            </div>
                   
        </div>
    </div>

</template>

<script>

export default {
    name: "SliderBall" ,
    props: {
        nameSlider: String,
        index: Number
    },
    data() {
        return {
            isFastmove: false,  
            userMoveBall: {  vector: 0 , new: 0 , old: 0 ,
                             status: false , start: 825 , member: 825 },

            winWidth: window.screen.width,
            possitionBall: {
                "left": "-0.5vw"
            },
            value: "111"
        }
    },
    methods: { 
        usedBall( event ) {
            
            
            if ( event.target.closest( ".ball-box") ) {
                
                event.target.onmousedown = () => {
                    
                    if ( !this.isFastmove ) {
                        
                        this.isFastmove = true
                        this.userMoveBall.status = ! this.userMoveBall.status
                        this.userMoveSetting(event)
                        setTimeout( () => { this.isFastmove = false }, 100)

                    }
                        

                }       

            } 
                 
            
        },
        userMoveSetting(event) {

            
            if ( this.isFastmove  )  {
                this.userMoveBall.member = this.userMoveBall.old
                this.userMoveBall.vector = this.userMoveBall.member - this.userMoveBall.start
            }


            this.userMoveBall.old = this.userMoveBall.new
            this.userMoveBall.new = event.clientX
            
            if ( this.userMoveBall.status  ) {
            
                this.userMoveBall.vector =  this.userMoveBall.vector + this.userMoveBall.new - this.userMoveBall.old
                
                const startValue = 0
                const endValue  = 0.22 * this.winWidth
                let x = startValue + this.userMoveBall.vector

                if ( x > endValue) {
                    this.userMoveBall.vector = endValue - startValue
                }

                if ( x < startValue ) {
                    this.userMoveBall.vector = startValue          
                }

                this.possitionBall["left"] = ` calc( -1vw   + ${ this.userMoveBall.vector  }px)`
                this.returnKoofSetting()

            }
        },
        usedLine(event) {


            if ( event.target.closest( ".ball-box") ) {
                if ( event.target.closest( ".line") ) {
                    return false
                }
            }

                if ( !this.userMoveBall.status ) {
                    
                    if ( !this.isFastmove ) {

                        this.isFastmove = true

                        this.possitionBall["left"] = ` calc( -0.65vw +  ${ this.userMoveBall.new - this.userMoveBall.start }px)`
                        this.returnKoofSetting()

                        setTimeout( () => { this.isFastmove = false }, 100)
                    }
                    
                }
                    
            
        },
        returnKoofSetting() {
            
            const koof =  (this.userMoveBall.new - this.userMoveBall.start )/ (0.22 * this.winWidth)
            this.$emit("returnSetting", koof , this.index )

        },
        

        
    }, /*
    computed: {
        
        myStr: {
            get() { return this.value },
            set(value) { this.$emit("input", value) }
        }
        
    }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.slider {
    height: 4vw;
} 
.ball {
    position: absolute;
    border: solid 0.1vw gold;
    top: 0.5vw;
    left: 0.5vw;
    background-color: red;
    font-size: 2vw;
    width: 1vw;
    height: 1vw;
}

.ball-box {
    position: relative;
    top: -1vw;
    background-color: rgba(255, 0, 0, 0);
    width: 2.25vw;
    height: 2.25vw;
}

.line {
    position: absolute;
    background-color: white;
    width: 22vw;
    height: 0.2vw;
    margin: 0.4vw 0;
}

</style>
