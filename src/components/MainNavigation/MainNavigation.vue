<template>
<header>
    <div class="header-wrapper">
    <img class="header-logo" alt="Coding Bootcamp Europe Logo" src="@/assets/cbe-logo-plain.png" />
    <h1>AMA Tool</h1>
    </div>
</header>
    <nav>
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
</template>

<style lang="scss" scoped >
.header-wrapper {
    display: flex;
    align-items: center;
    padding-left: 2.54rem;
}
.header-logo {
    height: 3rem;
}
h1 {
    margin-left: 2rem;
}
nav {
  .header-nav {
    padding: 0rem 2rem 2rem 2rem;
    display: flex;
    flex-flow: row;
    list-style-type: none;
    border-bottom: 0.5px solid var(--primary-color);
  }
  li a {
    color: black;
    text-decoration: none;
    padding: 0.5rem;
    margin: 0.5rem;
    border: 0.5px solid var(--primary-color);
    border-radius: 0.25rem;
    &.router-link-active {
      border: 2.5px solid var(--primary-color);
      border-radius: 0.25rem;
    }
    &:focus {
        outline: none;
        border: 2.5px solid var(--primary-color);
        border-radius: 0.25rem;
    }
  }
}
</style>
