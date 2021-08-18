<template>
  <li>
    <div class="question-heading">
      <h3>{{ questionTitle }}</h3>
      <div class="inner-question-wrapper">
        <p>Kategorie: {{ questionCat }}</p>
      </div>
    </div>
    <div class="question-edit">
      <button :disabled="isDone" @click="$emit('answer')">
        <p v-if="isDone">Erledigt</p>
        <p v-else>Beantworten</p>
      </button>
    </div>
    <div class="vote-wrapper">
      <p>Votes: {{ upvotes }}</p>
      <button :disabled="isVoted" @click="$emit('upvote')">
        <p v-if="isVoted">Bereits abgestimmt</p>
        <p v-else>Vote</p>
      </button>
      <button :disbaled="!isVoted" @click="$emit('downvote')">
        <p v-if="isVoted">Zurückziehen</p>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: "ListElement",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    questionTitle: {
      type: String,
      required: true,
    },
    questionDescription: {
      type: String,
      required: true,
    },
    questionCat: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    created_at: {
      type: [String, Date],
    },
    author: {
      type: String,
    },
    upvotes: {
      type: Number,
    },
    isVoted: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["upvote", "answer", "downvote"],
};
</script>

<style lang="scss" scoped>
li {
  margin: 1rem 4rem 1rem 0;
  list-style-type: none;
  justify-content: space-between;
  border: 0.5px solid var(--primary-color);
  border-radius: 0.25rem;
  div {
    margin-left: 1rem;
    display: flex;
    flex-flow: column;
    text-align: left;
  }
  div > * {
    margin: 0;
    padding: 0;
  }
  h3,
  p {
    padding: 0.5rem 0;
  }
  h3 {
    border-bottom: 0.5px solid var(--primary-color);
  }
  button {
    margin: 1rem;
  }
}
</style>
