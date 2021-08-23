<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="question.description"
          name="description"
        />
      </div>

      <button @click="saveQuestion" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newQuestion">Add</button>
    </div>
  </div>
</template>

<script>
import DataService from "@/services/DataServices";

export default {
  name: "AddQuestion",
  data() {
    return {
      question: {
        description: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveQuestion() {
      var data = {
        description: this.question.description,
      };

      DataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newQuestion() {
      this.submitted = false;
      this.question = {
        description: "",
      };
    },
  },
};
</script>
