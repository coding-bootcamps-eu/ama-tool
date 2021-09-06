const firebase = require("firebase/app");
require("firebase/database");
require("firebase/auth");

var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY_AMA || "secrets.DBKEY",
  authDomain: "ama-tool-prod.firebaseapp.com",
  databaseURL:
    "https://ama-tool-prod-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ama-tool-prod",
  storageBucket: "ama-tool-prod.appspot.com",
  messagingSenderId: "314282942773",
  appId: "1:314282942773:web:b8a4afb8183ca9b95f6c7c",
};

var firebaseTestConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_TEST_KEY_AMA || "secrets.DBTEST",
  authDomain: "ama-test-79524.firebaseapp.com",
  databaseURL:
    "https://ama-test-79524-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "ama-test-79524",
  storageBucket: "ama-test-79524.appspot.com",
  messagingSenderId: "409245783934",
  appId: "1:409245783934:web:69593b3ec729870e62052f",
};

// Initialize Firebase
if (process.env.NODE_ENV === "test") {
  sessionStorage.setItem("userID", "1");
  firebase.default.initializeApp(firebaseTestConfig);
} else {
  firebase.default.initializeApp(firebaseConfig);
}

let db = firebase.default.database();

export default db;
