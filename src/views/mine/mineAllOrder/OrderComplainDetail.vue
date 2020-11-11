<template>
  <div class="complain-detail-container">
    <div class="complain-detail-head">
      <!-- 标题 -->
      <div class="info-head-title">
        <van-image
          width="0.2rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
          @click="toMineRefund"
        />
        <span>投诉商家</span>
      </div>
    </div>
    <div class="complain-detail-main">
      <!-- 商品展示 -->
      <div class="main-goods-info">
        <van-image
          width="1.5rem"
          height="1.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/liuyanpic%402x.png"
        ></van-image>
        <div class="goods-info">
          <span>木质设计感茶几</span>
          <span>￥ 290</span>
        </div>
      </div>
      <van-divider />
      <!-- 买家展示 -->
      <div class="main-goods-show">
        <div class="images">
          <van-image
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E4%B8%BB%E9%A2%981%402x.png"
          />
          <van-image
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E4%B8%BB%E9%A2%982-%402x.png"
          />
        </div>
        <div class="text">投诉理由：发货数量与拍下不符，商家未给出回复</div>
        <div class="text">练习电话：1888888888</div>
        <div class="text">投诉时间：2020-11-6</div>
      </div>
      <van-divider />
      <!-- 处理结果 -->
      <div class="main-goods-result">
        <van-image
          width="0.4rem"
          height="0.4rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/mo%402x.png"
        />
        <div class="result">处理成功</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toMineRefund() {
      this.$router.push({
        name: "MineRefund",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.complain-detail-container {
  background-color: #ededed;
  height: 100%;
  .info-head-title {
    height: 1.2rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.2rem;
    border-bottom: 1px solid #ededed;
    span {
      font-size: 0.4rem;
      text-align: center;
      flex-grow: 1;
    }
  }

  .complain-detail-main {
    padding: 0.2rem 0.6rem;
    background-color: white;
    .main-goods-info {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .goods-info {
        display: flex;
        flex-direction: column;
        span {
          font-size: 0.34rem;
          margin: 0.06rem 0;
        }
      }
    }
    .main-goods-show {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 4rem;
      .images {
        display: flex;
        .van-image {
          width: 2rem;
          height: 2rem;
          margin-right: 0.2rem;
        }
      }
      .text {
        font-size: 0.3rem;
      }
    }
    .main-goods-result {
      display: flex;
      .result {
        margin-left: 0.2rem;
        font-weight: 600;
      }
    }
  }
}
</style>