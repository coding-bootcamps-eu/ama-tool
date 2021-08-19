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
      <label for="question-title" class="label-title">Titel der Frage</label>
    </div>
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
      <div
        id="question-preview"
        class="question-preview"
        name="question-preview"
        placeholder="Bitte beschreibe deine Frage genauer."
        v-show="previewIsVisible"
      >
        <Markdown :source="currentQuestion.description" />
      </div>
      <label for="question-description" class="label-description"
        >Beschreibung der Frage</label
      >
    </div>
    <input
      type="button"
      id="preview-question-btn"
      class="preview-question-btn"
      value="Vorschau"
      @click="showPreview"
    />
    <div class="wrapper-btn-row">
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
import Markdown from "vue3-markdown-it";

export default {
  name: "AskQuestions",
  components: {
    Markdown,
  },

  data() {
    return {
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
      this.previewIsVisible = !this.previewIsVisible;
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
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 1.5rem;
  /*TODO: need to fix max width */
  min-width: 60vw;
  max-width: 20%;
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
.label-description {
  position: absolute;
  transition: 0.3s;
  top: 10%;
  left: 0.95rem;
  transform: translateY(-50%);
  color: var(--placeholder-color);
}
/*TODO: need to fix styling of the labels and :focus pseudo-class */
/*TODO: need to fix movement when input field is selected (border of focus is larger) */
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
  border: 2.5px solid var(--success-color);
}

/* -------- Styling of the buttons -------- */
.cancel-question-btn {
  color: var(--background-color);
  font-weight: bold;
  background-color: var(--secondary-color);
  border: none;
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
  border: none;
  border-radius: 0.25rem;
  padding: 0.3rem 0.7rem;
  margin: 0.5rem;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 1.5rem;
}
.preview-question-btn {
  color: var(--background-color);
  font-weight: bold;
  background-color: var(--secondary-color);
  border: none;
  border-radius: 0.25rem;
  padding: 0.3rem 0.7rem;
  margin: 0.5rem;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 1.5rem;
}
/*TODO: need to fix styling of the labels and :focus pseudo-class */
.cancel-question-btn:focus + label,
.send-question-btn:focus + label,
.preview-question-btn:focus + label {
  border: 2.5px solid var(--success-color);
}
</style>
