import { createApp } from 'vue'
import App from '@/App.vue'
import { componentArray } from '@/components/reused/componentsArray'
import router from '@/router/router';

const app = createApp(App)

console.log(componentArray);
componentArray.forEach( component => {
    app.component( component.name, component);
});

app
    .use(router)
    .mount('#app')
