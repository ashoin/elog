<template>
  <div class="order-refund-container">
    <div class="refund-head">
      <!-- 标题 -->
      <div class="info-head-title">
        <van-image
          width="0.2rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
          @click="toMineAllOrder"
        />
        <span>申请退款</span>
      </div>
    </div>
    <div class="refund-main">
      <!-- 退款方式 -->
      <div class="main-text">退款方式</div>
      <select class="main-refund-select">
        <option value="仅退款">仅退款</option>
        <option value="仅退款">仅退货</option>
        <option value="仅退款">退款退货</option>
        <option value="仅退款">不退款不退货</option>
      </select>
      <!-- 退款理由 -->
      <div class="main-text">退款理由</div>
      <select class="main-refund-select">
        <option value="仅退款">发错货</option>
        <option value="仅退款">下错订单</option>
        <option value="仅退款">下重订单</option>
        <option value="仅退款">不想要了</option>
      </select>
      <!-- 退款说明 -->
      <div class="main-text">退款说明</div>
      <textarea class="text" name="" id="" cols="43" rows="10"></textarea>
      <!-- 上传凭证 -->
      <div class="main-text">上传凭证</div>
      <van-uploader :after-read="afterRead" />
    </div>
    <div class="refund-foot">
      <van-button color="red">提交申请</van-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toMineAllOrder() {
      this.$router.go(-1);
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
    },
  },
};
</script>
<style lang="scss" scoped>
.order-refund-container {
  .info-head-title {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
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
  .refund-main {
    margin-top: 1.7rem;
    padding: 0 0.4rem;
    .main-text {
      margin: 0.2rem 0;
      font-size: 0.38rem;
      font-weight: 600;
    }
    .main-refund-select {
      width: 6.6rem;
      height: 1rem;
      font-size: 0.34rem;
    }
  }
  .refund-foot {
    margin-top: 0.6rem;
    width: 100%;
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .van-button {
      width: 4rem;
    }
  }
  .text {
    border: 1px solid #313131;
  }
}
</style>