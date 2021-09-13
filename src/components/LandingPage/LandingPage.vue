<template>
  <section class="lp__welcome-section">
    <div class="lp__welcome-wrapper">
      <p>
        Dieses Tool dient dazu Ask Me Anything Sessions vorzubereiten.
        <b>Bitte logge dich</b> mit deinem <b>GitHub Account</b> ein, um die
        Funktionen des Tools nutzen zu können.
      </p>
      <div class="lp__login-wrapper"><UserLogin /></div>
    </div>
  </section>
</template>

<script>
import UserLogin from "@/components/UserLogin/UserLogin.vue";

export default {
  name: "Landing Page",
  components: { UserLogin },
};
</script>

<style lang="scss" scoped>
.lp__welcome-section {
  margin: 0 4rem 0 2.5rem;
  line-height: 1.5;
  text-align: justify;
}
.lp__welcome-wrapper {
  max-width: 50ch;
  margin: 4rem auto;
}
.lp__welcome-message {
  margin: 0.5rem 0rem;
}
b {
  color: var(--primary-color);
}
.lp__login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
