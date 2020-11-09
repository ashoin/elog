<template>
  <div class="all-order-container">
    <div class="order-head">
      <!-- 头部标签 -->
      <div class="order-head-title">
        <van-image
          width="0.2rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
          @click="toMine"
        />
        <span style="font-size: 0.38rem">我的订单</span>
        <van-image
          width="0.5rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E6%90%9C%E7%B4%A2%402x.png"
        />
      </div>
    </div>
    <div class="order-main">
      <!-- 标题栏 -->
      <van-tabs v-model="active" swipeable line-width="1.2rem">
        <!-- 全部订单 -->
        <van-tab title="全部订单" name="0">
          <mine-all-order-detail />
        </van-tab>
        <!-- 待付款 -->
        <van-tab title="待付款" name="1">
          <mine-all-order-pay />
        </van-tab>
        <!-- 待发货 -->
        <van-tab title="待发货" name="2">
          <mine-all-order-send />
        </van-tab>
        <!-- 配送中 -->
        <van-tab title="配送中" name="3">
          <mine-all-order-delivery />
        </van-tab>
        <!-- 待评价 -->
        <van-tab title="待评价" name="4">
          <mine-all-order-evaluate />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import MineAllOrderDetail from "@/components/mine/mineAllOrder/MineAllOrderDetail";
import MineAllOrderPay from "@/components/mine/mineAllOrder/MineAllOrderPay";
import MineAllOrderSend from "@/components/mine/mineAllOrder/MineAllOrderSend";
import MineAllOrderDelivery from "@/components/mine/mineAllOrder/MineAllOrderDelivery";
import MineAllOrderEvaluate from "@/components/mine/mineAllOrder/MineAllOrderEvaluate";
export default {
  components: {
    MineAllOrderDetail,
    MineAllOrderPay,
    MineAllOrderSend,
    MineAllOrderDelivery,
    MineAllOrderEvaluate,
  },
  data() {
    return {
      hasOrder: false,
      active: 0,
    };
  },
  created() {
    this.active = this.$route.query.tabIndex;
  },
  methods: {
    toMine() {
      this.$router.push({
        name: "Mine",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.all-order-container {
  background-color: #ededed;
  width: 100%;
  height: 100%;
}
.order-head-title {
  position: fixed;
  top: 0;
  left: 0;
  width: 92%;
  z-index: 2;
  background-color: white;
  height: 1rem;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid silver;
}
.order-main {
  padding-top: 1rem;
  /deep/.van-tab {
    font-size: 0.3rem;
  }
  // /deep/.van-tabs__line {
  //   width: 1rem;
  //   height: 0.06rem;
  // }
  /deep/.van-tabs__wrap {
    border-bottom: 1px solid #ededed;
  }
}
</style>