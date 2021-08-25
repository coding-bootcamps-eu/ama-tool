<template>
  <section class="question-list" id="questionList">
    <div class="user-options">
      <div class="filter-options">
        <div class="single-filter-wrapper" data-cy="single-filter-wrapper">
          <input
            type="radio"
            v-model="questionStatus"
            name="filter"
            id="filterAll"
            value="All"
            data-cy="input-radio"
          />
          <label for="filterAll">Alle Fragen</label>
        </div>
        <div class="single-filter-wrapper" data-cy="single-filter-wrapper">
          <input
            type="radio"
            v-model="questionStatus"
            name="filter"
            id="filterOpen"
            value="false"
            data-cy="input-radio"
          />
          <label for="filterOpen">Offene Fragen</label>
        </div>
        <div class="single-filter-wrapper" data-cy="single-filter-wrapper">
          <input
            type="radio"
            v-model="questionStatus"
            name="filter"
            id="filterClosed"
            value="true"
            data-cy="input-radio"
          /><label for="filterClosed">Beantwortete Fragen</label>
        </div>
      </div>
    </div>
    <ul id="questions">
      <ListElement
        v-for="(question, index) in filteredQuestions"
        :key="index"
        v-bind="question"
        @upvote="voteQuestion(index)"
        @answer="answerQuestion(index)"
        @takebackanswer="takebackanswer(index)"
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
      storageKeyUser: "userID",
      storageKeyVoteStatus: "voteStatus",
    };
  },
  methods: {
    voteQuestion(id) {
      this.questions[id].hasVoted.forEach((voter) => {
        if (voter != localStorage.getItem(this.storageKeyUser)) {
          this.questions[id].upvotes++;
          this.questions[id] = {
            ...this.questions[id],
            hasVoted: [localStorage.getItem(this.storageKeyUser)],
            userVoted: true,
          };
        }
      });
    },
    downVote(id) {
      this.questions[id].hasVoted.forEach((voter) => {
        if (voter === localStorage.getItem(this.storageKeyUser)) {
          this.questions[id].upvotes--;
          this.questions[id] = {
            ...this.questions[id],
            userVoted: false,
          };
          let voterIndex = this.questions[id].hasVoted.indexOf(voter, 0);
          this.questions[id].hasVoted.splice(voterIndex, 1, "0");
        }
      });
    },
    answerQuestion(id) {
      this.questions[id] = {
        ...this.questions[id],
        isDone: true,
      };
    },
    takebackanswer(id) {
      this.questions[id] = {
        ...this.questions[id],
        isDone: false,
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
    function compare(a, b) {
      if (a.upvotes > b.upvotes) return -1;
      if (a.upvotes < b.upvotes) return 1;
      return 0;
    }

    this.questions = this.questions.slice(0).sort(compare);
    this.questions.forEach((question) => {
      question.hasVoted.push("0");
    });
    // generate user id
    localStorage.setItem(this.storageKeyUser, Math.random());
  },
};
</script>
<style lang="scss" scoped>
ul > li {
  display: flex;
}
.filter-options {
  display: flex;
  flex-flow: row;
  align-items: start;
  padding-left: 2rem;
  label {
    margin-right: 1rem;
  }
}
@media only screen and (max-width: 814px) {
  ul > li {
    display: flex;
    flex-flow: column;
  }
  .filter-options {
    display: flex;
    flex-flow: column;
    align-items: start;
    padding-left: 2rem;
    label {
      margin-right: 1rem;
    }
  }
}
</style>
