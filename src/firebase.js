const firebase = require("firebase/app");
require("firebase/database");

var firebaseConfig = {
  apiKey: "secrets.DBKEY",
  authDomain: "ama-tool-ea7e0.firebaseapp.com",
  databaseURL:
    "https://ama-tool-ea7e0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ama-tool-ea7e0",
  storageBucket: "ama-tool-ea7e0.appspot.com",
  messagingSenderId: "975187077657",
  appId: "1:975187077657:web:9bef6448123610a32d5888",
};
// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);
let db = firebase.default.database();

export default db;
