<template>
  <section class="question-list" id="questionList">
    <div class="user-options">
      <div class="filter-options">
        <div class="single-filter-wrapper">
          <input
            type="radio"
            v-model="questionFilterStatus"
            name="filter"
            id="filterAll"
            value="All"
            data-cy="input-radio-all"
          />
          <label for="filterAll">Alle Fragen</label>
        </div>
        <div class="single-filter-wrapper">
          <input
            type="radio"
            v-model="questionFilterStatus"
            name="filter"
            id="filterOpen"
            value="false"
            data-cy="input-radio-open"
          />
          <label for="filterOpen">Offene Fragen</label>
        </div>
        <div class="single-filter-wrapper">
          <input
            type="radio"
            v-model="questionFilterStatus"
            name="filter"
            id="filterClosed"
            value="true"
            data-cy="input-radio-closed"
          /><label for="filterClosed">Beantwortete Fragen</label>
        </div>
      </div>
    </div>
    <div class="question-list-wrapper">
      <ol id="questions">
        <QuestionListElement
          v-for="question in filteredQuestions"
          :key="question.questionKey"
          v-bind="question"
          @upvote="voteQuestion(question.questionKey, getUserID())"
          @answer="answerQuestion(question.questionKey)"
          @takebackanswer="takebackanswer(question.questionKey)"
          @downvote="downVote(question.questionKey, getUserID())"
        />
      </ol>
    </div>
  </section>
</template>

<script>
import QuestionListElement from "@/components/QuestionList/QuestionListElement.vue";
import DataService from "@/services/DataServices";

export default {
  name: "QuestionList",
  props: ["question"],
  el: "#questionList",
  components: {
    QuestionListElement,
  },
  data() {
    return {
      questionsDOM: [],
      usersVotedQuestionDOM: [],
      watchedQuestion: null,
      questionFilterStatus: "All",
      storageKeyUserID: "userID",
      storageKeyVoteStatus: "voteStatus",
      userID: null,
    };
  },
  watch: {
    question: function (question) {
      this.watchedQuestion = { ...question };
    },
  },
  methods: {
    /**
     * On each Datachange, update the questionsDOM Array with new Data
     */
    onDataChange(changedQuestions) {
      let _questions = [];
      changedQuestions.forEach((changedQuestion) => {
        let questionKey = changedQuestion.key;
        let changedData = changedQuestion.val();
        _questions.push({
          questionKey: questionKey,
          ...changedData,
        });
      });
      this.questionsDOM = _questions;
      this.questionsDOM = this.questionsDOM.slice(0).sort(this.compareVotes);
    },

    getUserID() {
      if (this.isUserSet() === true) {
        return sessionStorage.getItem(this.storageKeyUserID);
      }
    },
    isUserSet() {
      if (sessionStorage.getItem(this.storageKeyUserID) != null) {
        return true;
      } else {
        false;
      }
    },

    createUsersVotedArray(questionKey) {
      let questionsDbRef = DataService.getAll();
      let questionsChildRef = "usersVotedQuestion";
      questionsDbRef
        .child(questionKey)
        .child(questionsChildRef)
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            const val = Object.values(snapshot.val());
            val.forEach((value) => {
              this.usersVotedQuestionDOM.push(value);
            });
          } else {
            console.error("no data");
          }
        });
    },

    isUserAllowedToVote(userIDInc) {
      const voterFound = this.usersVotedQuestionDOM.find((vote) => {
        vote.userID === userIDInc && vote.hasVoted === true;
      });
      if (voterFound === undefined) {
        return true; // darf wählen
      } else {
        return false; // darf nicht wählen
      }
    },

    voteQuestion(questionKey, userIDInc) {
      this.createUsersVotedArray(questionKey);
      if (this.isUserAllowedToVote(userIDInc) === true) {
        let ref = "usersVotedQuestion";
        DataService.updateVotes(questionKey, ref, {
          hasVoted: true,
          userID: userIDInc,
        });
        let questionsDbRef = DataService.getAll();
        questionsDbRef
          .child(questionKey)
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              DataService.update(questionKey, {
                questionUpvotes: snapshot.val().questionUpvotes + 1,
              });
            } else {
              console.error("no data");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },

    downVote(questionKey, userIDInc) {
      this.createUsersVotedArray(questionKey);
      let ref = "usersVotedQuestion";
      DataService.updateVotes(questionKey, ref, {
        hasVoted: false,
        userID: userIDInc,
      });
      let questionsDbRef = DataService.getAll();
      questionsDbRef
        .child(questionKey)
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            DataService.update(questionKey, {
              questionUpvotes: snapshot.val().questionUpvotes - 1,
              usersVotedQuestion: {
                hasVoted: false,
                userID: userIDInc,
              },
            });
          } else {
            console.error("no data");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    answerQuestion(questionKey) {
      DataService.update(questionKey, {
        questionIsDone: true,
      });
    },

    takebackanswer(questionKey) {
      DataService.update(questionKey, {
        questionIsDone: false,
      });
    },
    compareVotes(a, b) {
      if (a.questionUpvotes > b.questionUpvotes) return -1;
      if (a.questionUpvotes < b.questionUpvotes) return 1;
      return 0;
    },
  },
  computed: {
    filteredQuestions: function () {
      let questionFilterStatus = this.questionFilterStatus;
      if (questionFilterStatus === "All") {
        return this.questionsDOM;
      } else if (questionFilterStatus === "false") {
        return this.questionsDOM.filter((question) => {
          return question.questionIsDone === false;
        });
      } else {
        return this.questionsDOM.filter((question) => {
          return question.questionIsDone === true;
        });
      }
    },
  },
  mounted() {
    DataService.getAll().on("value", this.onDataChange);
    document.title = "AMA-Fragenliste";
  },
  beforeUnmount() {
    DataService.getAll().off("value", this.onDataChange);
  },
};
</script>
<style lang="scss" scoped>
ol {
  all: unset;
}
ol > li {
  display: flex;
}
.filter-options {
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  padding-left: 2rem;
  label {
    margin-right: 1rem;
  }
}
.question-list-wrapper {
  margin: 0 4rem 0 2.5rem;
}
@media only screen and (max-width: 814px) {
  .question-list-wrapper {
    margin: 0 2rem 0 2.5rem;
  }

  ol > li {
    display: flex;
    flex-flow: column;
  }
  .filter-options {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
  }
}
@media only screen and (max-width: 600px) {
  .question-list-wrapper {
    margin: 0 2rem 0 1rem;
  }
  .filter-options {
    padding: 0;
    margin: 0 1rem;
  }
}
</style>
