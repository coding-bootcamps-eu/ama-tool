const firebase = require("firebase/app");
require("firebase/database");

var firebaseConfig = {
  apiKey: "AIzaSyB4TLJ46tytlPKiT9c0sobcePupnIH22Jo",
  authDomain: "ama-tool-ea7e0.firebaseapp.com",
  databaseURL:
    "https://ama-tool-ea7e0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ama-tool-ea7e0",
  storageBucket: "ama-tool-ea7e0.appspot.com",
  messagingSenderId: "975187077657",
  appId: "1:975187077657:web:9bef6448123610a32d5888",
};

var firebaseTestConfig = {
  apiKey: "AIzaSyDXWnA0fG68qydK6204CCrf6CXOpgwI-j8",
  authDomain: "ama-test-79524.firebaseapp.com",
  databaseURL:
    "https://ama-test-79524-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "ama-test-79524",
  storageBucket: "ama-test-79524.appspot.com",
  messagingSenderId: "409245783934",
  appId: "1:409245783934:web:69593b3ec729870e62052f",
};

// Initialize Firebase
if (environmentalVariableTest === true) {
  firebase.default.initializeApp(firebaseTestConfig);
} else {
  firebase.default.initializeApp(firebaseConfig);
}

firebase.default.initializeApp(firebaseConfig);
let db = firebase.default.database();

export default db;
