<template>
  <div class="detial-head-container">
    <van-swipe :autoplay="3000" indicator-color="#D20A0A">
      <van-swipe-item v-for="(image, index) in detailImages" :key="index">
        <van-image height="6rem" width="100%" :src="image" />
      </van-swipe-item>
    </van-swipe>
    <span style="font-size: 0.34rem; margin: 0.04rem 0.26rem">
      现代风格实木圆角餐桌
    </span>
    <div class="price-sale">
      <span style="font-size: 0.48rem; color: red">￥ 6250</span>
      <span>已售 {{ saleCount }}</span>
    </div>
    <div class="advantage">
      <div v-for="item in advantageList" :key="item.id">
        <van-image width="0.25rem" :src="item.src" />
        <span style="font-size: 0.2rem; color: #b3b3b3; margin-left: 0.08rem">
          {{ item.text }}
        </span>
      </div>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      saleCount: 45,
      detailImages: [
        "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/pic%402x.png",
        "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/picp%402x.png",
        "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/pic%402x.png",
      ],
      advantageList: [
        {
          id: 10011,
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/service%402x.png",
          text: "品牌制造商直销",
        },
        {
          id: 10012,
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/service%402x.png",
          text: "品牌制造商直销",
        },
        {
          id: 10013,
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/service%402x.png",
          text: "品牌制造商直销",
        },
      ],
    };
  },
};
</script>
<style lang='scss' scoped>
.detial-head-container {
  background-color: white;
}
.price-sale {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 0.2rem;
}
.advantage {
  height: 0.64rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
}
</style>