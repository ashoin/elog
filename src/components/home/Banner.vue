<template>
  <div class="banner-container">
    <van-swipe :autoplay="3000" indicator-color="#D20A0A" height="180">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <van-image :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/banner/banner1%402x.png",
        "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/banner/banner2%402x.png",
        "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/banner/banner3%402x.png",
      ],
    };
  },
};
</script>
<style scoped>
.banner-container {
  width: 95%;
  margin: 10px auto;
}
</style>