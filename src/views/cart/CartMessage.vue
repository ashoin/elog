<template>
  <div class="message-container">
    <!-- 头部标题 -->
    <div class="message-head">
      <van-image
        width="0.2rem"
        height="0.5rem"
        src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
        @click="toCart"
      />
      <span>留言</span>
      <div @click="changeMessage">提交</div>
    </div>
    <!-- 主体部分 -->
    <div class="message-main">
      <!-- 商品简单信息 -->
      <div class="main-goods-info">
        <van-image
          width="2rem"
          height="2rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/liuyanpic%402x.png"
        ></van-image>
        <div class="goods-info">
          <span>木质设计感茶几</span>
          <span>￥ 290</span>
        </div>
      </div>
      <!-- 留言区 -->
      <textarea
        v-model="message"
        placeholder="输入留言"
        cols="43"
        rows="8"
      ></textarea>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      submitMessage: "",
      message: "",
    };
  },
  created() {
    this.message = this.$route.query.message;
  },
  methods: {
    // 返回到购物车
    toCart() {
      this.$router.push({
        name: "Cart",
        query: {
          userMessage: this.submitMessage,
        },
      });
    },
    //提交按钮
    changeMessage() {
      this.$dialog
        .confirm({
          title: "确认修改",
          message: this.message,
        })
        .then(() => {
          this.submitMessage = this.message;
          this.$toast.success("修改成功");
        })
        .catch(() => {
          this.message = "";
        });
    },
  },
};
</script>
<style scoped lang="scss">
.message-container {
  width: 100%;
  height: 100%;
}
.message-head {
  height: 1.2rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  border-bottom: 1px solid #ededed;
  span {
    font-size: 0.4rem;
    text-align: center;
  }
}
.message-main {
  padding: 0 0.6rem;
  .main-goods-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0.5rem 0;
    .goods-info {
      display: flex;
      flex-direction: column;
      span {
        font-size: 0.34rem;
        margin: 0.06rem 0;
      }
    }
  }
}
</style>