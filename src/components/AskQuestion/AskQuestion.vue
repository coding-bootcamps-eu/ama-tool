<template>
  <div class="wrapper">
    <div class="wrapper-question-title">
      <input
        type="text"
        id="question-title"
        v-bind:class="titleBorderColor"
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
        v-bind:class="descriptionBorderColor"
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
      <main-button
        id="preview-question-btn"
        buttonClass="primary"
        @click="showPreview"
        >{{ buttonText }}
      </main-button>

      <div class="empty-flex-item"></div>

      <main-button
        id="cancel-question-btn"
        buttonClass="primary"
        @click="resetInput"
        >ABBRECHEN
      </main-button>

      <main-button
        id="send-question-btn"
        buttonClass="secondary"
        @click="initQuestions"
        >SENDEN
      </main-button>
    </div>
    <div
      id="question-validation"
      class="question-validation"
      name="question-validation"
      v-show="validation === false"
    >
      <label class="no-valid-feedback">Fehlerhafte Angaben:</label>
      <p class="valid-feedback" v-show="!this.validTitle">
        Der Titel benötigt mindestens 10 Zeichen und drei Wörter
      </p>
      <p class="valid-feedback" v-show="!this.validDescription">
        Die Beschreibung benötigt mindestens 10 Zeichen und drei Wörter
      </p>
      <p class="valid-feedback" v-show="!this.validCategory">
        Es wurde keine Kategorie gewählt
      </p>
    </div>
    <div
      id="question-validation"
      class="question-validation valid-feedback"
      name="question-validation"
      v-show="validation === true"
    >
      <label>Deine Frage wurde erfolgreich gesendet!</label>
    </div>
  </div>
</template>

<script>
import Markdown from "vue3-markdown-it";

import RadioButton from "@/components/AskQuestion/RadioButton.vue";
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
      validTitle: true,
      validDescription: true,
      validCategory: true,
      validation: "",
      currentQuestion: {
        questionTitle: "",
        questionDescription: "",
        questionCategory: "",
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
    validateQuestion() {
      if (
        this.currentQuestion.questionTitle.length < 10 ||
        this.countWords(this.currentQuestion.questionTitle) < 2
      ) {
        this.validTitle = false;
      } else this.validTitle = true;
      if (
        this.currentQuestion.questionDescription.length < 10 ||
        this.countWords(this.currentQuestion.questionDescription) < 2
      ) {
        this.validDescription = false;
      } else this.validDescription = true;
      if (this.currentQuestion.questionCategory === "") {
        this.validCategory = false;
      } else this.validCategory = true;

      if (!this.validTitle || !this.validDescription || !this.validCategory) {
        this.validation = false;
        return false;
      } else {
        this.validation = true;
        return true;
      }
    },
    initQuestions() {
      // initiated with send-button. questionToList will be new stringify-Entry and will be pushed in array - later new DB-entry.
      // todo: check min-length of title/description?
      // afterwards delete this.title, this.description. Later on have to check all the attributes.
      let validation = this.validateQuestion();
      if (!validation) {
        console.log("no validation");
      } else {
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
          .then(() => {})
          .catch((e) => {
            console.error(e);
          });

        this.currentQuestion.questionTitle = "";
        this.currentQuestion.questionDescription = "";
      }
    },

    countWords(text) {
      let count = 0;
      for (let i = 0; i < text.length; i++) {
        if (" " === text.charAt(i)) {
          count++;
        }
      }
      return count;
    },

    resetInput() {
      // resets the written values (Todo: re-routing; Reset more values?!)
      this.currentQuestion.questionDescription = "";
      this.currentQuestion.questionTitle = "";
      this.validation = "";
      this.validTitle = true;
      this.validDescription = true;
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
    titleBorderColor() {
      return this.validTitle ? "question-title" : "question-title red-border";
    },
    descriptionSize() {
      return this.currentQuestion.questionDescription.length === 0
        ? "label-description"
        : "small-label-title";
    },
    descriptionBorderColor() {
      return this.validDescription
        ? "question-description"
        : "question-description red-border";
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
.question-preview,
.question-validation {
  border: 0.5px solid var(--font-color);
  border-radius: 0.25rem;
  padding: 0.8rem 4rem 0.3rem 0.3rem;
  margin: 0.5rem;
  line-height: 1.5rem;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  width: 60vw;
  min-width: 27rem;
  max-width: 40rem;
  text-align: left;
  cursor: text;
}

.red-border {
  border: 0.5px solid var(--fail-color);
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

.no-valid-feedback {
  color: var(--fail-color);
}

.valid-feedback {
  color: var(--success-color);
  text-align: center;
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

.empty-flex-item {
  flex-grow: 2;
}

@media screen and (max-width: 600px) {
  .wrapper {
    align-items: flex-start;
  }

  .question-title,
  .question-description,
  .question-preview,
  .question-validation {
    min-width: 16rem;
    width: 82vw;
    margin-left: 1rem;
  }
  .label-description {
    left: 1.3rem;
  }
  .label-title {
    left: 1.3rem;
  }

  .wrapper-btn-row {
    min-width: 16rem;
    width: 82vw;
    margin-left: 1rem;
  }
}
</style>
