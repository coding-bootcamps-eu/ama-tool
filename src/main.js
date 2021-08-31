import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MainButton from "./components/MainButton/MainButton.vue";


const app = createApp(App).use(router);
app.component("main-button", MainButton);

app.mount("#app");
