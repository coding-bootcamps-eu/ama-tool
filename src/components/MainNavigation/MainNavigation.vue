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
                <router-link class="nav-link" to="/">Start</router-link>
            </li>
            <li class="nav-element">
                <router-link class="nav-link" to="/questionlist">Fragen Liste</router-link>
            </li>
            <li class="nav-element">
                <router-link class="nav-link" to="/askquestion">Frage stellen</router-link>
            </li>
            <li class="nav-element">
                <router-link class="nav-link" to="/team">Team</router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped >
.header-wrapper {
    display: flex;
    align-items: center;
    padding-left: 2rem;
}
.header-logo {
    height: 3rem;
}
h1 {
    margin-left: 2rem;
}
.header-nav {
 display: flex;
 flex-flow: row;
 list-style-type: none;
}
.nav-element {
    margin: 1rem;
    border-radius: .25rem;
    border: 1px solid red;
    padding: 1rem;
}
.nav-link {
    text-decoration: none;
}
/* .nav-element:active {
    border: 1px solid blue;
} */
</style>
