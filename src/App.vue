<template>
  <MainNavigation />
  <router-view />
</template>

<script>
import MainNavigation from "@/components/MainNavigation/MainNavigation.vue";

export default {
  name: "App",
  components: {MainNavigation},
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  --primary-color: #6A1CC3;
  --secondary-color: #A970EB;
  --background-color: #fafafa;
  --success-color: #A3DB33;
  --fail-color: #ED3221;
  --font-color: #121212;
  --placeholder-color: rgba(18, 18, 18, .7);

  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html {
  background-color: var(--background-color);
  color: var(--font-color);
  font-size: 18px;
  line-height: 1.5rem;
  h1{font-size: 2.2rem};
  h2{font-size: 2.0rem};
  h3{font-size: 1.8rem};
}
body {
  margin: 0;
}

</style>
