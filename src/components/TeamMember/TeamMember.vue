<template>
  <div class="member-wrapper">
    <img
      class="member-picture"
      :src="require(`../../assets/${this.member.pictureName}.jpeg`).default"
      alt="schade"
      @mouseover="movePicture"
      @mouseleave="renderPicture"
    />
    <h2 @click="showOverlay" class="member-name">
      {{ member.name }}
    </h2>
    <p class="member-description">{{ member.text }}</p>
    <overlay class="overlay" v-show="fireStatus">
      <img @click="showOverlay" src="@/assets/campfire.gif" />
      <a class="github-link" v-bind:href="githubLink"
        >{{ member.name }}s Github</a
      >
    </overlay>
    <overlay @click="showOverlay" v-show="tentStatus">
      <div>
        <img src="@/assets/tent.webp" />
        <a class="github-link" v-bind:href="githubLink"
          >{{ member.name }}s Github</a
        >
      </div>
    </overlay>
  </div>
</template>

<script>
import Overlay from "@/components/LandingPage/Overlay.vue";

export default {
  name: "TeamMember",
  components: {
    Overlay,
  },
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
    showOverlay() {
      if (this.member.name === "INGA") {
        this.fireStatus = !this.fireStatus;
        this.githubLink = "https://github.com/EeveeInGaa";
      }
      if (this.member.name === "DENIZ") {
        this.tentStatus = !this.tentStatus;
        this.githubLink = "https://github.com/Ddeniz38";
      }
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
  margin-top: 2rem;
  color: var(--primary-color);
}
.member-description {
  max-width: 40rem;
  text-align: left;
  margin: 0 auto;
}
.github-link {
  padding-top: 1rem;
  text-decoration: none;
}
@media screen and (max-width: 600px) {
  .member-picture {
    height: 10rem;
  }
}
</style>
