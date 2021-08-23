import firebase from "@/firebase";

const db = firebase.ref("/questions");

class DataService {
  getAll() {
    return db;
  }

  create(question) {
    return db.push(question);
  }

}

export default new DataService();
