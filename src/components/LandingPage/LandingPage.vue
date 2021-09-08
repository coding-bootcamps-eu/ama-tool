<template>
  <section class="lp__welcome-section">
    <div class="lp__welcome-wrapper">
      <p>
        Dieses Tool dient dazu Ask Me Anything Sessions vorzubereiten.
        <b>Bitte logge dich</b> mit deinem <b>GitHub Account</b> ein, um die
        Funktionen des Tools nutzen zu können.
      </p>
      <p class="lp__login-message">
        <em
          ><b>BEACHTE:</b> Dein Displayname in GitHub muss eingestellt sein um
          den vollen Umfang der Funktionen gewährleisten zu können! (GitHub -
          Settings - Name)</em
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Landing Page",
};
</script>

<style lang="scss" scoped>
.lp__welcome-section {
  margin: 0 4rem 0 2.5rem;
  line-height: 1.5;
  text-align: justify;
}
.lp__welcome-message {
  margin: 0.5rem 0rem;
}
em {
  background-color: var(--placeholer-color);
}
b {
  color: var(--primary-color);
}
</style>
