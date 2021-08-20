<template>
  <li>
    <div class="question-heading">
      <h3>{{ questionTitle }}</h3>
      <div class="inner-question-wrapper">
        <p>Frage von: {{ author }}</p>
        <p>Kategorie: {{ questionCat }}</p>
        <p>Erstellt am: {{ created_at }}</p>
      </div>
    </div>
    <div class="question-edit">
      <button class="answer-button" :disabled="isDone" @click="$emit('answer')">
        <p v-if="isDone">Erledigt</p>
        <p v-else>Beantworten</p>
      </button>
    </div>
    <div class="vote-wrapper">
      <p>Votes: {{ upvotes }}</p>
      <div class="vote-arrows-wrapper"></div>
      <button
        class="vote-button-up"
        :disabled="userVoted"
        @click="$emit('upvote')"
      >
        <i class="fi-rr-angle-up" v-if="!userVoted"></i>
      </button>
      <button
        class="vote-button-down"
        :disabled="!userVoted"
        @click="$emit('downvote')"
      >
        <i class="fi-rr-angle-down" v-if="userVoted"></i>
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
    hasVoted: {
      type: Array,
    },
    userVoted: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["upvote", "answer", "downvote"],
};
/** <button :disabled="hasVoted" @click="$emit('upvote')">
        <p v-if="!hasVoted">Vote</p>
        <p v-if="hasVoted">Bereits abgestimmt</p>
      </button>
      <button :disbaled="!hasVoted" @click="$emit('downvote')">
        <p v-if="hasVoted">Zurückziehen</p>
      </button>  */
</script>

<style lang="scss" scoped>
@import url("https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css");
li {
  margin: 1rem 4rem 1rem 0;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(106, 28, 195, 1) 0px 0.5px 1px 0px,
    rgba(169, 112, 235, 1) 0px 1px 3px 1px;
  _border: 0.5px solid var(--primary-color);
  border-radius: 0.25rem;
  .question-heading {
    margin: 0.5rem 2rem 0.5rem 1rem;
    min-width: 35%;
    max-width: 70%;
  }
  .inner-question-wrapper {
    display: flex;
    flex-flow: row;
    align-items: baseline;
    p {
      font-size: 0.9em;
      margin-right: 1rem;
    }
  }
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
  .answer-button {
    padding: 0 0.5rem;
    background-color: var(--primary-color);
    color: var(--background-color);
    border-radius: 0.25rem;
    font-size: 1rem;
    p {
      margin: 0;
      font-weight: bold;
    }
  }
  .vote-wrapper {
    margin: 0.5rem 2rem;
    text-align: center;
  }
  .vote-button-up {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    i {
      font-size: 1.7rem;
      color: var(--success-color) !important;
      font-weight: bold !important;
    }
  }
  .vote-button-down {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    i {
      font-size: 1.7rem;
      color: var(--fail-color) !important;
      font-weight: bold !important;
    }
  }
}
</style>
