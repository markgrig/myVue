
const app = Vue.createApp({
    data() {
        return  {
            inputHeight : "10",
            inputWidth: "10",
            inputLeft: "45",
            formula: "<strong> На веди на  подсказку </strong>",
            boxShadow: "0 0 5px 1px rgba(0, 255, 255, 0.9);",
            intervalFun: "",
            isFirstHover: true,
        };
    },
    methods: {
        showResult() {
            if ( Number(this.inputWidth) + Number(this.inputLeft)*2 === 100) {
                return `${this.inputLeft} - это правильный ответ!`;
            } else {
                return "Жду правльный ответ";
            }
        },
        placeholderShow() {
            this.formula = "<strong> L = (100 - W)/2 </strong>";
            let i = 0;
          
            if ( this.isFirstHover ) {
                console.log(123);
                this.intervalFun = setInterval( () => { 
                    this.boxShadow = ` 0px  0px ${ 1 + Math.abs(Math.round( 20*Math.sin(2*3.14*i/80)))}px 2px
                    rgba(  ${Math.abs(Math.round(255 - 255*Math.sin(2*3.14*(i+3.24)/50)))}, 0, ${ 100+ Math.abs(Math.round(155*Math.sin(2*3.14*(i+3.14)/50)))}, 1)`;
                    i++;
                }, 50)
            }
            this.isFirstHover = false;
        },
        placeholderLeave() {
            this.formula = "<strong> На веди на  подсказку </strong>";
            clearInterval(this.intervalFun);
            this.isFirstHover = true;
            this.boxShadow =  "0 0 5px 1px rgba(0, 255, 255, 0.9)"
        },
    }, 
});

app.mount("#app");  
