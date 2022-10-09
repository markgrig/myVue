
const app = Vue.createApp({
    data() {
        return  {
            inputHeight : "10",
            inputWidth: "10",
            inputLeft: "45",
            formula: "<strong> На веди на  подсказку </strong>",
            boxShadow: "0 0 5px 1px rgba(0, 255, 255, 0.9);",
            border: "solid 3px rgba(0, 255, 255, 1);",
            intervalFun: "",
            isFirstHover: true,
        };
    },
    computed: {
        showResult() {
            
            if ( Number(this.inputWidth) + Number(this.inputLeft)*2 === 100) {
                return `${this.inputLeft} - это правильный ответ!`;
            } else {
                return "Жду правльный ответ";
            }
        },
    },
    methods: {
        placeholderShow() {
            this.formula = "<strong> L = (100 - W)/2 </strong>";
            let i = 0;
          
            if ( this.isFirstHover ) {
                
                this.intervalFun = setInterval( () => { 
                    const color = `rgba(  ${Math.abs(Math.round(255 - 255*Math.sin(2*3.14*(i+3.24)/50)))}, 0, ${ 100+ Math.abs(Math.round(155*Math.sin(2*3.14*(i+3.14)/50)))}`;
                    const amp = `${ 1 + Math.abs(Math.round( 50*Math.sin(2*3.14*i/300)))}`;
                    this.border =  `solid 2px ${color}`;
                    this.boxShadow = ` 0px  0px ${amp}px 2px ${ color }, 1)`;
                    i++;
                }, 50)
            }
            this.isFirstHover = false;
        },
        placeholderLeave() {
            this.formula = "<strong> Наведи на  подсказку </strong>";
            clearInterval(this.intervalFun);
            this.isFirstHover = true;
        },
    }, 
});

app.mount("#app");  
