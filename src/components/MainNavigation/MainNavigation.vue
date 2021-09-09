<template>
  <div>
    <header>
      <div class="header-wrapper">
        <img
          class="header-logo"
          alt="Coding Bootcamp Europe Logo"
          src="@/assets/cbe-logo-plain.png"
        />
        <h1>AMA Tool</h1>
      </div>
      <div class="narrow-header-wrapper">
        <img
          class="header-logo"
          alt="Coding Bootcamp Europe Logo"
          src="@/assets/cbe-logo-plain.png"
        />
        <h1 class="narrow-heading-title">AMA Tool</h1>
      </div>
    </header>
    <nav class="nav">
      <ul class="header-nav">
        <li
          v-show="isUserLoggedIn"
          class="nav-element"
          data-cy="nav-element-list"
        >
          <router-link to="/questionlist">Fragen Liste</router-link>
        </li>
        <li
          v-show="isUserLoggedIn"
          class="nav-element"
          data-cy="nav-element-ask"
        >
          <router-link to="/askquestion">Frage stellen</router-link>
        </li>
        <li v-show="isUserLoggedIn" class="nav-login">
          <UserLogin />
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import UserLogin from "@/components/UserLogin/UserLogin.vue";
export default {
  name: "MainNavigation",
  components: { UserLogin },
  computed: {
    isUserLoggedIn() {
      return sessionStorage.getItem("userID") === null ? false : true;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  align-items: center;
  margin-left: 2.54rem;
}

.narrow-header-wrapper {
  display: none;
}

.header-logo {
  height: 3rem;
}
h1 {
  margin-left: 2rem;
}
.nav {
  visibility: visible;
}
nav {
  .header-nav {
    margin: 1rem 4rem 1rem 2.5rem;
    padding: 0rem 2rem 1rem 0rem;
    display: flex;
    flex-flow: row;
    list-style-type: none;
    align-items: baseline;
    white-space: nowrap;
    border-bottom: 0.5px solid var(--primary-color);
  }
  li a {
    color: black;
    text-decoration: none;
    padding: 0.5rem;
    margin-right: 1rem;
    border: 0.5px solid var(--primary-color);
    border-radius: 0.25rem;
    &.router-link-active {
      border: 2.5px solid var(--primary-color);
      border-radius: 0.25rem;
    }
    &:focus {
      outline: none;
      border: 2.5px solid var(--success-color);
      border-radius: 0.25rem;
    }
  }
}

@media only screen and (max-width: 814px) {
  nav {
    .header-nav {
      margin: 1rem 2rem 1rem 2.5rem;
    }
  }
}
@media only screen and (max-width: 741px) {
  nav {
    white-space: nowrap;
  }
}

@media screen and (max-width: 669px) {
  header {
    border-bottom: 0.5px solid var(--primary-color);
    margin-bottom: 1rem;
    margin-right: 2rem;
    margin-left: 2.5rem;
  }
  .header-wrapper {
    display: none;
  }
  h1 {
    margin: 0 2rem;
  }

  .narrow-header-wrapper {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-left: 1rem;
    margin-right: 0rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .nav {
    display: none;
  }
  .narrow-heading-title {
    line-height: 1.8rem;
  }
}
@media only screen and (max-width: 600px) {
  .footer-header {
    margin-left: 1rem;
  }
}
</style>
