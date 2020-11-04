<template>
  <div class="setting-message-container">
    <div class="setting-message-head">
      <van-image
        width="0.2rem"
        height="0.5rem"
        src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
        @click="toMineSetting"
      />
      <span>关于我们</span>
    </div>
    <div class="setting-message-main">
      <textarea type="text" v-model="MessageText" placeholder="写意见" />
      <van-cell-group>
        <van-field
          v-model="value"
          label="联系方式"
          placeholder="请输入手机号/QQ号"
        />
      </van-cell-group>
    </div>
    <div class="setting-message-foot">
      <van-button>提交反馈</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      MessageText: "",
      value: "",
    };
  },
  methods: {
    toMineSetting() {
      this.$router.push({
        name: "MineSetting",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.setting-message-head {
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
.setting-message-main {
  margin-top: 1.62rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 0.3rem;
  textarea {
    height: 4rem;
    width: 90%;
  }
  .van-cell-group {
    margin-top: 0.3rem;
    width: 91%;
    border: 1px solid;
  }
}
.setting-message-foot {
  width: 100%;
  margin-top: 0.6rem;
  text-align: center;
  .van-button {
    background-color: #d31b19;
    color: white;
    font-size: 0.34rem;
    height: 1rem;
    width: 60%;
    border-radius: 0.1rem;
  }
}
</style>