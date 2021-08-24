import firebase from "@/firebase";

const db = firebase.ref("/questions");

class DataService {
  getAll() {
    return db;
  }
  getQuestion(key) {
    return db.child(key);
  }
  create(question) {
    return db.push(question);
  }
  update(key, value) {
    return db.child(key).update(value);
  }
}

export default new DataService();
