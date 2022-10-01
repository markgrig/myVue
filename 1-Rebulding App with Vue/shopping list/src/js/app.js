import "../style/style.css"

const app = Vue.createApp({
    data() {
        return {
            formHTML: '',
            backgroundColor: { background: "rgba(255, 255, 255, 0.95)", text: "black"},
            topicColor: { text : "rgba(255, 255, 255, 1)" , 
                        background: "linear-gradient(to top, rgba(90, 63, 230, 0.7) 10%,rgba(80, 80, 234, 0.3) 100%);", },
            tableColor: "linear-gradient(to top, rgba(90, 63, 230, 0.7) 10%,rgba(80, 80, 234, 0.3) 100%);",
            backgroundColorArray: [
                { background: "rgba(27, 51, 148, 0.365)",  text : "white" },
                { background: "rgba(153, 28, 187, 0.2)",  text : "black" },
                { background: "rgba(38, 240, 203, 0.349)",  text : "white" },
                { background: "rgba(255, 255, 255, 0.95)",  text : "black" },
            ],
            topicColorArray: [
                { background: "rgba(255, 255, 255, 0.95)" , text : "rgb(101, 78, 212)" },
                { background: "rgba(255, 255, 255, 0.95)" , text : "rgb(75, 164, 247)" },
                { background: "rgba(17, 234, 250, 0.767)" , text : "rgba(255, 255, 255, 1)"  },
                { background: "rgba(17, 234, 250, 0.767)" , text : "rgba(255, 255, 255, 1)" },,
            ]
        };
    },
    methods: {
        openForm() {
           this.formHTML = `
           <div class="modal-window">
                <div class="pannel-modal-window center-block"  v-if = "topicColor" v-text= "topicColor"> 
                </div>  
           </div>`
        },
        changeBackgroundColor() {
            //Math.floor (Math.random () * (max - min + 1)) + min
            let randNumber = Math.floor (Math.random () * (4)) + 1;
            let newBackgroundColor = this.backgroundColorArray[randNumber-1];
            
            while( this.backgroundColor === newBackgroundColor) {
                randNumber = Math.floor (Math.random () * (4)) + 1;
                newBackgroundColor = this.backgroundColorArray[randNumber-1]  
            }

            randNumber = Math.floor (Math.random () * (4)) + 1;
            let newtopicColor = this.topicColorArray[randNumber-1];

            while( this.topicColor === newtopicColor) {
                randNumber = Math.floor (Math.random () * (4)) + 1;
                newtopicColor = this.topicColorArray[randNumber-1];
            }

            console.log(newtopicColor, newBackgroundColor);
           
            this.topicColor = newtopicColor;
            this.backgroundColor = newBackgroundColor;
        }
    }
})

app.mount("#app")

