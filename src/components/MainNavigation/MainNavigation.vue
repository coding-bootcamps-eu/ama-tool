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
        <h1>AMA Tool</h1>
      </div>
      
    </header>
    <nav class="nav">
      <ul class="header-nav">
        <li class="nav-element">
          <router-link to="/">Start</router-link>
        </li>
        <li class="nav-element">
          <router-link to="/questionlist">Fragen Liste</router-link>
        </li>
        <li class="nav-element">
          <router-link to="/askquestion">Frage stellen</router-link>
        </li>
        <li class="nav-element">
          <router-link to="/team">Team</router-link>
        </li>
        <li class="nav-login">
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
  components: {UserLogin},
}
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
    margin: 1rem 2rem 1rem 2.2rem;
    padding: 0rem 2rem 1rem 0rem;
    display: flex;
    flex-flow: row;
    list-style-type: none;
    align-items: baseline;
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

@media screen and (max-width: 600px) {
  header {
    border-bottom: 0.5px solid var(--primary-color);
    margin-bottom: 1rem;
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
    margin-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .nav {
    display: none;
  }
}
</style>
