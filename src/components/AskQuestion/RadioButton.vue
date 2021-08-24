<template>
  <body>
    <div id="button-area" class="button-area">
      <div>
        <input
          type="radio"
          id="category-html"
          class="category-html"
          name="category-html"
          value="HTML"
          @click="getCategory"
          v-model="picked"
          default="true"
        />
        <label class="category-html-input" for="category-html">HTML</label>
      </div>
      <div>
        <input
          type="radio"
          id="category-css"
          class="category-css"
          name="category-css"
          value="CSS"
          @click="getCategory"
          v-model="picked"
        />
        <label class="category-css-input" for="category-css">CSS</label>
      </div>
      <div>
        <input
          type="radio"
          id="category-javascript"
          class="category-javascript"
          name="category-javascript"
          value="JavaScript"
          @click="getCategory"
          v-model="picked"
        />
        <label class="category-javascript-input" for="category-javascript"
          >JavaScript</label
        >
      </div>
      <div>
        <input
          type="radio"
          id="category-vue"
          class="category-vue"
          name="category-vue"
          value="VUE"
          @click="getCategory"
          v-model="picked"
        />
        <label class="category-vue-input" for="category-vue">VUE</label>
      </div>
      <div>
        <input
          type="radio"
          id="category-tooling"
          class="category-tooling"
          name="category-tooling"
          value="Tooling"
          @click="getCategory"
          v-model="picked"
        />
        <label class="category-tooling-input" for="category-tooling"
          >Tooling</label
        >
      </div>
      <div>
        <input
          data-name="test"
          type="radio"
          id="category-sonstiges"
          class="category-sonstiges"
          name="category-sonstiges"
          value="Sonstiges"
          @click="getCategory"
          v-model="picked"
        />
        <label class="category-sonstiges-input" for="category-sonstiges"
          >Sonstiges</label
        >
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      picked: "",
    };
  },
  methods: {
    getCategory() {
      this.$emit("getCategory", event.target.value);
      console.log(event.target.value);
    },
  },
};
</script>

<style scoped>
label {
  display: inline-block;
  position: relative;
  width: 6rem;
  _height: 1rem;
  border-radius: 0.25rem;
  _margin: 0.6rem;
  _padding: 0.5rem;
  font-size: 0.85rem;
}

.button-area {
  display: flex;
  width: 60vw;
  max-width: 40rem;
  margin-left: 0.5rem;
  align-items: flex-start;
  justify-content: space-between;
}

input[type="radio"]:focus + label {
  outline: none;
  border: 2.5px solid black;
  border-radius: 0.25rem;
  transform: scale(1.1);
}

input[type="radio"] {
  all: unset;
}

.category-html-input {
  border: solid 2.5px #cf5635;
  background-color: #fafafa;
  cursor: pointer;
}
input[type="radio"]:checked + .category-html-input {
  border: solid 2.5px #cf5635;
  border-radius: 0.25rem;
  background-color: #cf56357c;
}

.category-css-input {
  border: solid 2.5px #2f71b1;
  background-color: #fafafa;
  cursor: pointer;
}
input[type="radio"]:checked + .category-css-input {
  border: solid 2.5px #2f71b1;
  border-radius: 0.25rem;
  background-color: #2f70b177;
}

.category-javascript-input {
  border: solid 2.5px #f0da4e;
  background-color: #fafafa;
  cursor: pointer;
}
input[type="radio"]:checked + .category-javascript-input {
  border: solid 2.5px #f0da4e;
  border-radius: 0.25rem;
  background-color: #f0da4e7a;
}

.category-vue-input {
  border: solid 2.5px #63b687;
  background-color: #fafafa;
  cursor: pointer;
}
input[type="radio"]:checked + .category-vue-input {
  border: solid 2.5px #63b687;
  border-radius: 0.25rem;
  background-color: #63b6878e;
}

.category-tooling-input {
  border: solid 2.5px #5fdaff;
  background-color: #fafafa;
  cursor: pointer;
}
input[type="radio"]:checked + .category-tooling-input {
  border: solid 2.5px #5fdaff;
  border-radius: 0.25rem;
  background-color: #5fdaff7c;
}

.category-sonstiges-input {
  border: solid 2.5px #ae43fd;
  background-color: #fafafa;
  cursor: pointer;
}
input[type="radio"]:checked + .category-sonstiges-input {
  border: solid 2.5px #ae43fd;
  border-radius: 0.25rem;
  background-color: #af43fd7c;
}

.results {
  margin-left: 1.25rem;
  font-family: "Open Sans", sans-serif;
}
@media screen and (max-width: 1080px) {
  .button-area {
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px 15px;
    justify-content: center;
  }
}

@media screen and (max-width: 600px) {
  .button-area {
    min-width: 18rem;
  }

  label {
    width: 4.5rem;
  }
}
</style>
