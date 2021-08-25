<template>
  <div class="home">
    <div class="login">
      <p v-if="user">
        {{ user.displayName }}
        <button @click="signOut" class="btn-git-logout">
          Logout <i class="fa fa-github"></i>
        </button>
      </p>
      <button v-else @click="signInGit" class="btn-git-login">
        GitHub-Login <i class="fa fa-github"></i>
      </button>
    </div>
  </div>
</template>

//
<script>
// @ is an alias to /src
import firebase from "firebase/app";
export default {
  name: "Home",
  data() {
    return { user: null };
  },
  methods: {
    async signInGit() {
      const provider = new firebase.auth.GithubAuthProvider();

      const result = await firebase.auth().signInWithPopup(provider);
      console.log(result.user);
      this.user = result.user;
    },
    signOut() {
      firebase.auth().signOut();
      console.log("loggedOut");
    },
  },
};
</script>
//
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
.btn-git-logout {
  font-size: 1rem;
  color: var(--primary-color);
  background-color: var(--background-color);
  border: 2.5px solid;
  border-radius: 0.25rem;
}
</style>
