<template>
  <div class="design-home-main">
    <div class="design-bg" :style="designInfo.url">
      <span>{{ designInfo.text }}</span>
    </div>
    <div class="design-image-list">
      <img
        v-for="image in designInfo.images"
        :key="image.id"
        :src="image.src"
      />
      <div class="design-image-count">
        <div class="count-text">
          <span>共</span>
          <span style="font-size: 0.6rem">{{ designInfo.count }}</span>
          <span>件</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["designInfo"],
};
</script>
<style scoped lang='scss'>
.design-home-main {
  width: 100%;
  .design-bg {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 92%;
    height: 3rem;
    margin: 0 auto;
    background-size: 100% 100%;
    span {
      display: inline-block;
      width: 100%;
      padding: 0.04rem 0;
      color: white;
      background: rgba($color: #000000, $alpha: 0.3);
    }
  }
  .design-image-list {
    width: 92%;
    margin: 0.2rem auto;
    display: flex;
    justify-content: space-around;
    img {
      width: 1rem;
      height: 1rem;
      padding: 0.1rem;
      border: 1px solid silver;
    }
    .design-image-count {
      width: 1.2rem;
      height: 1.2rem;

      background-image: url("https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%B0%8F%E5%95%86%E5%93%815%402x.png");
      background-size: 100% 100%;
      .count-text {
        width: 100%;
        height: 100%;
        color: white;
        font-size: 0.28rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: rgba($color: #000000, $alpha: 0.3);
      }
    }
  }
}
</style>