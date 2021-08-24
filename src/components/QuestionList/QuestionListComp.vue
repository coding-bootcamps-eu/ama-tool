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
        v-for="question in filteredQuestions"
        :key="question.key"
        v-bind="question"
        @upvote="voteQuestion(question.key)"
        @answer="answerQuestion(question.key)"
        @takebackanswer="takebackanswer(question.key)"
        @downvote="downVote(question.key)"
      />
    </ul>
  </section>
</template>

<script>
import ListElement from "@/components/QuestionList/ListElement.vue";
import DataService from "@/services/DataServices";

export default {
  name: "QuestionList",
  props: ["question"],
  el: "#questionList",
  components: {
    ListElement,
  },
  data() {
    return {
      questions: [],
      currentQuestion: null,
      questionStatus: "All",
      storageKeyUser: "userID",
      storageKeyVoteStatus: "voteStatus",
    };
  },
  watch: {
    question: function (question) {
      this.currentQuestion = { ...question };
    },
  },
  methods: {
    onDataChange(items) {
      let _questions = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _questions.push({
          key: key,
          title: data.title,
          description: data.description,
          category: data.category,
          isDone: data.isDone,
          created_at: data.created_at,
          author: data.author,
          upvotes: data.upvotes,
          hasVoted: data.hasVoted,
        });
      });
      this.questions = _questions;
      console.log(this.questions);
    },
    voteQuestion(key) {
      // user darf 1 mal voten. upvotes ++, userVoted  = true
      // adds voter to the hasVoted list
      let ref = "hasVoted";
      let voter = localStorage.getItem(this.storageKeyUser);
      DataService.updateVotes(key, ref, voter);
      let dbRef = DataService.getDbRef();
      dbRef
        .child("questions")
        .child(key)
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val().hasVoted);
            DataService.update(key, {
              upvotes: snapshot.val().upvotes + 1,
            });
          } else {
            console.log("no data");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      /*
      this.questions[key].hasVoted.forEach((voter) => {
        if (voter != localStorage.getItem(this.storageKeyUser)) {
          this.questions[key].upvotes++;
          this.questions[key] = {
            ...this.questions[key],
            hasVoted: [localStorage.getItem(this.storageKeyUser)],
            userVoted: true,
          };
        }
      });*/
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
      // update database status
      DataService.update(id, {
        isDone: true,
      });
      // update DOM status
      this.questions[id] = {
        ...this.questions[id],
        isDone: true,
      };
    },
    takebackanswer(id) {
      // update database status
      DataService.update(id, {
        isDone: false,
      });
      // update DOM status
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
  mounted() {
    DataService.getAll().on("value", this.onDataChange);
  },
  beforeUnmount() {
    DataService.getAll().off("value", this.onDataChange);
  },
  created() {
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
