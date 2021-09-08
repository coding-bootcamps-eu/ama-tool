<template>
  <div class="member-wrapper">
    <img
      class="member-picture"
      :src="require(`../../assets/${this.member.pictureName}.jpeg`).default"
      alt="schade"
      @mouseover="movePicture"
      @mouseleave="renderPicture"
    />
    <div class="member-name">
      <img src="@/assets/github.png" />
      <a
        class="github-link"
        target="_blank"
        rel="noopenen noopener"
        v-bind:href="member.github"
      >
        {{ member.name }}
      </a>
    </div>

    <p class="member-description">{{ member.text }}</p>
  </div>
</template>

<script>
export default {
  name: "TeamMember",

  data() {
    return {
      fireStatus: false,
      tentStatus: false,
      githubLink: "google.com",
    };
  },
  props: {
    member: {
      Type: Object,
      required: true,
    },
  },
  methods: {
    movePicture() {
      event.target.style.transform = "scale(1.3) rotate(15deg)";
    },
    renderPicture() {
      event.target.style.transform = "scale(1) rotate(-15deg)";
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
  transform: rotate(-15deg);
  transition: transform 4s;
}

.member-name {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.member-description {
  max-width: 40rem;
  text-align: left;
  margin: 0 auto;
}
.github-link {
  padding-top: 1rem;
  padding-left: 0.5rem;
  font-size: 2rem;
  text-decoration: none;
  color: var(--primary-color);
}
.github-pic {
  height: 2rem;
}
@media screen and (max-width: 669px) {
  .member-picture {
    height: 10rem;
  }
}
</style>
