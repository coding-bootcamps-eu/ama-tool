<template>
  <section class="question-list" id="questionList">
    <div class="filter-optionen">
      <input
        type="radio"
        v-model="questionStatus"
        name="filter"
        id="filterAll"
        value="All"
      />
      <label for="filterAll">Zeige alle Fragen</label>
      <input
        type="radio"
        v-model="questionStatus"
        name="filter"
        id="filterOpen"
        value="false"
      />
      <label for="filterOpen">Zeige offene Fragen</label>
      <input
        type="radio"
        v-model="questionStatus"
        name="filter"
        id="filterClosed"
        value="true"
      /><label for="filterClosed">Zeige beantwortete Fragen</label>
    </div>
    <ul id="questions">
      <ListElement
        v-for="(question, index) in filteredQuestions"
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
  el: "#questionList",
  components: {
    ListElement,
  },
  data() {
    return {
      questions: [],
      questionStatus: "All",
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
  computed: {
    filteredQuestions: function () {
      let questionStatus = this.questionStatus;
      if (questionStatus === "All") {
        return this.questions;
      } else if (questionStatus === "false") {
        return this.questions.filter(function (question) {
          return question.isDone === false;
        });
      } else {
        return this.questions.filter(function (question) {
          return question.isDone === true;
        });
      }
    },
  },
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
