const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            allUserInput:  JSON.parse(localStorage.getItem( "allUserInput") ) || [],
        };
    },
    methods: {
        saveElement(){
            if (this.userInput !== "") {

            this.allUserInput.push(this.userInput);
            localStorage.setItem( "allUserInput", JSON.stringify(this.allUserInput))
            }
        },
        clearLocalStorage() {
            localStorage.clear();
            this.allUserInput = [];
        }
    },
})

app.mount("#app");  

