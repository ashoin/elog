<template>
  <div class="order-evaluate-container">
    <div class="evaluate-head">
      <!-- 头部标签 -->
      <van-image
        width="0.2rem"
        height="0.5rem"
        src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
        @click="toMineAllOrder"
      />
      <span style="font-size: 0.38rem">评价商品</span>
      <span style="font-size: 0.36rem">发表</span>
    </div>
    <div class="evaluate-main">
      <!-- 商品展示出来 -->
      <div class="all-goods">
        <!-- 信息展示区 -->
        <div class="goods-card">
          <van-image
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/liuyanpic%402x.png"
          />
          <div class="goods-info">
            <span style="font-size: 0.32rem">木质设计感茶几</span>
            <span style="font-size: 0.26rem">400*400*560；黑胡桃木</span>
            <span>胡桃木色</span>
            <div class="goods-price">
              <span style="font-size: 0.38rem">￥290</span>
              <span>x 1</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 为商品打分 -->
      <div class="goods-rate">
        <span style="font-size: 0.36rem; margin-right: 0.4rem">为商品打分</span>
        <van-rate v-model="star" />
        <!-- 输入评价 -->
        <textarea
          style="margin: 0.2rem 0"
          name=""
          id=""
          cols="44"
          rows="10"
          placeholder="输入评价"
        />
        <!-- 拍照 -->
        <van-uploader v-model="fileList" multiple />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      star: 4,
      fileList: [
        {
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/liuyanpic%402x.png",
        },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: "https://cloud-image", isImage: true },
      ],
    };
  },
  methods: {
    toMineAllOrder() {
      this.$router.push({
        name: "MineAllOrder",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.evaluate-head {
  position: fixed;
  top: 0;
  left: 0;
  width: 93%;
  z-index: 2;
  background-color: white;
  height: 1rem;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid silver;
}
.evaluate-main {
  padding-top: 1.22rem;
  .all-goods {
    .goods-card {
      width: 100%;
      display: flex;
      justify-content: space-around;
      padding: 0.2rem 0;
      border-bottom: 1px solid #ededed;
      .goods-info {
        width: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .goods-price {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        span {
          margin: 0.04rem 0;
        }
      }
    }
    /deep/.van-field__label {
      width: 0.65rem;
    }
  }
  .goods-rate {
    padding: 0.2rem 0.6rem;
  }
}
</style>