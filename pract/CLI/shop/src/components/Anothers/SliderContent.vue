<template>
    
    <div class = "box-slider">
        <div class = "slider"

        :style="{  
                    'margin-left': -100*startIndex +'%',
                    'transition': transitionAnimation
                }">

        <div v-for = "el, i in sliderAdditionalData" 
             class = "el-slider"
             :key = "i" >
            <h3 class ="words" > {{ el.words }} </h3>
            <img 
                class = "img-slider" 
                :src= "`${ el.img }`" alt=""
                @mouseover = "placholderMouseoverQestionary(i)"
                @mouseout = "placholderMouseoverQestionary(i)"
                @click="el.func()">
            
            <WhitePlacholder 
            v-if = "mouseoverQestionary[i]"
                class ="white-placeholder-quest" 
                :textPlaceholder = "el.placeholder">
            </WhitePlacholder> 


        </div>
    </div>

   <div class = "box-empty"></div>
   <div class = "pannel" 
        :style="{ 'opacity':  opacityPannel }">
    <BlueButton 
                    class = "last-button"
                    textButton = "prev"
                    @click="lastSlider">
                </BlueButton>
        <BlueButton 
                class = "next-button"
                textButton = "next"
                @click="nextSlider">
        </BlueButton>
   </div>
    </div>
</template>

<script>

export default {
    name: "SliderContent",
    props: {
        sliderData: Array,
    },
    data() {
        return {
            sliderAdditionalData: [
                ...this.sliderData,
            ],
            startIndex: 0,
            transitionAnimation: "0s",
            isFastMove: false,
            opacityPannel: 1,
            mouseoverQestionary: this.sliderData.map(() => {return false})  
        }
    },
    methods: {
        placholderMouseoverQestionary(i) {
            this.mouseoverQestionary[i] = !this.mouseoverQestionary[i]
        },
        nextSlider() {
        
            if ( !this.isFastMove ) {

                this. isFastMove =  true 

                this.transitionAnimation =  "0.25s"
                this.startIndex+=0.5; 
                this.opacityPannel = 0.2

                setTimeout( ()=>{

                    this.sliderAdditionalData.push(this.sliderAdditionalData[0])
                    this.sliderAdditionalData.shift()
                    
                    this.transitionAnimation =  "0s"
                    this.startIndex--;
                }, 250)

                setTimeout( ()=>{

                    this.transitionAnimation =  "1s"
                    this.startIndex+=0.5; 
                
                }, 300)

                setTimeout( ()=>{

                    this. isFastMove =  false
                    this.opacityPannel = 1

                }, 1050)
            
            }
        },
        lastSlider() {

            
            if ( !this.isFastMove ) {

                this. isFastMove =  true 

                this.transitionAnimation =  "0.5s"
                this.startIndex-=0.5; 
                this.opacityPannel = 0.2

                setTimeout( ()=>{

                    const lastElement = this.sliderAdditionalData[this.sliderData.length -1]
                    this.sliderAdditionalData.unshift(lastElement)
                    this.sliderAdditionalData.pop()
                    
                    this.transitionAnimation =  "0s"
                    this.startIndex++;
                }, 450)

                setTimeout( ()=>{

                    this.transitionAnimation =  "1s"
                    this.startIndex-=0.5; 

                }, 500)

                setTimeout( ()=>{

                    this. isFastMove =  false 
                    this.opacityPannel = 1

                }, 1050)
        
            }
         
            

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider{
    display: flex;
    position: absolute;
    left: -100%;
    resize: none;
}
.box-empty{
    height: 30vw;
}
.box-slider{
    position: relative;
    resize: none;
}

.el-slider{
    position: relative;
    width: 55vw;
}
.words {
    box-sizing: border-box;
    width: max-content;
    margin: auto;
    margin-bottom: -10px;
    padding: 1% 2%;
    color: rgb(236, 217, 94);
    background-color: rgba(63, 35, 243, 0.8);
    border: solid 2px rgb(157, 127, 50);
    border-radius: 10px 10px 1px 1px;

    text-align: center;
}
.img-slider {
    z-index: 0;
    box-sizing: border-box;
    width: 50%;
    margin-left: 25%;
    border-radius: 20px;
    margin-bottom: -1%;
    border: solid 4px rgb(23, 22, 22);
    box-shadow: none;
}

.pannel {
    position: relative;
    margin: auto;
    margin-bottom: 0;
    height: 0;
    width: 55vw;
    transition: 0.4s;
}

.last-button {
  
    border-radius: 10px 100px 100px 100px ;
    
    rotate: -45deg;
    bottom: 10vw;
    left: -50px;

}
.next-button{
   
    border-radius: 100px 10px 100px 100px ;
    rotate: 45deg;
    bottom: 10vw;
    right: -50px;

}

.next-button, .last-button  {
    position: absolute;
    height: 120px;
    aspect-ratio: 1/1;
    background-color: rgba(0, 0, 255, 0.5);
    border: solid 2px rgba(255, 255, 255, 0.8);
    font-size: 150%;
}

.next-button:hover, .last-button:hover  {
    height: 122px;
    background-color: rgba(0, 0, 255, 0.6);
    font-size: 155%;
}

.white-placeholder-quest{
    padding: 2% 4%;
    z-index: 100;
    height: min-content;
    top: 5%;
    right: 72.5%;
    min-width: 25%;
    max-width: 40%; 
    font-size: 110%;
}

</style>
