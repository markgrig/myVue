
const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            allUserInput:  JSON.parse(localStorage.getItem( "allUserInput") ) || [],
            sumEpenses:  Number(JSON.parse(localStorage.getItem( "sumEpenses") )) || 0,
            placeholderInput: "",
            placeholderClearInput: "",
            validation: false,
        };
    },
    methods: {
        saveElement(){
            
            if( this.validation ) {
                if ( this.userInput !== "") {
                    this.allUserInput.push(this.userInput);
                    this.sumEpenses = 0;
                    this.allUserInput.forEach(element => {
                        this.sumEpenses += Number(element);
                    });
                    this.userInput = "";
                    this.placeholderInput =  ``;
                    localStorage.setItem( "sumEpenses", JSON.stringify(this.sumEpenses))
                    localStorage.setItem( "allUserInput", JSON.stringify(this.allUserInput))
                }
            }
        
        },
        clearLocalStorage() {
         
            localStorage.clear();
            this.allUserInput = [];
            this.sumEpenses = 0;
        },
        clearInput() {
            this.userInput = "";
            this.placeholderInput =  ``;
        },
        validationFun(event) {
            this.userInput = event.target.value;

            if ( Number(this.userInput) ) {
                this.validation = true;
                this.placeholderInput =  `<div class= "placeholder-input-sucsess"> Число!   </div>`;
                this.placeholderClearInput = ``
                
            }
            else {
                this.placeholderInput = `<div class= "placeholder-input-error"> Не число!   </div>`
                this.placeholderClearInput = `<div class="clear-input"> 🧺 </div> ` 
                this.validation = false;
                if ( this.userInput === "") {
                    this.placeholderInput = "";
                }
            }

        }
    },
})

app.mount("#app");  

