<template>
  <section class="question-list">
    <ul id="questions">
      <ListElement
        v-for="(question, index) in questions"
        :key="index"
        v-bind="question"
        @upvote="voteQuestion(index)"
        @answer="answerQuestion(index)"
        @downvote="downVote(index)"
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
      this.questions[id].upvotes++;
      this.questions[id] = {
        ...this.questions[id],
        isVoted: true,
      };
    },
    downVote(id) {
      this.questions[id].upvotes--;
      this.questions[id] = {
        ...this.questions[id],
        isVoted: false,
      };
    },
    answerQuestion(id) {
      this.questions[id] = {
        ...this.questions[id],
        isDone: true,
      };
    },
  },
  computed: {},
  created() {
    this.questions = [...QUESTIONS];
    console.log(this.questions);
  },
};
</script>
<style lang="scss" scoped>
ul > li {
  display: flex;
}
</style>
