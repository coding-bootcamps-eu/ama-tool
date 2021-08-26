<template>
  <div class="login">
    <p v-if="user">
      {{ user.displayName }}
      <button @click="signOut" class="btn-git-logout">Logout</button>
    </p>
    <button v-else @click="signInGit" class="btn-git-login">
      GitHub-Login <i class="fa fa-github"></i>
    </button>
    <!-- will be implemented later -->
    <!-- <button @click="signInGgle" class="btn-ggl-login">
      Google-Login <i class="fa fa-google"></i>
    </button> -->
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
    async signInGit() {
      const provider = new firebase.auth.GithubAuthProvider();

      const result = await firebase.auth().signInWithPopup(provider);
      console.log(result.user.uid);
      this.user = result.user;
      this.userID = result.user.uid;
    },
    async signInGgle() {
      const provider = new firebase.auth.GoogleAuthProvider();

      const result = await firebase.auth().signInWithPopup(provider);
      console.log(result.user.uid); // needed for further steps
      this.user = result.user;
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
          // Sign-out successful.
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
}
.btn-ggl-login {
  font-size: 1.2rem;
  color: red;
  background-color: var(--background-color);
  border: 2.5px solid;
  border-radius: 0.25rem;
}
.btn-git-logout {
  font-size: 1rem;
  color: var(--primary-color);
  background-color: var(--background-color);
  border: 2.5px solid;
  border-radius: 0.25rem;
}
</style>
