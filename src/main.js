import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MainButton from "./components/MainButton/MainButton.vue";
import UserLogin from "./components/UserLogin/UserLogin.vue";

const app = createApp(App).use(router);

app.component("main-button", MainButton);
app.component("user-login", UserLogin);

app.mount("#app");
