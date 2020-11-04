<template>
  <div
    style="display: flex; align-items: center; justify-content: space-between"
  >
    <div class="theme-title" style="display: flex; align-items: center">
      <img
        style="width: 0.4rem; height: 0.4rem; margin: 0 0.2rem"
        class="head-icon"
        :src="title.src"
      />
      <p style="font-size: 0.36rem">{{ title.text }}</p>
    </div>
    <div style="color: silver; padding-right: 0.2rem">全部></div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
