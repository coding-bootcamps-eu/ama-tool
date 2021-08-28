<template>
  <div class="member-wrapper">
    <img
      class="member-picture"
      :src="require(`../../assets/${this.member.pictureName}.jpeg`).default"
      alt="schade"
      @mouseover="movePicture"
      @mouseleave="renderPicture"
    />
    <h2 class="member-name">{{ member.name }}</h2>
    <p class="member-description">{{ member.text }}</p>
  </div>
</template>

<script>
export default {
  name: "TeamMember",

  props: {
    member: {
      Type: Object,
      required: true,
    },
  },
  methods: {
    movePicture() {
      event.target.style.transform = "scale(1.3) rotate(360deg)";
    },
    renderPicture() {
      event.target.style.transform = "scale(1)";
    },
  },
};
</script>

<style lang="scss" scoped>
.member-wrapper {
  margin-bottom: 3rem;
}
.member-picture {
  border-radius: 50%;
  border: 4px solid var(--primary-color);
  height: 12.5rem;
  width: auto;
  transition: transform 4s;
}

.member-name {
  margin-top: 2rem;
  color: var(--primary-color);
}
.member-description {
  max-width: 40rem;
  text-align: left;
  margin: 0 auto;
}

@media screen and (max-width: 600px) {
  .member-picture {
    height: 10rem;
  }
}
</style>
