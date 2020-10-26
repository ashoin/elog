<template>
  <div class="container">
    <!-- 头部图片展示 -->
    <div class="head">
      <van-image
        width="10rem"
        height="2rem"
        src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/loglogo%402x.png"
      />
    </div>
    <!-- 中间主题部分 -->
    <div class="main">
      <van-tabs line-width="75px">
        <van-tab title="登录" title-style="font-size:20px">
          <!-- 登录展示组件 -->
          <login-info></login-info>
        </van-tab>
        <van-tab title="注册" title-style="font-size:20px">
          <!-- 注册展示组件 -->
          <register></register>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import LoginInfo from "../login/LoginInfo";
import Register from "../login/Register";
export default {
  components: {
    LoginInfo,
    Register,
  },
  data() {
    return {};
  },
  methods: {
    toHome() {},
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.head {
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  width: 100%;
  height: 75%;
}
</style>