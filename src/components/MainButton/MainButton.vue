<template>
  <input type="button" :class="buttonClass" />
</template>

<script>
//  implementation-line: <main-button buttonClass="[class = {primary, secondary}]" value="[Button-Text]" />
export default {
  name: "MainButton",

  props: {
    buttonClass: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.primary {
  color: var(--background-color);
  font-weight: bold;
  background-color: var(--secondary-color);
  border: 2.5px solid transparent;
  border-radius: 0.25rem;
  padding: 0.3rem 0.7rem;
  margin: 0.5rem;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 1.5rem;
}
.secondary {
  color: var(--background-color);
  font-weight: bold;
  background-color: var(--primary-color);
  border: 2.5px solid transparent;
  border-radius: 0.25rem;
  padding: 0.3rem 0.7rem;
  margin: 0.5rem;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 1.5rem;
}

.secondary:focus,
.primary:focus {
  outline: none;
  border: 2.5px solid var(--success-color);
}
</style>
