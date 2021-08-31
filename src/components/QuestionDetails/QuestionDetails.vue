<template>
  <section>
    <h2 class="question-heading">
      {{ this.questionAuthor }} fragt am {{ this.questionCreated_at }} zum Thema
      {{ this.questionCategory }}
    </h2>
    <h3 class="question-title">Frage: {{ this.questionTitle }}</h3>
    <p>Beschreibung: {{ this.questionDescription }}</p>
  </section>
</template>

<script>
export default {
  name: "QuestionDetails",
  data() {
    return {
      question: "",
    };
  },
  beforeRouteUpdate() {
    this.questionKey = this.$route.params.questionKey;
  },
  async created() {
    (this.questionKey = this.$route.params.questionKey),
      (this.questionTitle = this.$route.params.questionTitle),
      (this.questionDescription = this.$route.params.questionDescription),
      (this.questionAuthor = this.$route.params.questionAuthor);
    this.questionCreated_at = this.$route.params.questionCreated_at;
    this.questionCategory = this.$route.params.questionCategory;
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: 1rem 0rem 1rem 0;
  max-width: 90%;
  min-width: 50%;
  border: 0.5px solid var(--secondary-color);
  border-radius: 0.25rem;
}
</style>
