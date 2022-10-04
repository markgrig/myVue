import "../style/style.css"
const loadingAnimation = () => {
    const bodyElement = document.querySelector('body')
    let i = 0;

    const intervalFun = setInterval( () => { 
        
        const colorLeft = `rgba(  ${Math.abs(Math.round(255 - 125*Math.sin(2*3.14*(i-3.14)/500)))}, 0, ${ 255 - Math.abs(Math.round(120*Math.sin(2-3.14*(i+3.14)/500)))})`
        const colorRight = `rgba(  ${Math.abs(Math.round(100 - 100*Math.sin(2*3.14*(i-3.14)/500)))}, 0, ${ 100+ Math.abs(Math.round(155*Math.sin(2*3.14*(i-3.14)/500)))})` 
        bodyElement.style.background =  `linear-gradient( 70deg,  ${colorRight} , ${colorLeft})`;
     

        i++;
    }, 50)

}

loadingAnimation()

const app = Vue.createApp({
    data() {
        return {
            allInstructions: [
                "Привет, я твой ассистент!",
                "Как я могу к тебе обращаться?",
                "Ты уже программировал на vue?",
                "На каком языке написан Vue? :) две буквы. ",
                "Когда был написан vue.js?",
                "Когда на него обрушилась популярность?",
                "Как называется сущность, использующая вычислительные объекты во vue?",
                "Как сокращённо записать v-click?",
                "Ой, кажется я утюг выключить забыл!"
            ],
            allAnswers: [],
            trueAnswer: [
                "JS", 
                "2012",
                "2015",
                "computed",
                "@",
            ],
            answer: "",
            instructions: "" ,
            start: true,
            score: 0,
        };
    },
    watch: {
        async answer( value) {
            
            await new Promise(resolve => setTimeout(resolve, 500));

            
            if (this.allAnswers.length === 0 && this.start) {
                this.messaging(0)
            }    
            if ( this.allAnswers.length === 1 && (value === "Привет" || value === "привет"  ) && this.start) {
                await this.messaging(1);
                if ( this.allAnswers[1].trim() === "" ) { this.allAnswers[1] = "Гость"}
                this.allInstructions[2] = `Скажи, ${this.allAnswers[1]}! ${this.allInstructions[2]}`
            }  
            if ( (this.allAnswers.length > 1 )  && this.start && this.allAnswers.length < 9) {
                console.log(1233123);
                this.messaging(this.allAnswers.length);
            }
            console.log(this.allAnswers[1]);
        }
    },
    computed: {
        statusAssist(){
            if ( this?.allAnswers[7] ) {
                return "Ассистент пошёл по своим делам"
            }
            if ( this?.allAnswers[2] ) {
                return `Ассистент следит. ${ this.allAnswers[1] } отвечает.`
            }
            if ( this?.allAnswers[1] ) {
                return "Ассистент задаёт вопрос и ждёт ответа"
            }
            if ( this.answer === "" &&  this.start) {
                return `Ассистент ожидает`
            }
            if ( !this.start) {
                return "Ассистент печатает"
            }
        },
        checkScore(){
            if ( this?.allAnswers[8] ) {
                return  ` ${ this.allAnswers[1] } : ${ this.score },  Cпасибо!`
            }
            if ( this?.allAnswers[7]) {
                return  ` ${ this.allAnswers[1] } :${ this.score } ,  Ответ: ${ this.trueAnswer[4]}`
            }
            if ( this?.allAnswers[6]) {
                return  ` ${ this.allAnswers[1] } :${ this.score } ,  Ответ: ${ this.trueAnswer[3]}`
            }
            if ( this?.allAnswers[5]) {
                return  ` ${ this.allAnswers[1] } :${ this.score } ,  Ответ: ${ this.trueAnswer[2]}`
            }
            if ( this?.allAnswers[4]) {
                return  ` ${ this.allAnswers[1] } :${ this.score } ,  Ответ: ${ this.trueAnswer[1]}`
            }
            if ( this?.allAnswers[3]) {
                return  ` ${ this.allAnswers[1] } :${ this.score } ,  Ответ: ${ this.trueAnswer[0]}`
            }
            if ( this?.allAnswers[1] ) {
                return  ` ${ this.allAnswers[1] } : ${ this.score }, `
            }
        }
    },
    methods: {
        async showInstuctions(instuct) {

            for (const simbol of instuct.split("")) {
                await new Promise(resolve => setTimeout(resolve, 100));
                this.instructions += simbol;
            }
        },
        async messaging(n) {
            this.start = false;
            this.answer = "";
            this.instructions = "";
            await this.showInstuctions( this.allInstructions[n]);

            if ( this.allAnswers.length !== 0 && this.allAnswers.length !== 8) {
                let i = 10;
                const interval =  setInterval( () => { this.instructions  = i; i--; }, 1000 );
                await new Promise(resolve => setTimeout(resolve, 11000));
                clearInterval( interval );
            }

            this.start = true;
            this.allAnswers[n] = this.answer.trim();

            if ( this.allAnswers.length >= 4 && this.allAnswers.length < 9) {
                
                if (this.allAnswers[n].toLowerCase()   === this.trueAnswer[n-3].toLowerCase ()  ) { this.score += 1 ; }
            }

            this.answer = "";
        },
    },

}).mount("#app")

