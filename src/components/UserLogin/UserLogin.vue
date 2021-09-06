<template>
  <div class="login">
    <div class="user-logged-in" v-show="user">
      <button @click="signOut" class="btn-git-logout">Logout</button>
      <p class="user-name">{{ userName }}</p>
    </div>
    <button v-show="!user" @click="signInGit" class="btn-git-login">
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
      user: sessionStorage.getItem("user"),
      userID: sessionStorage.getItem("userID"),
      userName: sessionStorage.getItem("userName"),
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
      this.userName = result.user.displayName;
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
.user-logged-in {
  display: flex;
  flex-flow: row;
  align-items: baseline;
  .user-name {
    margin-left: 0.5rem;
  }
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
  color: var(--fail-color);
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
@media only screen and (max-width: 741px) {
  .user-name {
    font-size: 0.8em;
  }
}
@media only screen and (max-width: 700px) {
  .user-name {
    display: none;
  }
}
</style>
