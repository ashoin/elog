<template>
  <div class="category-style-container">
    <div
      class="category-style-bg"
      :style="item.style"
      v-for="item in backgroundImages"
      :key="item.id"
    ></div>
  </div>
</template>
<script>
export default {
  props: ["backgroundImages"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.category-style-container {
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0.1rem auto;
}
.category-style-bg {
  width: 100%;
  height: 1.6rem;
  margin: 0.1rem 0;
  background-size: 100% 100%;
}
</style>