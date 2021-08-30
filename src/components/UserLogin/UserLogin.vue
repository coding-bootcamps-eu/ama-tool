<template>
  <div class="login">
    <p v-if="user">
      {{ user.displayName }}
      <button @click="signOut" class="btn-git-logout">Logout</button>
    </p>
    <button v-else @click="signInGit" class="btn-git-login">
      GitHub-Login <i class="fa fa-github"></i>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase/app";
export default {
  name: "UserLogin",
  data() {
    return {
      user: null,
      userID: null,
    };
  },
  methods: {
    getUserName() {
      return this.user.displayName;
    },
    startSession(userToken){
      this.$session.start();
      this.$session.set("jwt", userToken);
    },
    async signInGit() {
      const provider = new firebase.auth.GithubAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      this.startSession(result);
      console.log(result.user.displayName);
      this.user = result.user;
      this.userID = result.user.uid;
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/about");
          // Sign-out successful.
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin: 0 2rem 0 0;
}
.btn-git-login {
  font-size: 1.2rem;
  color: var(--primary-color);
  background-color: var(--background-color);
  border: 2.5px solid;
  border-radius: 0.25rem;
  cursor: pointer;
}
.btn-ggl-login {
  font-size: 1.2rem;
  color: red;
  background-color: var(--background-color);
  border: 2.5px solid;
  border-radius: 0.25rem;
  cursor: pointer;
}
.btn-git-logout {
  font-size: 1rem;
  color: var(--primary-color);
  background-color: var(--background-color);
  border: 2.5px solid;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
