<template>
  <div class="logistics-container">
    <div class="logistics-head">
      <!-- 标题 -->
      <div class="info-head-title">
        <van-image
          width="0.2rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
          @click="toMineAllOrder"
        />
        <span>物流信息</span>
      </div>
    </div>
    <!-- 物流状态 快递公司 物流单号 -->
    <div class="logistics-main">
      <div class="main-logistics-info">
        <span>物流状态：运输中</span>
        <span>快递公司：圆通快递</span>
        <span>物流单号：13413214982083418</span>
      </div>
      <div class="main-logistic-steps">
        <van-steps direction="vertical" :active="0">
          <van-step>
            <h3>长沙转运公司已发出</h3>
            <p>2020-11-2 12:40</p>
          </van-step>
          <van-step>
            <h3>长沙转运公司已收入</h3>
            <p>2020-11-2 12:40</p>
          </van-step>
          <van-step>
            <h3>快递正在等待揽货</h3>
            <p>2020-11-1 10:00</p>
          </van-step>
          <van-step>
            <h3>卖家已发货</h3>
            <p>2020-11-1 09:30</p>
          </van-step>
        </van-steps>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    // 返回到上一页
    toMineAllOrder() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.logistics-container {
  background-color: #ededed;
  height: 100%;
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
  .logistics-main {
    padding-top: 1.4rem;
    .main-logistics-info {
      height: 2rem;
      padding: 0 0.4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 0.36rem;
      background-color: white;
    }
    .main-logistic-steps {
      padding-top: 0.2rem;
    }
  }
}
</style>