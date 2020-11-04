<template>
  <div class="new-goods-container">
    <!-- 小模块的顶部标题 -->
    <div class="new-goods-head">
      <img
        style="width: 0.4rem; height: 0.4rem; margin: 0 0.2rem"
        class="head-icon"
        src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E6%96%B0%E5%93%81%402x.png"
      />
      <p style="font-size: 0.36rem">新品推荐</p>
    </div>
    <!-- 图片背景+文本+图片 -->
    <div class="new-goods-main">
      <div class="goods-bg" v-for="goods in goodsList" :key="goods.id">
        <div class="goods-intrduce">
          <span style="font-size: 0.34rem">{{ goods.text1 }}</span>
          <span style="font-size: 0.28rem">{{ goods.text2 }}</span>
          <span style="font-size: 0.28rem">{{ goods.text3 }}</span>
        </div>
        <van-image :src="goods.url" width="0.6rem" height="1rem" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsList: [
        {
          text1: "推荐理由",
          text2: "一物两用",
          text3: "小户型必备",
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E6%96%B0%E5%93%811%E3%80%814%402x.png",
          id: 1001,
        },
        {
          text1: "推荐理由",
          text2: "一物两用",
          text3: "小户型必备",
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E6%96%B0%E5%93%812%402x.png",
          id: 1002,
        },
        {
          text1: "推荐理由",
          text2: "一物两用",
          text3: "小户型必备",
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E6%96%B0%E5%93%813%402x.png",
          id: 1003,
        },
        {
          text1: "推荐理由",
          text2: "一物两用",
          text3: "小户型必备",
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E6%96%B0%E5%93%811%E3%80%814%402x.png",
          id: 1004,
        },
      ],
    };
  },
};
</script>
<style scoped lang='scss'>
.new-goods-container {
  width: 95%;
  margin: 0.2rem;
  background: white;
}
.new-goods-head {
  display: flex;
  align-items: center;
}
.new-goods-main {
  width: 100%;
  height: 4.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .goods-bg {
    width: 45%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: url("https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E6%96%B0%E5%93%81%E5%BA%95%E7%BA%B9%402x.png");
    background-size: 100% 100%;
    .goods-intrduce {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>