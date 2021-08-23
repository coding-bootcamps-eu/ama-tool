<template>
  <div class="member-wrapper">
    <img
      class="member-picture"
      :src="require(`../../assets/${this.member.name}.jpeg`).default"
      alt="schade"
    />
    <h2 class="member-name">{{ member.name }}</h2>
    <p class="member-description">{{ member.text }}</p>
  </div>
</template>

<script>
export default {
  name: "TeamMember",
  data() {
    return {
      bild: require("../../assets/deniz.jpeg"),
      pictest: this.member.name,
    };
  },

  props: {
    member: {
      Type: Object,
      required: true,
    },
  },
  methods: {
    getImageURL() {
      //return require("../../assets/deniz" + ".jpeg");
    },
  },
};
</script>

<style lang="scss" scoped>
.member-picture {
  border-radius: 50%;
  border: 4px solid var(--primary-color);
  transform: scale(0.5);
}

.member-name {
  margin: 0;
}
.member-description {
  max-width: 40rem;
  text-align: left;
  margin: 0 auto;
}
</style>
