<template>
  <div class="wrapper">
    <div class="wrapper-question-title">
      <input
        type="text"
        id="question-title"
        class="question-title"
        name="question-title"
        v-model="currentQuestion.questionTitle"
        maxlength="150"
      />
      <label for="question-title" v-bind:class="titleSize"
        >Titel der Frage</label
      >
      <p class="char-counter-short">
        {{ 150 - currentQuestion.questionTitle.length }}/150
      </p>
    </div>
    <RadioButton @getCategory="setNewCategory" />
    <div class="wrapper-question-description">
      <textarea
        id="question-description"
        class="question-description"
        name="question-description"
        v-model="currentQuestion.questionDescription"
        maxlength="5000"
        cols="30"
        rows="10"
      ></textarea>
      <label for="question-description" v-bind:class="descriptionSize"
        >Beschreibung der Frage</label
      >
      <p class="char-counter">
        {{ 5000 - currentQuestion.questionDescription.length }}/5000
      </p>
    </div>
    <div
      id="question-preview"
      class="question-preview"
      name="question-preview"
      placeholder="Bitte beschreibe deine Frage genauer."
      v-show="togglePreview"
    >
      <Markdown
        :source="currentQuestion.questionDescription"
        text-align:
        left
      />
    </div>

    <div class="wrapper-btn-row">
      <button
        type="button"
        id="preview-question-btn"
        class="preview-question-btn"
        @click="showPreview"
      >
        {{ buttonText }}
      </button>
      <div class="empty-flex-item"></div>
      <button
        type="button"
        id="cancel-question-btn"
        class="cancel-question-btn"
        @click="resetInput"
      >
        ABBRECHEN
      </button>
      <button
        type="button"
        id="send-question-btn"
        class="send-question-btn"
        @click="initQuestions"
      >
        SENDEN
      </button>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/components/AskQuestion/RadioButton.vue";
import Markdown from "vue3-markdown-it";
import DataService from "@/services/DataServices";

export default {
  name: "AskQuestions",
  components: {
    RadioButton,
    Markdown,
  },

  data() {
    return {
      disabled: 0,

      currentQuestion: {
        questionTitle: "",
        questionDescription: "",
        questionCategory: "Simons category",
        questionIsDone: false,
        questionCreated_at: new Date(),
        questionAuthor: "randomAuthor",
        questionUpvotes: 0,
        usersVotedQuestion: [
          {
            userID: 0,
            hasVoted: false,
          },
        ],
      },
      previewIsVisible: false,
      text: "Vorschau einblenden",
      questionArray: [],
    };
  },
  methods: {
    initQuestions() {
      // initiated with send-button. questionToList will be new stringify-Entry and will be pushed in array - later new DB-entry.
      // todo: check min-length of title/description?
      // afterwards delete this.title, this.description. Later on have to check all the attributes.
      this.questionCreated_at = new Date();
      const questionToList = {
        questionTitle: this.currentQuestion.questionTitle,
        questionDescription: this.currentQuestion.questionDescription,
        questionCategory: this.currentQuestion.questionCategory,
        questionIsDone: this.currentQuestion.questionIsDone,
        questionCreated_at: JSON.stringify(this.questionCreated_at),
        questionAuthor: this.currentQuestion.questionAuthor,
        questionUpvotes: this.currentQuestion.questionUpvotes,
        usersVotedQuestion: this.currentQuestion.usersVotedQuestion,
      };
      this.questionArray.push(questionToList);
      // creates database entry with given questionToList
      DataService.create(questionToList)
        .then(() => {
          console.log("Question added to database");
        })
        .catch((e) => {
          console.log(e);
        });

      this.currentQuestion.questionTitle = "";
      this.currentQuestion.questionDescription = "";
    },
    resetInput() {
      // resets the written values (Todo: re-routing; Reset more values?!)
      this.currentQuestion.questionDescription = "";
      this.currentQuestion.questionTitle = "";
    },
    showPreview() {
      if (this.currentQuestion.questionDescription.length > 0) {
        this.previewIsVisible = !this.previewIsVisible;
        this.previewIsVisible === true
          ? (this.text = "Vorschau ausblenden")
          : (this.text = "Vorschau einblenden");
      }
    },
    setNewCategory(result) {
      this.currentQuestion.questionCategory = result;
    },
  },
  computed: {
    titleSize() {
      return this.currentQuestion.questionTitle.length === 0
        ? "label-title"
        : "small-label-title";
    },
    descriptionSize() {
      return this.currentQuestion.questionDescription.length === 0
        ? "label-description"
        : "small-label-title";
    },

    togglePreview() {
      if (
        this.currentQuestion.questionDescription.length === 0 &&
        this.previewIsVisible === true
      ) {
        return !this.previewIsVisible;
      } else {
        return this.previewIsVisible;
      }
    },

    buttonText() {
      return this.togglePreview === true
        ? "Vorschau ausblenden"
        : "Vorschau einblenden";
    },
  },
};
</script>

