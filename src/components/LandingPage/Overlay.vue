<template>
  <div class="overlay" v-show="showText">
    <div class="textBananen" @click="showOverlay">ESST MEHR BANANEN !!🍌🍌</div>
  </div>
  <div>
    <button class="button-element" @click="showOverlay">
      Dir Raucht der Kopf?
    </button>
  </div>
</template>
<script>
export default {
  name: "Overlay",
  data() {
    return {
      showText: false,
    };
  },
  methods: {
    showOverlay() {
      return (this.showText = !this.showText);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0.5, 0.5, 0.5, 0.5);
  z-index: 2;
  cursor: pointer;
}

.textBananen {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 45px;
  color: #6a1cc3;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-60%, -60%);
  line-height: 2.5rem;
  cursor: pointer;
}

.button-element {
  height: 35px;
  text-align: center;
  width: 150px;
  cursor: pointer;
  margin-top: 50px;
  border: 0.5px solid var(--primary-color);
  border-radius: 0.25rem;
  background-color: #fafafa;
  margin-top: 30px;
}
</style>
