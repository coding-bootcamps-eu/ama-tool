<template>
  <p>this is me, running hot</p>
</template>

<script>
export default {
  name: "QuestionDetails",

  beforeRouteUpdate() {
    this.id = this.$route.params.id;
  },
};
</script>
