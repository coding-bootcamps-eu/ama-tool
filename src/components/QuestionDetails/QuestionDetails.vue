<template>
  <section>
    <h3 class="question-title">Frage: {{ this.questionTitle }}</h3>
    <div id="question-description" name="question-description">
      <Markdown
        class="question-description"
        :source="this.questionDescription"
        text-align:
        left
      />
    </div>
    <div class="question-button-wrapper">
      <main-button
        id="button"
        buttonClass="primary"
        @click="browseBack"
        data-cy="back-button"
        >ZURÜCK
      </main-button>
    </div>
  </section>
</template>

<script>
import Markdown from "vue3-markdown-it";
import "highlight.js/styles/github.css";

export default {
  name: "QuestionDetails",
  components: {
    Markdown,
  },
  data() {
    return {
      question: "",
    };
  },
  methods: {
    browseBack() {
      this.$router.replace("/questionlist");
    },
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
.question-title {
  color: var(--primary-color);
  margin: 1.5rem 4rem 1rem 2.5rem;
}

.question-description {
  border: 0.5px solid var(--primary-color);
  border-radius: 0.25rem;
  padding: 0.8rem 2rem 0.3rem 0.3rem;
  margin: 1.5rem 4rem 1rem 2.5rem;
  line-height: 1.5rem;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  text-align: left;
  cursor: text;
}
.question-button-wrapper {
  display: flex;
  margin-left: 2.5rem;
}
.button {
}
@media only screen and (max-width: 814px) {
  .question-description {
    margin: 2.8rem 2rem 1rem 2.5rem;
  }
  .question-title {
    margin: 1.5rem 2rem 1rem 2.5rem;
    font-size: 1.85rem;
  }
}

@media only screen and (max-width: 600px) {
  .question-description {
    margin-left: 1rem;
    margin-top: 1.5rem;
  }
  .question-title {
    margin: 1.5rem 2rem 1rem 1rem;
    font-size: 1.4rem;
  }
}
</style>
