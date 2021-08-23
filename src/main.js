import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MainButton from "./components/MainButton/MainButton.vue";
import TeamMember from "./components/TeamMember/TeamMember.vue";

const app = createApp(App).use(router);

app.component("main-button", MainButton);
app.component("TeamMember", TeamMember);

app.mount("#app");
