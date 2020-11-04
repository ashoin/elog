<template>
  <div class="design-home-container">
    <!-- 头部标题 -->
    <head-info :title="title"></head-info>
    <!-- 主体内容部分 -->
    <!-- 循环组件 -->
    <design-home-module
      :design-info="designInfo"
      v-for="designInfo in allDesignInfo"
      :key="designInfo.id"
    ></design-home-module>
  </div>
</template>
<script>
import HeadInfo from "../myModule/HeadInfo";
import DesignHomeModule from "../myModule/DesignHomeModule";
export default {
  components: {
    HeadInfo,
    DesignHomeModule,
  },
  data() {
    return {
      title: {
        text: "全屋制定",
        src:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%95%86%E5%93%81%E5%88%86%E7%B1%BB%402x.png",
      },
      allDesignInfo: [
        {
          id: 10001,
          count: 6,
          text: "北欧风格小户型全屋设计",
          url:
            "background-image: url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%AE%9A%E5%88%B61%402x.png')",
          images: [
            {
              id: 10001,
              src:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%B0%8F%E5%95%86%E5%93%811%402x.png",
            },
            {
              id: 10002,
              src:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%B0%8F%E5%95%86%E5%93%812%402x.png",
            },
            {
              id: 10003,
              src:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%B0%8F%E5%95%86%E5%93%813%402x.png",
            },
            {
              id: 10004,
              src:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%B0%8F%E5%95%86%E5%93%814%402x.png",
            },
          ],
        },
        {
          id: 10002,
          count: 8,
          text: "北欧风格小户型全屋设计",
          url:
            "background-image: url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B2%402x.png')",
          images: [
            {
              id: 10001,
              src:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%B0%8F%E5%95%86%E5%93%811%402x.png",
            },
            {
              id: 10002,
              src:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%B0%8F%E5%95%86%E5%93%812%402x.png",
            },
            {
              id: 10003,
              src:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%B0%8F%E5%95%86%E5%93%813%402x.png",
            },
            {
              id: 10004,
              src:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%B0%8F%E5%95%86%E5%93%814%402x.png",
            },
          ],
        },
        {
          id: 10003,
          count: 10,
          text: "北欧风格小户型全屋设计",
          url:
            "background-image: url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B3%402x.png')",
          images: [
            {
              id: 10001,
              src:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%B0%8F%E5%95%86%E5%93%811%402x.png",
            },
            {
              id: 10002,
              src:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%B0%8F%E5%95%86%E5%93%812%402x.png",
            },
            {
              id: 10003,
              src:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%B0%8F%E5%95%86%E5%93%813%402x.png",
            },
            {
              id: 10004,
              src:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%85%A8%E5%B1%8B%E5%B0%8F%E5%95%86%E5%93%814%402x.png",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped lang='scss'>
.design-home-container {
  width: 95%;
  margin: 0.52rem 0.2rem 0 0.2rem;
  padding-bottom: 0.2rem;
  background: white;
}
</style>