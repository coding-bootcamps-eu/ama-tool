<template>
  <div class="wrapper">
    <label for="question-title"></label>
    <input
      type="text"
      id="question-title"
      class="question-title"
      name="question-title"
      placeholder="Titel der Frage"
      maxlength="150"
    />
    <label for="question-description"></label>
    <textarea
      id="question-description"
      class="question-description"
      name="question-description"
      placeholder="Bitte beschreibe deine Frage genauer."
      maxlength="5000"
      cols="30"
      rows="10"
    ></textarea>
    <label for="cancel-question-btn"></label>
    <input
      type="button"
      id="cancel-question-btn"
      class="cancel-question-btn"
      value="ABBRECHEN"
    />
    <label for="send-question-btn"></label>
    <input
      type="button"
      id="send-question-btn"
      class="send-question-btn"
      value="SENDEN"
    />
  </div>
</template>

<style scoped>
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
}
.cancel-question-btn {
  color: var(--background-color);
  font-weight: bold;
  background-color: var(--secondary-color);
  border: none;
  border-radius: 0.25rem;
  padding: 0.3rem 0.7rem;
  margin: 0.5rem;
}
.send-question-btn {
  color: var(--background-color);
  font-weight: bold;
  background-color: var(--primary-color);
  border: none;
  border-radius: 0.25rem;
  padding: 0.3rem 0.7rem;
  margin: 0.5rem;
}
</style>
