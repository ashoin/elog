<template>
  <div class="pay-container">
    <!-- 自定义的头部 -->
    <div class="pay-head">
      <van-image
        width="0.2rem"
        height="0.5rem"
        src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
        @click="toCartOrder"
      />
      <span>支付方式</span>
    </div>
    <!-- 倒计时 -->
    <div class="pay-time">
      <van-count-down :time="time">
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
    <div class="pay-foot">立即支付</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: 15 * 60 * 1000,
      radio: 1,
    };
  },
  methods: {
    toCartOrder() {
      this.$router.push({
        name: "CartOrder",
        query: "",
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
