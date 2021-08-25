import firebase from "@/firebase";
let db = firebase.ref("/questions");
let dbRef = firebase.ref();

class DataService {
  getDbRef() {
    return dbRef;
  }
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
  updateVotes(key, key2, value) {
    return db.child(key).child(key2).push(value);
  }
  getVoter(key, ref) {
    return db.child(key).child(ref);
  }
  getRef(key) {
    return (db = firebase.ref("/questions" + key + "/hasVoted"));
  }
}

export default new DataService();
