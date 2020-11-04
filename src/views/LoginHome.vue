<template>
  <div class="container">
    <!-- 头部图片展示 -->
    <div class="head" @click="toLogin">
      <van-image
        round
        width="3rem"
        height="3rem"
        src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/piccircle%403x.png"
      />
      <h2>欢迎登录</h2>
    </div>
    <!-- 底部图片展示 -->
    <div class="foot">
      <van-image
        width="3rem"
        height="1.5rem"
        src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/wellogo%402x.png"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}
</style>