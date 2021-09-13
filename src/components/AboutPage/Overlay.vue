<template>
  <div class="overlay">
    <div class="textBananen"><slot></slot></div>
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
};
// ESST MEHR BANANEN !!🍌🍌
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
  background-color: var(--background-color);
  opacity: 0.9;
  z-index: 2;
  cursor: auto;
}

.textBananen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
</style>
