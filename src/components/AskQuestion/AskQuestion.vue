<template>
  <div class="wrapper">
    <div class="wrapper-question-title">
      <input
        type="text"
        id="question-title"
        class="question-title"
        name="question-title"
        v-model="currentQuestion.title"
        maxlength="150"
      />
      <label for="question-title" v-bind:class="titleSize"
        >Titel der Frage</label
      >
      <p class="char-counter-short">
        {{ 150 - currentQuestion.title.length }}/150
      </p>
    </div>
    <RadioButton @getCategory="setNewCategory" />
    <div class="wrapper-question-description">
      <textarea
        id="question-description"
        class="question-description"
        name="question-description"
        v-model="currentQuestion.description"
        maxlength="5000"
        cols="30"
        rows="10"
      ></textarea>
      <label for="question-description" v-bind:class="descriptionSize"
        >Beschreibung der Frage</label
      >
      <p class="char-counter">
        {{ 5000 - currentQuestion.description.length }}/5000
      </p>
    </div>
    <div
      id="question-preview"
      class="question-preview"
      name="question-preview"
      placeholder="Bitte beschreibe deine Frage genauer."
      v-show="togglePreview"
    >
      <Markdown :source="currentQuestion.description" text-align: left />
    </div>

    <div class="wrapper-btn-row">
      <input
        type="button"
        id="preview-question-btn"
        class="preview-question-btn"
        @click="showPreview"
        :value="buttonText"
      />
      <div class="empty-flex-item"></div>
      <input
        type="button"
        id="cancel-question-btn"
        class="cancel-question-btn"
        @click="resetInput"
        value="ABBRECHEN"
      />
      <input
        type="button"
        id="send-question-btn"
        class="send-question-btn"
        @click="initQuestions"
        value="SENDEN"
      />
    </div>
  </div>
</template>

<script>
import RadioButton from "@/components/AskQuestion/RadioButton.vue";
import Markdown from "vue3-markdown-it";

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
        id: 1,
        title: "",
        description: "",
        category: "Simons category",
        isDone: false,
        created_at: new Date(),
        author: "randomAuthor",
        upvotes: 0,
      },
      previewIsVisible: false,
      questionArray: [],
    };
  },
  methods: {
    initQuestions() {
      // initiated with send-button. questionToList will be new stringify-Entry and will be pushed in array - later new DB-entry.
      // todo: check min-length of title/description?
      // afterwards delete this.title, this.description. Later on have to check all the attributes.
      this.created_at = new Date();

      const questionToList = JSON.stringify({
        id: this.currentQuestion.id,
        title: this.currentQuestion.title,
        description: this.currentQuestion.description,
        category: this.currentQuestion.category,
        isDone: this.currentQuestion.isDone,
        created_at: this.currentQuestion.created_at,
        author: this.currentQuestion.author,
        upvotes: this.currentQuestion.upvotes,
      });
      this.questionArray.push(questionToList);
      this.currentQuestion.title = "";
      this.currentQuestion.description = "";
    },
    resetInput() {
      // resets the written values (Todo: re-routing; Reset more values?!)
      this.currentQuestion.description = "";
      this.currentQuestion.title = "";
    },
    showPreview() {
      if (this.currentQuestion.description.length > 0) {
        this.previewIsVisible = !this.previewIsVisible;
      }
    },
    setNewCategory(result) {
      this.currentQuestion.category = result;
    },
  },
  computed: {
    titleSize() {
      return this.currentQuestion.title.length === 0
        ? "label-title"
        : "small-label-title";
    },
    descriptionSize() {
      return this.currentQuestion.description.length === 0
        ? "label-description"
        : "small-label-title";
    },

    togglePreview() {
      if (
        this.currentQuestion.description.length === 0 &&
        this.previewIsVisible === true
      ) {
        return !this.previewIsVisible;
      } else {
        return this.previewIsVisible;
      }
    },
    buttonText() {
      return this.previewIsVisible === true
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
