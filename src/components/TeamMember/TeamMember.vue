<template>
  <img class="member-picture" src="@/assets/deniz.jpeg" />
</template>

<script>
export default {
  name: "TeamMember",
};
</script>

<style lang="scss" scoped>
.member-picture {
  border-radius: 50%;
  border: 4px solid var(--primary-color);
  transform: scale(0.5);
}
</style>
