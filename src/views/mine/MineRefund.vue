<template>
  <div class="refund-container">
    <div class="refund-head">
      <div class="info-head-title">
        <van-image
          width="0.2rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
          @click="toMine"
        />
        <span>退款维权</span>
      </div>
    </div>
    <div class="refund-main">
      <van-tabs>
        <!-- 退款、售后 -->
        <van-tab title="退款/售后">
          <mine-refund-sale />
        </van-tab>
        <!-- 投诉管理 -->
        <van-tab title="投诉管理">
          <mine-refund-complain />
        </van-tab>
        <!-- 咨询回复 -->
        <van-tab title="咨询回复">
          <mine-refund-res />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import MineRefundSale from "@/components/mine/MineRefundSale";
import MineRefundComplain from "@/components/mine/MineRefundComplain";
import MineRefundRes from "@/components/mine/MineRefundRes";
export default {
  components: {
    MineRefundSale,
    MineRefundComplain,
    MineRefundRes,
  },
  data() {
    return {};
  },
  methods: {
    // 返回到mine
    toMine() {
      this.$router.push({
        name: "Mine",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.refund-container {
  height: 100%;
  background-color: #ededed;
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
    padding-top: 1.22rem;
    /deep/.van-tab {
      font-size: 0.36rem;
    }
    /deep/.van-tabs__line {
      width: 1.6rem;
      height: 0.08rem;
    }
    /deep/.van-tabs__wrap {
      border-bottom: 1px solid #ededed;
    }
  }
}
</style>