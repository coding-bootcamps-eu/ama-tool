<template>
  <header>
    <div>
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
        </ul>
      </nav>
    </div>
  </header>
</template>

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
    padding: 0rem 2rem 2rem 0rem;
    display: flex;
    flex-flow: row;
    list-style-type: none;
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

@media screen and (max-width: 600px) {
  header {
    border-bottom: 0.5px solid var(--primary-color);
    margin-bottom: 1rem;
    margin-right: 2rem;
    margin-left: 1rem;
  }
  .header-wrapper {
    display: none;
  }
  h1 {
    margin: 0 1rem;
    font-size: 1.8rem;
    line-height: 2rem;
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
}
</style>
