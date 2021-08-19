<template>
  <div class="wrapper">
    <input
      type="text"
      id="question-title"
      class="question-title"
      name="question-title"
      v-model="currentQuestion.title"
      placeholder="Titel der Frage"
      maxlength="150"
    />
    <label for="question-title">Titel der Frage:</label>
    <textarea
      id="question-description"
      class="question-description"
      name="question-description"
      v-model="currentQuestion.description"
      placeholder="Bitte beschreibe deine Frage genauer."
      maxlength="5000"
      cols="30"
      rows="10"
    ></textarea>
    <label for="question-description">Beschreibung der Frage:</label>
    <input
      type="button"
      id="preview-question-btn"
      class="preview-question-btn"
      value="Vorschau"
    />
    <label for="preview-question-btn">Vorschau</label>
    <div class="wrapper-btn-row">
      <input
        type="button"
        id="cancel-question-btn"
        class="cancel-question-btn"
        @click="resetInput"
        value="ABBRECHEN"
      />
      <label for="cancel-question-btn">Abbrechen Button</label>
      <input
        type="button"
        id="send-question-btn"
        class="send-question-btn"
        @click="initQuestions"
        value="SENDEN"
      />
      <label for="send-question-btn">Senden Button</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "AskQuestions",

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
  },
};
</script>

<style scoped>
textarea {
  resize: none;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.question-title,
.question-description {
  border: 0.5px solid var(--font-color);
  border-radius: 0.25rem;
  padding: 0.3rem;
  margin: 0.5rem;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 1.5rem;
  /*TODO: need to fix max width */
  min-width: 60%;
  max-width: 40vw;
}
/*TODO: need to fix styling of the labels and :focus pseudo-class */
.question-title:focus + label,
.question-description:focus + label {
  border: 2.5px solid var(--success-color);
}
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
