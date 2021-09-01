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
      userName: null,
    };
  },
  methods: {
    getUserName() {
      return this.user.displayName;
    },
    async signInGit() {
      const provider = new firebase.auth.GithubAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      sessionStorage.setItem("user", result.user);
      sessionStorage.setItem("userID", result.user.uid);
      sessionStorage.setItem("userName", result.user.displayName);
      this.user = result.user;
      this.userID = result.user.uid;
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.user = null;
          sessionStorage.clear();
          this.$router.replace("/");
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
  padding: 0.4rem;
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
