<template>
  <LandingPage />
  <Overlay />
</template>

<script>
import LandingPage from "@/components/LandingPage/LandingPage.vue";
import Overlay from "@/components/LandingPage/Overlay.vue";

export default {
  name: "Home",
  components: {
    LandingPage,
    Overlay,
  },
};
</script>
