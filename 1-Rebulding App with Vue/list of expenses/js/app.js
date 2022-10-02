
const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            allUserInput:  JSON.parse(localStorage.getItem( "allUserInput") ) || [],
            sumEpenses:  Number(JSON.parse(localStorage.getItem( "sumEpenses") )) || 0,
            placeholderInput: "",
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
        validationFun() {
            if ( Number(this.userInput) ) {
                this.validation = true;
                this.placeholderInput =  `<div class= "placeholder-input-sucsess"> Успешно!   </div>`
            }
            else {
                this.placeholderInput = `<div class= "placeholder-input-error"> Это не величина расхода!   </div>`
                this.validation = false;
                if ( this.userInput === "") {
                    this.placeholderInput = "";
                }
            }

        }
    },
})

app.mount("#app");  

