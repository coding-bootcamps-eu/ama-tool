<template>
  <section class="question-list">
    <ul id="questions">
      <ListElement
        v-for="question in questions"
        :key="question.id"
        v-bind="question"
        @upvote="voteQuestion(question.id)"
      />
    </ul>
  </section>
</template>

<script>
import ListElement from "@/components/QuestionList/ListElement.vue";
import QUESTIONS from "./QuestionsJS.js";

export default {
  name: "QuestionList",
  components: {
    ListElement,
  },
  data() {
    return {
      questions: [],
    };
  },
  methods: {
    voteQuestion(id) {
      this.questions[id] = {
        ...this.questions[id],
        upvote: true,
      };
    },
  },
  created() {
    this.questions = [...QUESTIONS];
  },
};
</script>
