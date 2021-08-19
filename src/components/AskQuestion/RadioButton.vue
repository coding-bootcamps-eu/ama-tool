<template>
  <body>
    <div id="v-model-radiobutton" class="button-area">
      <input
        type="radio"
        id="category-html"
        class="category-html"
        name="category-html"
        value="HTML"
        v-model="picked"
      />
      <label class="category-html-input" for="category-html"
        ><p class="result-text">HTML</p></label
      >

      <input
        type="radio"
        id="category-css"
        class="category-css"
        name="category-css"
        value="CSS"
        v-model="picked"
      />
      <label class="category-css-input" for="category-css"
        ><p class="result-text">CSS</p></label
      >

      <input
        type="radio"
        id="category-javascript"
        class="category-javascript"
        name="category-javascript"
        value="JavaScript"
        v-model="picked"
      />
      <label class="category-javascript-input" for="category-javascript"
        ><p class="result-text">JavaScript</p></label
      >

      <input
        type="radio"
        id="category-vue"
        class="category-vue"
        name="category-vue"
        value="VUE"
        v-model="picked"
      />
      <label class="category-vue-input" for="category-vue"
        ><p class="result-text">VUE</p></label
      >

      <input
        type="radio"
        id="category-tooling"
        class="category-tooling"
        name="category-tooling"
        value="Tooling"
        v-model="picked"
      />
      <label class="category-tooling-input" for="category-tooling"
        ><p class="result-text">Tooling</p></label
      >

      <input
        data-name="test"
        type="radio"
        id="category-sonstiges"
        class="category-sonstiges"
        name="category-sonstiges"
        value="Sonstiges"
        v-model="picked"
      />
      <label class="category-sonstiges-input" for="category-sonstiges"
        ><p class="result-text">Sonstiges</p></label
      >

      <div class="results">Auswahl: {{ picked }}</div>
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
};
</script>

<style>
label {
  display: inline-block;
  width: 6.25rem;
  height: 1.625rem;
  border-radius: 0.25rem;
  margin: 10px;
  padding-bottom: 20px;
}
.button-area {
  margin-top: 15px;
}
.result-text {
  position: relative;
  bottom: 18px;
  font-family: "Open Sans", sans-serif;
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
}
input[type="radio"]:checked + .category-html-input {
  border: solid 2.5px #cf5635;
  border-radius: 0.25rem;
  background-color: #cf56357c;
}

.category-css-input {
  border: solid 2.5px #2f71b1;
  background-color: #fafafa;
}
input[type="radio"]:checked + .category-css-input {
  border: solid 2.5px #2f71b1;
  border-radius: 0.25rem;
  background-color: #2f70b177;
}

.category-javascript-input {
  border: solid 2.5px #f0da4e;
  background-color: #fafafa;
}
input[type="radio"]:checked + .category-javascript-input {
  border: solid 2.5px #f0da4e;
  border-radius: 0.25rem;
  background-color: #f0da4e7a;
}

.category-vue-input {
  border: solid 2.5px #63b687;
  background-color: #fafafa;
}
input[type="radio"]:checked + .category-vue-input {
  border: solid 2.5px #63b687;
  border-radius: 0.25rem;
  background-color: #63b6878e;
}

.category-tooling-input {
  border: solid 2.5px #5fdaff;
  background-color: #fafafa;
}
input[type="radio"]:checked + .category-tooling-input {
  border: solid 2.5px #5fdaff;
  border-radius: 0.25rem;
  background-color: #5fdaff7c;
}

.category-sonstiges-input {
  border: solid 2.5px #ae43fd;
  background-color: #fafafa;
}
input[type="radio"]:checked + .category-sonstiges-input {
  border: solid 2.5px #ae43fd;
  border-radius: 0.25rem;
  background-color: #af43fd7c;
}

.results {
  margin-left: 20px;
  font-family: "Open Sans", sans-serif;
}
</style>
