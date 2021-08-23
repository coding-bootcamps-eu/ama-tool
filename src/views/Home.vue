<template>
  <div class="home">
    <AskQuestion />
  </div>
</template>

<script>
// @ is an alias to /src
import AskQuestion from "@/components/QuestionList/AskQuestion.vue";

export default {
  name: "Home",
  components: {
    AskQuestion,
  },

};

</script>
