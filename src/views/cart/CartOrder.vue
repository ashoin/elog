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
        :name="userName"
        tel="18888888888"
        @click="changeAddress"
      />
      <!-- 商品订单区 -->
      <order-item ref="child" />

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
          <span style="color: red">￥{{ totalPrice }}</span>
        </div>
        <span style="font-size: 0.28rem">共 {{ totalCount }} 件商品</span>
      </div>
      <van-button class="foot-btn" type="danger" @click="toPay">
        提交订单
      </van-button>
    </div>
  </div>
</template>
<script>
// 从后端请求来的数据
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150000,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1914592000,
  valueDesc: "1500",
  unitDesc: "元",
};
import OrderItem from "../../components/shoppingcart/OrderItem";
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  components: {
    OrderItem,
  },
  data() {
    return {
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon, coupon], //优惠券数组
      disabledCoupons: [coupon], //不可用的券
      totalPrice: 0,
      totalCount: 0,
      userName: "铁锤妹妹",
    };
  },

  computed: {
    //订单数据
    ...mapState("saveOrder", {
      courseList: "courseList",
    }),
    // ...mapState("newOrder", {
    //   addOrder: "addOrder",
    // }),
  },
  created() {
    //判断改变地址的数据
    if (this.$route.query.name != undefined) {
      this.userName = this.$route.query.name;
    }
    // if (this.courseList == undefined) {
    //   this.saveCourseList(this.addOrder);
    // }
  },

  mounted() {
    //在数据挂载完成后拿到总价格和数量
    this.totalPrice = this.$refs.child.totalPrice;
    this.totalCount = this.$refs.child.count;
  },
  methods: {
    ...mapMutations("saveOrder", {
      saveTime: "saveTime", //生成时间
      saveCourseList: "saveCourseList",
    }),
    ...mapMutations("payOrder", {
      changeNeedPay: "changeNeedPay", //改变待支付的状态
      changeNeedRoute: "changeNeedRoute", //改变地址页路由跳转的方向
    }),

    // 返回到购物车
    toCart() {
      this.$router.push({
        name: "Cart",
      });
    },
    // 点击使用优惠券的方程
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      if (index != -1) {
        this.totalPrice = this.$refs.child.totalPrice;
        this.totalPrice = this.totalPrice - this.coupons[index].valueDesc;
      } else {
        this.totalPrice = this.$refs.child.totalPrice;
      }
    },
    // 兑换点击事件
    onExchange(code) {
      this.coupons.push(coupon);
    },
    // 去支付
    toPay() {
      let nowtime = new Date().getTime();
      this.saveTime(nowtime);
      this.changeNeedPay(false);
      this.$router.push({
        name: "OrderPay",
      });
    },
    // 改变地址方法
    changeAddress() {
      this.changeNeedRoute(1);
      this.$router.push({
        name: "UserAddress",
        query: {
          order: true,
        },
      });
    },
  },
};
</script>
<style scoped lang='scss'>
.order-container {
  width: 100%;
  height: 100%;
  background: #ededed;
  // 头部样式
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
  // 主体样式
  .order-main {
    padding: 1.22rem 0;
    border-top: 0.2rem solid #ededed;
    border-bottom: 0.2rem solid #ededed;
    .send-methods {
      height: 0.6rem;
      background-color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.3rem;
      border-top: 0.2rem solid #ededed;
      border-bottom: 1px solid #ededed;
      font-size: 0.32rem;
    }
  }
  // 底部样式
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
}
</style>