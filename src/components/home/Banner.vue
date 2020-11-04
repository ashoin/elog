<template>
  <div class="banner-container">
    <van-swipe :autoplay="3000" indicator-color="#D20A0A">
      <van-swipe-item
        v-for="(image, index) in images"
        :key="index"
        @click="toShoppingDetail"
      >
        <van-image height="3.8rem" :src="image" />
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
        "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/banner/banner3%402x.png",
        "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/banner/banner1%402x.png",
        "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/banner/banner3%402x.png",
        "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/banner/banner1%402x.png",
      ],
    };
  },
  methods: {
    toShoppingDetail() {
      this.$router.push({
        name: "ShoppingDetail",
      });
    },
  },
};
</script>
<style scoped>
.banner-container {
  width: 95%;
  margin: 0.2rem;
}
</style>