<style scoped>
/* -------- Styling of the input field and textarea -------- */
textarea {
  resize: none;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.question-title,
.question-description,
.question-preview {
  border: 0.5px solid var(--font-color);
  border-radius: 0.25rem;
  padding: 0.8rem 0.3rem 0.3rem 0.3rem;
  margin: 0.5rem;
  line-height: 1.5rem;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  width: 60vw;
  min-width: 27rem;
  max-width: 40rem;
  text-align: left;
}
.wrapper-question-title,
.wrapper-question-description {
  position: relative;
}
.label-title {
  position: absolute;
  transition: 0.3s;
  top: 50%;
  left: 0.95rem;
  transform: translateY(-50%);
  color: var(--placeholder-color);
}
.small-label-title {
  position: absolute;
  top: 20px;
  transition: 0.3s;
  left: 0.95rem;
  font-size: 0.6rem;
  transform: translateY(-50%);
  color: var(--font-color);
}
.label-description {
  position: absolute;
  transition: 0.3s;
  top: 10%;
  left: 0.95rem;
  transform: translateY(-50%);
  color: var(--placeholder-color);
}
.question-title:focus + label,
.question-description:focus + label {
  font-size: 0.6rem;
  transition: 0.3s;
  top: 20px;
  color: var(--font-color);
}
.question-title:focus,
.question-description:focus {
  outline: none;
  border: 0.5px solid var(--success-color);
}
.char-counter-short {
  position: absolute;
  transform: translateY(-190%);
  right: 1.4rem;
  font-size: 0.7rem;
  color: var(--placeholder-color);
}
.char-counter {
  position: absolute;
  transform: translateY(-230%);
  right: 1.4rem;
  font-size: 0.7rem;
  color: var(--placeholder-color);
}

/* -------- Styling of the buttons -------- */
.wrapper-btn-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 60vw;
  min-width: 27rem;
  max-width: 40rem;
}
.preview-question-btn {
  align-self: flex-start;
}
.empty-flex-item {
  flex-grow: 2;
}
.cancel-question-btn {
  color: var(--background-color);
  font-weight: bold;
  background-color: var(--secondary-color);
  border: 2.5px solid transparent;
  border-radius: 0.25rem;
  padding: 0.3rem 0.7rem;
  margin: 0.5rem;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 1.5rem;
}
.send-question-btn {
  color: var(--background-color);
  font-weight: bold;
  background-color: var(--primary-color);
  border: 2.5px solid transparent;
  border-radius: 0.25rem;
  padding: 0.3rem 0.7rem;
  margin: 0.5rem;
  margin-right: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 1.5rem;
}
.preview-question-btn {
  color: var(--background-color);
  font-weight: bold;
  background-color: var(--secondary-color);
  border: 2.5px solid transparent;
  border-radius: 0.25rem;
  padding: 0.3rem 0.7rem;
  margin: 0.5rem;
  margin-left: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 1.5rem;
}
.cancel-question-btn:focus,
.send-question-btn:focus,
.preview-question-btn:focus {
  outline: none;
  border: 2.5px solid var(--success-color);
}
</style>
