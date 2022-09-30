import "../style/style.css"

const app = Vue.createApp({
    data() {
        return {
            formHTML: '',
        };

    },
    methods: {
        openForm() {
           this.formHTML = `
           <div class="modal-window">
                <div class="pannel-modal-window center-block"> </div>  
           </div>`
        }
    }
})

app.mount("#app")

