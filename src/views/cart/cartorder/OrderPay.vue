<template>
  <div class="pay-container">
    <!-- 自定义的头部 -->
    <div class="pay-head">
      <van-image
        width="0.2rem"
        height="0.5rem"
        src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
        @click="toCart"
      />
      <span>支付方式</span>
    </div>
    <!-- 倒计时 -->
    <div class="pay-time">
      <van-count-down :time="countdown" @finish="timeOut">
        <template #default="timeData">
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <p>剩余支付时间</p>
    </div>
    <!-- 支付方式 -->
    <div class="pay-main">
      <p style="font-size: 0.34rem; padding-left: 0.3rem">选择支付方式</p>
      <div class="pay-for">
        <!--单元格配合单选组件 -->
        <!-- 尝试将图片icon的大小设置TODO -->
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell
              icon="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/anypay%403x.png"
              title="支付宝支付"
              clickable
              @click="radio = '1'"
            >
              <template #right-icon>
                <van-radio name="1" />
              </template>
            </van-cell>
            <van-cell
              icon="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/wechaat%403x.png"
              title="微信支付"
              clickable
              @click="radio = '2'"
            >
              <template #right-icon>
                <van-radio name="2" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </div>
    <!-- 底部按钮样式  -->
    <div class="pay-foot" @click="topay">立即支付</div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import toPayApi from "../../../../api/toPay";
export default {
  data() {
    return {
      countdown: 900000,
      radio: "1",
      id: "202009230000165767592",
    };
  },
  computed: {
    ...mapState("saveOrder", {
      time: "time",
    }),
  },
  // 创建一个当前时间
  created() {
    let nowtime = new Date();
    // 是否有订单生成的时间
    if (this.time !== undefined) {
      this.countdown = this.time + 900000 - nowtime.getTime();
    }
  },
  methods: {
    ...mapMutations("saveOrder", {
      changeFalse: "changeFalse",
      totalPrice: "totalPrice",
    }),
    ...mapMutations("payOrder", {
      changeNeedPay: "changeNeedPay",
    }),
    // 返回到购物车
    toCart() {
      this.changeFalse(false);
      this.totalPrice(0);
      this.$router.push({
        name: "Cart",
      });
    },
    //倒计时时间到了 触发事件
    timeOut() {
      this.changeNeedPay(true);
      this.changeFalse(false);
      this.$router.push({
        name: "Cart",
      });
    },
    // 支付宝支付方法
    topay() {
      this.axios
        .get(`http://localhost:8222/order/alipay/createNotice/` + this.id)
        .then((res) => {
          document.querySelector("body").innerHTML = res.data;
          document.forms[0].submit();
        })
        .catch((res) => {
          this.$toast.fail("请求失败");
        });
    },
  },
};
</script>
<style scoped lang ='scss'>
.pay-container {
  width: 100%;
  height: 100%;
  background-color: #ededed;
  .pay-head {
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
  .pay-time {
    width: 100%;
    height: 2rem;
    padding-top: 1.22rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .van-count-down {
    font-size: 0.8rem;
  }
  .pay-for {
    width: 100%;
    background-color: white;
  }
  .pay-foot {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #d51d1d;
    width: 100%;
    height: 1rem;
    font-size: 0.4rem;
    color: white;
    text-align: center;
    line-height: 1rem;
  }
}
</style>
