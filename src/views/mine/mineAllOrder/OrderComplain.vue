<template>
  <div class="order-complain-container">
    <div class="complain-head">
      <!-- 标题 -->
      <div class="info-head-title">
        <van-image
          width="0.2rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
          @click="toOrderEvaluateDetail"
        />
        <span>投诉商家</span>
      </div>
    </div>
    <div class="complain-main">
      <div class="main-text">联系电话</div>
      <input type="text" v-model="o" />
      <div class="main-text">投诉理由</div>
      <textarea class="text" name="" id="" cols="42" rows="8"></textarea>
      <div class="main-text">上传凭证</div>
      <van-uploader :after-read="afterRead" />
    </div>
    <div class="complain-foot">
      <van-button color="red">提交申请</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      o: "",
    };
  },
  methods: {
    toOrderEvaluateDetail() {
      this.$router.push({
        name: "OrderEvaluateDetail",
      });
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      //   console.log(file);
    },
  },
};
</script>
<style lang="scss" scoped>
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
.complain-main {
  padding: 1.4rem 0 0 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .main-text {
    margin: 0.2rem;
    font-size: 0.36rem;
    font-weight: 600;
  }
  input {
    width: 6.5rem;
    height: 0.8rem;
    border: 1px solid #313131;
    text-indent: 0.1rem;
  }
}
.complain-foot {
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .van-button {
    width: 4rem;
    height: 1rem;
    font-size: 0.38rem;
  }
}
.text {
  border: 1px solid #313131;
  text-indent: 0.1rem;
}
</style>