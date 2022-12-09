<template>
    <div  class ="background-cropper">
      
        <div class= "box-cropper flex-class">
       
            <RedCross 
                :deleteModal= "deleteModal">
            </RedCross>>
            
            <div class = "white-win">      
                <img
                    class = "user-product-picture"
                    :style= "styleProductPicture"
                    alt=""
                    @mouseover = "userMakePicture($event)"
                    @mouseout = "userDontMakePicture($event)"
                    @mousemove = "userMovePicture($event)"
                    @mousewheel = "userResizedPicture($event)" >  
            </div>
                  
         
            <div class = "pannel-product-picture">
        
                <div class = "pannel shadow-pannel">
                
                    <SliderBall  
                            v-for = "el , index in arraySlider" 
                            :key="index" :nameSlider="el"
                            :index = "index"
                            :sliderSartX = "sliderSartX[index]"

                            @returnSetting="returnSetting"> 
                    </SliderBall>
                    
                </div>

                
            </div>

            
          
        </div>
    </div>
</template>

<script>

export default {
    name: "ImageCropper" ,

    props: {
        src: {
            default:  "https://www.thinkwithgoogle.com/_qs/static/img/icons/data-points/consumer_goods.svg"

        },
        setting: Object,
        aspectRatioImage: String
    },
    data() {
        return {
            widthBox: 1,
            heightBox: 1,
            isMovePicture: false,
            scrollValue: this.setting?.startScrollValue || 1,
            arraySlider: [  
                            "Свечение рамки",
                            "Tолщина рамки" , 
                            "Скругление углов" , 
                            "Контрастность"],
            koof: this.setting?.koofMember || [0, 0, 0, 0],
            sliderSartX: this.setting?.sliderSartXMember ||  [0, 0, 0, 0 ],
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
                x: this.setting?.startImgX || 0 ,
                y: this.setting?.startImgY || 0
            },
            pixelForMove: [ 0 , 0 ],
            backgroundProductPicture: {
                'background':  `url(${this.src}) 
                        no-repeat
                        ${ 50 -  ( this.setting?.startImgX || 0 ) + "%" } 
                        ${ 50 -  ( this.setting?.startImgY || 0)  + "%" }  
                        / 
                        ${ 100 * ( this.setting?.startScrollValue || 1)  + "%" } 
                        auto`
            },
            memberX:  this.setting?.startImgY || 0 ,
            memberY:  this.setting?.startImgY || 0, 
          
        }
    },
    methods: { 
        changeStyle() {
            this.memberX =  this.mouseVectorForPicutre[0]*100/(this.widthBox/2)
            this.memberY =  this.mouseVectorForPicutre[1]*100/(this.heightBox/2)

            this.backgroundProductPicture['background'] = 
                    
                        `url(${this.src}) 
                        no-repeat
                        ${ 50 - this.memberX + "%" } 
                        ${ 50 - this.memberY + "%" }  
                        / 
                        ${ 100 * this.scrollValue + "%" } 
                        auto` 
                
        },
        deleteModal(event) {   
        
            console.log(event);

            
            this.mouseVectorForPicutre[0]*100/(this.widthBox/2)

            const setting = {
                koofMember: this.koof,
                sliderSartXMember: this.sliderSartX ,
                startImgX: this.memberX, 
                startImgY: this.memberY ,
            
                startScrollValue: this.scrollValue
            }
            this.$emit( "returnSettings" , "imageSettings" , setting, "image", this.styleProductPicture  )
            
            this.$emit( "hideModalPicture" , "imageSettings", event.target)
    
                
            
            
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

            this.widthBox = event.target.clientWidth
            this.heightBox = event.target.clientHeight

            pixelForMove[0] = this.widthBox * ( this.scrollValue -1) / 2
            pixelForMove[1] = this.heightBox*(this.scrollValue - 1) / 2

            return pixelForMove
        },

        isReturnPositions(event) {

            this.pixelForMove = this.getPixelForMove(event)
            
            console.log(this.scrollValue);

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
        returnSetting(sliderMemberX, value, index ) {

            if ( value > 1 ) value = 1
            if ( value < 0 ) value = 0 

            this.koof[index] = value
            this.sliderSartX[index] = sliderMemberX
            

        },

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
        styleProductPictureSetting() {
            const shadowBordSize = Math.floor( 1*(this.koof[0] )*100)/100
            const borderWidth = Math.floor( 1 * (this.koof[1] + 0.01)*100)/100
            const borderRad = Math.floor( 15* (this.koof[2])*100)/100
            const constrast = Math.floor( 0.8 * (this.koof[3] + 1.25)*100)/100
            
            return {
                    
                    "box-shadow":  `0 0 ${ shadowBordSize }vw ${ shadowBordSize + "px" } blue` ,
                    "filter": `contrast(${constrast})`,
                    "border": `solid ${borderWidth}vw rgba(93, 150, 255, 0.1)`,
                    "border-radius": `${borderRad}%`,
                    "aspect-ratio": `${this.aspectRatioImage}`
                   
                
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
    position: fixed;
    top: 0vw;
    left: 0vw;
    background-color: rgba(93, 0, 255, 0.080);
    width: 100vw;
    height: 100vh;
}

.box-cropper {
    opacity: 1;
    transition: 1s;
   
    z-index: 3;
    position: absolute;
    top: 10%;
    left: 10vw;
    width: 80vw;
    height: 80%;

    border: solid 0.6vw rgba(249, 120, 84, 0.99);
    border-radius: 25px;
    background-color: rgba(36, 92, 214, 0.28);
    overflow: hidden;

    touch-action: none;

}

.white-win {

    box-sizing: border-box;

    margin: 10% 5%;
    width: 45%;
    height: max-content;
    padding: 40px;

    background-color: white;
    border: solid 0.4vw black;
    box-shadow:  0 0 3px 1px white;
    border-radius: 8vw 0.05vw;
}

.user-product-picture {

    box-sizing: border-box;

    width:  200px;
    display: block;
    margin:  auto auto;

    border-radius: 30px;
    
    -khtml-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;

  
    

}


.pannel-product-picture {
   
    margin: auto 5%;
    width: 40%;
    height: max-content;
    padding: 1%;

    border-radius:  40px;
    border: solid black;
    box-shadow:  0 0 3px 1px white;
    background-color: rgba(83, 255, 140, 0.6);
}
.pannel {
   
    position: relative;
    display: block;
    box-sizing: border-box;
    padding-top: 10%;
    aspect-ratio: 1/1;
    width: 75%;
    margin:  0 auto ;

    font-size: 140%;
    text-align: center;
}


@media (max-width: 700px){
    
    .box-cropper {
    
        top: 2.5%;
        left: 0;
        width: 97%;
        height: 87.5%;
        border-radius: 10px;
        
    }

    .flex-class {
        display: block;
        margin: 0;
        padding: 0;
    }


    .white-win {

        width: 80%;
        top:0;
        margin: 5% 10%;

    }

        
    .user-product-picture {

  

        width:  124px;
        height:  124px;
        display: block;
        margin:  auto auto;

        border-radius: 30px;

    }

 
    
    .pannel-product-picture {
    
        width: 70%;
        margin: 0% auto;
        padding: 0;
        height: max-content;
        padding: 1%;
        border-radius:  40px;
         border: solid black;
        box-shadow:  0 0 3px 1px white;
        background-color: rgba(83, 255, 140, 0.6);
    }


}


</style>
