<template>
  <div class="main-detail-container">
    <!-- for循环图片 -->
    <van-image
      :src="image"
      width="100%"
      height="7rem"
      v-for="image in images"
      :key="image.index"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/pic%402x.png",
        "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/pic%402x.png",
        "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/pic%402x.png",
        "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/pic%402x.png",
      ],
    };
  },
};
</script>
<style scoped>
.main-detail-container {
  background: white;
  margin-top: 1px;
  padding: 0.4rem;
}
</style>