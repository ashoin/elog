<template>
  <div class="grid-container">
    <!-- 宫格组件加上自定义图片 -->
    <van-grid>
      <van-grid-item v-for="image in images" :key="image.id">
        <van-image :src="image.url" width="40" height="40"></van-image>
        <span style="margin-top: 0.2rem">{{ image.text }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        {
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%AE%9A%E5%88%B6%402x.png",
          id: 1,
          text: "全屋定制",
        },
        {
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E6%99%BA%E8%83%BD%E5%AE%B6%E5%B1%85%402x.png",
          text: "智能家居",
          id: 2,
        },
        {
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E9%A2%84%E7%BA%A6%E6%90%AD%E9%85%8D%402x.png",
          text: "预约搭配",
          id: 3,
        },
        {
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E4%BD%93%E9%AA%8C%E9%A6%86%402x.png",
          text: "体验馆",
          id: 4,
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.grid-container {
  width: 95%;
  margin: 0.2rem;
  background-color: white;
}
</style>