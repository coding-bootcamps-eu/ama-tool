import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import MainButton from "./components/MainButton/MainButton.vue";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4TLJ46tytlPKiT9c0sobcePupnIH22Jo",

  authDomain: "ama-tool-ea7e0.firebaseapp.com",

  databaseURL:
    "https://ama-tool-ea7e0-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "ama-tool-ea7e0",

  storageBucket: "ama-tool-ea7e0.appspot.com",

  messagingSenderId: "975187077657",

  appId: "1:975187077657:web:9bef6448123610a32d5888",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const app = createApp(App).use(router);

app.component("main-button", MainButton);

app.mount("#app");
