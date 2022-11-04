<template>
    <div  class ="background-cropper">

        <div class= "box-cropper">

            <div 
                class="cross" 
                @:click="deleteModal"> 
                    &#10006;
            </div>
         
                <img
                    class = "user-product-picture"
                    :style= "styleProductPicture"
                    alt=""
                    @mouseover = "userMakePicture($event)"
                    @mouseout = "userDontMakePicture($event)"
                    @mousemove = "userMovePicture($event)"
                    @mousewheel = "userResizedPicture($event)" >    

          
         
            <div class = "pannel-product-picture">
        
                <div class = "pannel shadow-pannel">
                
                    <SliderBall  
                            v-for = "el , index in arraySlider" 
                            :key="index" :nameSlider="el"
                            :index = "index"
                            @returnSetting="returnSetting"> 
                    </SliderBall>
                    
                </div>

                
            </div>

            
          
        </div>
    </div>
</template>

<script>
import SliderBall from "@/components/reused/SliderBall.vue"

export default {
    name: "ImageCropper" ,
    components: {
        SliderBall
    },
    props: {
        src: {
            default:  "https://www.thinkwithgoogle.com/_qs/static/img/icons/data-points/consumer_goods.svg"

        },
        isHideModalPicture: Boolean
    },
    data() {
        return {
            myStr: "hello",
            isMovePicture: false,
            scrollValue: 1,
            arraySlider: [  "Свечение картинки",
                            "Tолщина рамки" , 
                            "Скругление углов" , 
                            "Контрастность"],
            koof: [ 0, 0 , 0, 0],
            mouseXY: {
                old: {
                    x: 0,
                    y: 0,
                },
                new: {
                    x: 0,
                    y: 0,
                }
            },
            mouseMemberXY: {
                x: 0,
                y: 0
            },
            pixelForMove: [ 0 , 0 ],
        }
    },
    methods: { 
        changeStyle() {
            this.backgroundProductPicture['background'] = 
                    
                        `url(${this.src}) 
                        no-repeat
                        calc( 50% + ${ this.mouseVectorForPicutre[0] + "px" })
                        calc( 50%  + ${ this.mouseVectorForPicutre[1] + "px" }) 
                        / 
                        calc( ${ 100 * this.scrollValue + "%" } + ${ 0 + "px" }) 
                        auto` 
                
        },
        deleteModal(event) {   

            if (event.target.closest(".overflower")) {
                this.$emit( "isHideModalPicture" , event.target.closest(".overflower"),  true)
                this.$emit( "setStyleProductPicture" , this.styleProductPicture)
            }
            
        },
        userMakePicture(event) {

            
            event.target.onmousedown = () => {
                this.isMovePicture = true
                return false;      
            }

            event.target.onmouseup = () => {
                this.isMovePicture = false
                
            }


        },
        userDontMakePicture() {

            this.isMovePicture = false
             
        },
        userMovePicture(event) {

            this.mouseXY.old.x = this.mouseXY.new.x
            this.mouseXY.old.y = this.mouseXY.new.y

            this.mouseXY.new.x = event.clientX
            this.mouseXY.new.y = event.clientY

            
            
            this.pixelForMove = this.getPixelForMove(event)
            
            if ( this.isMovePicture ) {

                this.movePicture(event)
            
            }

             


        },
        
        userResizedPicture(event) {

            const deltaY = event.deltaY
            
            if ( this.scrollValue > 2 ) {
                this.scrollValue -= 0.05
                return
            }

            if ( this.scrollValue < 1.05 ) {
                this.scrollValue += 0.05
                return
            }

            deltaY > 0 ? this.scrollValue += 0.05 : this.scrollValue -= 0.05

            this.isReturnPositions(event)
            this.changeStyle()

        },
        movePicture() {
            
                this.mouseMemberXY.x =  this.mouseVectorForPicutre[0]
                this.mouseMemberXY.y =  this.mouseVectorForPicutre[1]

                this.changeStyle()
        },
        getPixelForMove( event ) {

            const pixelForMove = []

            const widthBox = event.target.clientWidth
           
            pixelForMove[0] = widthBox * ( this.scrollValue -1) / 2
            
            
            const heightBox = event.target.clientHeight
            pixelForMove[1] = heightBox*(this.scrollValue - 1) / 2

            console.log(widthBox , heightBox);
            return pixelForMove
        },

        isReturnPositions(event) {

            this.pixelForMove = this.getPixelForMove(event)
            

            if ( this.mouseMemberXY.x > this.pixelForMove[0] ) {
                this.mouseMemberXY.x =  this.pixelForMove[0]
            }

            if ( this.mouseMemberXY.x < -this.pixelForMove[0] ) {
                this.mouseMemberXY.x =  -this.pixelForMove[0]
            }

            if ( this.mouseMemberXY.y > this.pixelForMove[1] ) {
                this.mouseMemberXY.y =  this.pixelForMove[1]
            }

            if ( this.mouseMemberXY.y < -this.pixelForMove[1] ) {
                this.mouseMemberXY.y =  - this.pixelForMove[1]
            }
        },
        returnSetting(value, index) {

            if ( value > 1 ) value = 1
            if ( value < 0 ) value = 0 

            this.koof[index] = value

        }
    },
    
    computed: {
        mouseVectorForPicutre() {
            
            const vector =  [
                    this.mouseXY.new.x  - this.mouseXY.old.x , 
                    this.mouseXY.new.y  - this.mouseXY.old.y 
            ]

            if ( Math.abs( this.mouseMemberXY.x + vector[0] ) <  this.pixelForMove[0] &&
                 Math.abs( this.mouseMemberXY.y + vector[1] ) < this.pixelForMove[1]  ) {

                return [
                    this.mouseMemberXY.x + vector[0], 
                    this.mouseMemberXY.y + vector[1] 
                ]

            }

            return [ this.mouseMemberXY.x ,  this.mouseMemberXY.y ]

        },
        backgroundProductPicture() {
            
            return {
                'background': `url(${this.src}) 
                no-repeat
                50% 50% / 100% auto` 
            }
            
        },
    
        styleProductPictureSetting() {
            const shadowSize = Math.floor( 1.5*(this.koof[0]+0.5)*100)/100
            const borderWidth = Math.floor( 0.6 * (this.koof[1])*100)/100
            const borderRad = Math.floor( 15 * (this.koof[2] + 0.2)*100)/100
            const constrast = Math.floor( 0.8 * (this.koof[3] + 1.25)*100)/100
          //      const blur = Math.floor( 1 * (this.koof[3] + 1)*100)/100

            return {
                    "box-shadow":  `0 0 ${ shadowSize/2 }vw 0.2vw white` ,
                    "border": `solid ${borderWidth}vw white`,
                    "border-radius": `${borderRad}vw`,
                    "filter": `contrast(${constrast}) drop-shadow( 0 0  ${ shadowSize/1.5 }vw orange)`,
                   
                
            }
        }, 
        styleProductPicture() {

            return {
                ... this.backgroundProductPicture,
                ... this.styleProductPictureSetting                        
            }
        }
    
    },
    
        
    
 
        
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background-cropper {
    opacity: 1;
    z-index: 3;
    position: absolute;
    top: 0vw;
    left: 0vw;
    background-color: rgba(93, 0, 255, 0.080);
    width: 100vw;
    height: 110vh;
}

.box-cropper {
    opacity: 1;
    border: solid 0.6vw rgba(249, 120, 84, 0.99);
    border-radius: 2vw;
    z-index: 3;
    position: absolute;
    top: 5vw;
    left: 10vw;
    background-color: rgba(36, 92, 214, 0.28);
    width: 80vw;
    height: 40vw;
    overflow: hidden;
}
.button-crop {
    font-size: 1.3vw;
    background-color: beige;
    width: 10vw;
    display: block;
    margin: auto;
}
.cross {
    height: 40px;
    position: relative;
    font-size: 30px;
    color: red;
    bottom: -5px;
    left: calc(100% - 40px);
}

.cross:hover {
    font-size: 32px;
    position: relative;
    color: red;
    left: calc(100% - 40px);
}

.box-product-picture {
    overflow: hidden;
    width: 30vw;
    height: 30vw;
    margin: 2vw 12vw;
    position: relative;

    box-sizing: border-box;
    border-radius: 5vw;
    border: solid 0.2vh rgb(214, 140, 37);
    

   
}

.user-product-picture {

    margin: 2vw 12vw;
    position: absolute; ;
    width: 30vw;
    height: 30vw;

    border-radius: 5vw;
    border: solid 0.2vh rgb(214, 140, 37);
    
    -khtml-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;

  
    

}




.pannel-product-picture {
    padding: 1vw 0;
    position: absolute ;
    top: 10vw;
    left: 46vw;
    width: 30vw;
    height: 18vw;
    border-radius: 2vw;
    border: solid black;
    box-shadow:  0 0vw 0.2vw 0.03vw white;
    background-color: rgba(83, 255, 140, 0.6);
}
.pannel {
    display: block;
    padding: 0.4vw 1vw;
    font-size: 2vw;
    margin:  0.6vw auto ;
    text-align: center;
    width: 75%;
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



@media (max-width: 700px){
    
.cross {
    height: 7vw;
    position: relative;
    font-size: 7vw;
    bottom: -5px;
    left: calc(100% - 40px);
    overflow: visible;
}
}


</style>
