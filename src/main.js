import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MainButton from "./components/MainButton/MainButton.vue";

if (process.env.NODE_ENV === "test") {
  sessionStorage.setItem("userID", "1");
}
const app = createApp(App).use(router);
app.component("main-button", MainButton);

app.mount("#app");
