<template>
  <li>
    <div class="question-heading">
      <p class="question-title">{{ questionTitle }}</p>
      <div class="inner-question-wrapper">
        <p>Frage von: {{ author }}</p>
        <p>Kategorie: {{ questionCat }}</p>
        <p>Erstellt am: {{ created_at }}</p>
      </div>
    </div>
    <div class="question-edit">
      <button class="answer-button" v-if="!isDone" @click="$emit('answer')">
        <p>Beantworten</p>
      </button>
      <button
        class="answer-button"
        v-if="isDone"
        @click="$emit('takebackanswer')"
      >
        <p>Zurückziehen</p>
      </button>
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
      <div class="vote-wrapper-small-screen">
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
    emits: ["upvote", "answer", "downvote", "takebackanswer"],
  computed: {
    buttonText() {
      return this.isDone ? this.takebackanswer(this.id) : this.isDone;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css");
.vote-wrapper-small-screen {
  display: none;
}
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
    min-width: 50%;
    max-width: 70ch;
  }
  .inner-question-wrapper {
    display: flex;
    flex-flow: row;
    align-items: baseline;
    p {
      font-size: 0.85em;
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
  .question-title {
    margin: 0;
    padding: 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 550;
    border-bottom: 0.5px solid var(--primary-color);
  }
  .question-edit {
    flex-flow: column-reverse;
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
    p {
      font-size: 0.9rem;
    }
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
@media only screen and (max-width: 814px) {
  li {
    margin: 1rem 0rem 1rem 0;
    max-width: 90%;
    min-width: 50%;
    list-style-type: none;
    justify-content: space-between;
    align-items: start;
    border: 0.5px solid var(--secondary-color);
    border-radius: 0.25rem;
    .question-heading {
      margin: 0.5rem 2rem 0.5rem 1rem;
      min-width: 80%;
      max-width: 100%;
    }
    button {
      margin: 0;
    }
    .vote-wrapper {
      display: none;
    }
    .question-edit {
      width: 90%;
      display: flex;
      justify-content: space-between;
      flex-flow: row-reverse;
      margin-bottom: 0.5rem;
      height: 3rem;
    }
    .inner-question-wrapper {
      width: 100%;
    }
    .vote-wrapper-small-screen {
      margin: 0 0 1rem 0;
      display: flex;
      flex-flow: row-reverse;
      align-items: center;
      p {
        margin-left: 0.5rem;
      }
    }
    .question-heading {
      width: 92%;
    }
  }
}
</style>
