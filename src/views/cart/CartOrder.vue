<template>
  <div class="order-container">
    <!-- 头部标题信息 -->
    <!-- 可以封装一下 -->
    <div class="order-head">
      <van-image
        width="0.2rem"
        height="0.5rem"
        src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
        @click="toCart"
      />
      <span>确认订单</span>
    </div>
    <div class="order-main">
      <!-- 顾客地址信息等 -->
      <van-contact-card
        type="edit"
        name="张三"
        tel="13000000000"
        :editable="false"
      />
      <!-- 商品订单区 -->
      <order-item v-for="o in 4" :key="o.index" />

      <!-- 配送方式和积分使用 -->

      <!-- 配送方式 -->
      <div class="send-methods">
        <span>配送方式</span>
        <span>快递 免邮></span>
      </div>
      <!-- 优惠券单元格 -->
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />
      <!-- 优惠券列表 -->
      <van-popup
        v-model="showList"
        round
        position="bottom"
        style="height: 90%; padding-top: 4px"
      >
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </div>
    <!-- 底部提交栏 -->
    <div class="order-foot">
      <div class="foot-left">
        <div class="left-price">
          <span>合计：</span>
          <span style="color: red">￥870</span>
        </div>
        <span style="font-size: 0.28rem">共 3 件商品</span>
      </div>
      <van-button class="foot-btn" type="danger" @click="toPay"
        >提交订单</van-button
      >
    </div>
  </div>
</template>
<script>
// 从后端请求来的数据
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};

import OrderItem from "../../components/shoppingcart/OrderItem";
export default {
  components: {
    OrderItem,
  },
  data() {
    return {
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
    };
  },
  methods: {
    // 返回到购物车
    toCart() {
      this.$router.push({
        name: "Cart",
        query: "",
      });
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    // 去支付
    toPay() {
      this.$router.push({
        name: "OrderPay",
        query: "",
      });
    },
  },
};
</script>
<style scoped lang='scss'>
.order-container {
  width: 100%;
}
.order-head {
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
.order-main {
  margin: 1.22rem 0;
  border-bottom: 0.2rem solid #ededed;
  border-top: 0.2rem solid #ededed;
  .send-methods {
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.3rem;
    border-top: 0.2rem solid #ededed;
    border-bottom: 1px solid #ededed;
    font-size: 0.32rem;
  }
}
.order-foot {
  height: 1.2rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  .foot-left {
    flex-grow: 1;
    padding-left: 0.4rem;
    font-size: 0.32rem;
  }
  .van-button {
    height: 1.2rem;
    width: 2.2rem;
  }
}
</style>