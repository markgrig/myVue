<template>
    <div  v-if = "!modalHide" class ="background-cropper">

        <div class= "box-cropper">

            <div 
                class="cross" 
                @:click="deleteModal"> 
                    &#10006;
            </div>
            
            <div 
                class = "box-product-picture"

                @mouseover = "userMakePicture($event)"
                @mouseout = "userDontMakePicture($event)"
                @mousemove = "useMovePicture($event)"
                @mousewheel = "userResizedPicture($event)" >

                <div 
                    class = "user-product-picture"
                    :style= "styleProductPicture">
                    
                </div>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: "ImageCropper" ,
    props: {
        src: String,
    },
    data() {
        return {
            modalHide: false,
            isMovePicture: false,
            scrollValue: 1,
            styleProductPicture: {

                    'background': `url("https://crosti.ru/patterns/00/1f/55/9f_picture_68ae6551.jpg") 
                                    no-repeat
                                    50% 50% / 35vw auto` , 
                                },
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
            }
        }
    },
    methods: {
        deleteModal() {    
            this.modalHide = true
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
        useMovePicture(event) {

            this.mouseXY.old.x = this.mouseXY.new.x
            this.mouseXY.old.y = this.mouseXY.new.y

            this.mouseXY.new.x = event.clientX
            this.mouseXY.new.y = event.clientY

            this.isReturnPositions(event) 

            if ( this.isMovePicture ) {

                this.movePicture(event)
            
            }

            this.isReturnPositions(event) 


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

            this.styleProductPicture = {
            
                'background': `url("https://crosti.ru/patterns/00/1f/55/9f_picture_68ae6551.jpg") 
                    no-repeat
                    calc( 50% + ${ this.mouseMemberXY.x + "px" })
                    calc( 50% + ${ this.mouseMemberXY.y + "px" }) 
                    / 
                    calc(  ${ 35 * this.scrollValue + "vw" } + ${ 0 + "px" }) 
                    auto` , 
            }

        },
        movePicture(event) {
            this.mouseMemberXY.x =  this.mouseVec[0]
                this.mouseMemberXY.y =  this.mouseVec[1]
                
                console.log(event);
                console.log(  this.mouseVec );
                this.styleProductPicture = {
                    
                    'background': `url("https://crosti.ru/patterns/00/1f/55/9f_picture_68ae6551.jpg") 
                        no-repeat
                        calc( 50% + ${ this.mouseVec[0] + "px" })
                        calc( 50%  + ${ this.mouseVec[1] + "px" }) 
                        / 
                        calc( ${ 35 * this.scrollValue + "vw" } + ${ 0 + "px" }) 
                        auto` , 
                }
        },
        getPixelForMove( event ) {

            const pixelForMove = []

            const widthBox = event.target.clientWidth
            pixelForMove[0] = widthBox - widthBox / this.scrollValue 
            
            
            const heightBox = event.target.scrollHeight
            pixelForMove[1] = heightBox - heightBox / this.scrollValue 

            console.log( widthBox , heightBox );
            return pixelForMove
        },

        isReturnPositions(event) {

            const  pixelForMove = this.getPixelForMove(event)
            
            console.log(  pixelForMove , this.mouseMemberXY.x , this.mouseMemberXY.y );

            if ( this.mouseMemberXY.x > pixelForMove[0] ) {
                this.mouseMemberXY.x =  pixelForMove[0]
            }

            if ( this.mouseMemberXY.x < -pixelForMove[0] ) {
                this.mouseMemberXY.x =  - pixelForMove[0]
            }

            if ( this.mouseMemberXY.y > pixelForMove[1] ) {
                this.mouseMemberXY.y =  pixelForMove[1]
            }

            if ( this.mouseMemberXY.y < -pixelForMove[1] ) {
                this.mouseMemberXY.y =  - pixelForMove[1]
            }
        }
    },
    
    computed: {
        mouseVec() {
            return [
                this.mouseMemberXY.x + this.mouseXY.new.x  - this.mouseXY.old.x , 
                this.mouseMemberXY.y + this.mouseXY.new.y  - this.mouseXY.old.y 
            ]
        },
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
    
    
    width: 30vw;
    height: 30vw;
    margin: 0.5vw 15vw;

    background: no-repeat center center;
    background-size: cover;
    
    box-sizing: border-box;
    border-radius: 5vw;
    border: solid 0.2vh rgb(235, 228, 218);
    box-shadow:  0 0.1vw 0.6vw 0.3vw white;
    background-color: white;  

    -khtml-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;

}

.user-product-picture {
    width: 30vw;
    height: 30vw;

    background: no-repeat center center;
    background-size: cover;
    
    box-sizing: border-box;
    border-radius: 5vw;
    border: solid 0.2vh rgb(235, 228, 218);
    box-shadow:  0 0.1vw 0.6vw 0.3vw white;
    background-color: white;  
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
