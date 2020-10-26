<template>
  <div class="login-container">
    <!-- 主体部分 -->
    <div class="login-main">
      <!-- 登录相关的信息 -->
      <van-cell-group>
        <van-field
          class="input"
          v-model="mobile"
          left-icon="phone-o"
          center
          clearable
          border
          type="number"
          size="large"
          autosize=""
          placeholder="请输入手机号码"
        />
        <van-field
          class="input"
          v-model="password"
          center
          clearable
          type="password"
          left-icon="closed-eye"
          placeholder="请输入密码"
        >
        </van-field>
      </van-cell-group>
      <!-- 登录按键 -->
      <van-button
        color="#D41C1C"
        size="large"
        style="width: 70%"
        @click="toHome"
      >
        登录
      </van-button>
      <!-- 忘记密码 -->
      <van-row type="flex" justify="center" style="margin: 20px 0 40px 0">
        <van-col @click="toForgetPassword">忘记密码</van-col>
      </van-row>
    </div>
    <!-- 底部其它登录方式 -->
    <div class="login-foot">
      <van-row>
        <van-divider> 其它方式登录 </van-divider>
      </van-row>
      <div class="images">
        <van-image
          width="3rem"
          height="3rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/wechat%402x.png"
        />
        <van-image
          width="3rem"
          height="3rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/tencent%402x.png"
        />
        <van-image
          width="3rem"
          height="3rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/sina%402x.png"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      mobile: "",
    };
  },
  methods: {
    toForgetPassword() {
      this.$router.push("/forgetpassword");
    },
    toHome() {
      this.$router.push("/home");
    },
  },
};
</script>
<style scoped>
.login-container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
.input {
  height: 50px;
  width: 100%;
  font-size: 20px;
  margin: 20px 0;
}
.images {
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>