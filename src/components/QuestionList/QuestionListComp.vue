<template>
  <section class="question-list" id="questionList">
    <div class="user-options">
      <div class="filter-options">
        <div class="single-filter-wrapper">
          <input
            type="radio"
            v-model="questionStatus"
            name="filter"
            id="filterAll"
            value="All"
          />
          <label for="filterAll">Alle Fragen</label>
        </div>
        <div class="single-filter-wrapper">
          <input
            type="radio"
            v-model="questionStatus"
            name="filter"
            id="filterOpen"
            value="false"
          />
          <label for="filterOpen">Offene Fragen</label>
        </div>
        <div class="single-filter-wrapper">
          <input
            type="radio"
            v-model="questionStatus"
            name="filter"
            id="filterClosed"
            value="true"
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
      // User votet. Name wird in Array (hasVoted) gespeichert.
      // Kontrolle, ob Name in Array vorhanden, wenn ja= darf nicht voten (true, false)
      this.questions[id].hasVoted.forEach((voter) => {
        if (voter != localStorage.getItem(this.storageKeyUser)) {
          //darf voten
          this.questions[id].upvotes++;
          this.questions[id] = {
            ...this.questions[id],
            hasVoted: [localStorage.getItem(this.storageKeyUser)],
            userVoted: true,
          };
          console.log("User hat gevoted " + this.questions[id].hasVoted);
          this.questions.forEach((question) => {
            console.log(question.hasVoted);
          });
        } else {
          //darf nicht voten
          console.log("Darf nicht voten");
        }
      });
    },
    downVote(id) {
      console.log("questions array " + this.questions[id].hasVoted);
      // User kann vote zurückziehen, wenn er schon gevotet hat. Wenn er das tut, darf er wieder voten.
      this.questions[id].hasVoted.forEach((voter) => {
        if (voter === localStorage.getItem(this.storageKeyUser)) {
          this.questions[id].upvotes--;
          this.questions[id] = {
            ...this.questions[id],
            userVoted: false,
          };
          let voterIndex = this.questions[id].hasVoted.indexOf(voter, 0);
          console.log(voterIndex);
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

    /**
     *  sortedQuestions: function () {
      return [...this.questions].sort((a, b) => a.upvotes < b.upvotes);
    },
     */
  },
  created() {
    this.questions = [...QUESTIONS];
    function compare(a, b) {
      if (a.upvotes > b.upvotes) return -1;
      if (a.upvotes < b.upvotes) return 1;
      return 0;
    }

    this.questions = this.questions.slice(0).sort(compare);
    // push empty voteslots to prevent loading a empty array
    this.questions.forEach((question) => {
      question.hasVoted.push("0");
      console.log(question.hasVoted);
    });
    // generate user id
    localStorage.setItem(this.storageKeyUser, Math.random());
    console.log("User ID: " + localStorage.getItem(this.storageKeyUser));
  },
};
</script>
<style lang="scss" scoped>
ul > li {
  display: flex;
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
@media only screen and (max-width: 814px) {
  ul > li {
    display: flex;
    flex-flow: column;
  }
}
</style>
