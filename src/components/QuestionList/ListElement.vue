<template>
  <li>
    <div class="question-heading">
      <h3>{{ questionTitle }}</h3>
      <div class="inner-question-wrapper">
        <p>{{ questionCat }}</p>
        <p>({{ questionStatus }})</p>
      </div>
    </div>
    <button :disabled="upvote" @click="$emit('upvote')">
      <span v-if="upvote">✔️</span>
      <span v-else>Upvote</span>
    </button>
    <!-- Button kann zurückgezogen werden -->
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
    },
    created_at: {
      type: Date,
    },
    author: {
      type: String,
    },
    upvotes: {
      type: [Number, String],
    },
  },
  emits: ["upvote"],
};
</script>
