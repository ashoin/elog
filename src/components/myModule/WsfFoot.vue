<template>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/home">
      <span>首页</span>
      <img slot="icon" :src="active == 0 ? home.red : home.gray" />
    </van-tabbar-item>

    <van-tabbar-item to="/category">
      <span>分类</span>
      <img slot="icon" :src="active == 1 ? category.red : category.gray" />
    </van-tabbar-item>

    <van-tabbar-item to="/shopping">
      <span>秒杀</span>
      <img slot="icon" :src="active == 2 ? seckill.red : seckill.gray" />
    </van-tabbar-item>

    <van-tabbar-item to="/cart">
      <span>购物车</span>
      <img
        slot="icon"
        :src="active == 3 ? shoppingcart.red : shoppingcart.gray"
      />
    </van-tabbar-item>

    <van-tabbar-item to="/mine">
      <span>我的</span>
      <img slot="icon" :src="active == 4 ? mine.red : mine.gray" />
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  props: ["nowActive"],
  data() {
    return {
      active: this.nowActive,
      home: {
        red:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E9%A6%96%E9%A1%B5%E7%BA%A2%402x.png",
        gray:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/homegrey%402x.png",
      },
      category: {
        red:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/classred%402x.png",
        gray:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%88%86%E7%B1%BB%E7%81%B0%402x.png",
      },
      seckill: {
        red:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/%E7%A7%92%E6%9D%80%E7%BA%A2%402x.png",
        gray:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E7%A7%92%E6%9D%80%E7%81%B0%402x.png",
      },
      shoppingcart: {
        red:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/%E8%B4%AD%E7%89%A9%E8%BD%A6%E7%BA%A2%402x.png",
        gray:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E8%B4%AD%E7%89%A9%E8%BD%A6%E7%81%B0%402x.png",
      },
      mine: {
        red:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/hongmy%402x.png",
        gray:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E6%88%91%E7%9A%84%E7%81%B0%402x.png",
      },
    };
  },
};
</script>
<style scoped>
.van-tabbar {
  border-top: 1px solid #ededed;
}
</style>
