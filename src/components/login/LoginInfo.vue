<template>
  <div class="login-container">
    <!-- 主体部分 -->
    <div class="login-main">
      <!-- 登录相关的信息 -->
      <van-cell-group>
        <van-field
          class="input"
          v-model="loginForm.mobile"
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
          v-model="loginForm.password"
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
        @click="handleLogin"
      >
        登录
      </van-button>
      <!-- 忘记密码 -->
      <van-row type="flex" justify="center" style="margin: 0.4rem 0 0.4rem 0">
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
          width="1rem"
          height="1rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/wechat%402x.png"
        />
        <van-image
          width="1rem"
          height="1rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/tencent%402x.png"
        />
        <van-image
          width="1rem"
          height="1rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/sina%402x.png"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      loginForm: {
        password: "",
        mobile: "",
      },
    };
  },
  methods: {
    toForgetPassword() {
      this.$router.push("/forgetpassword");
    },
    toHome() {
      this.$router.push("/home");
    },
    ...mapMutations(["changeLogin"]),
    handleLogin() {
      let _this = this;
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        alert("账号或密码不能为空");
      } else {
        this.axios({
          method: "post",
          url: "http://localhost:8006/ucenterservice/ucentermember/login",
          data: _this.loginForm,
        })
          .then((res) => {
            // console.log(res.data);
            _this.userToken = "Bearer " + res.data.data.token;
            // 将用户token保存到vuex中
            _this.changeLogin({ Authorization: _this.userToken });
            console.log(_this.userToken);
            _this.$router.push("/home");
            console.log("登陆成功");
          })
          .catch((error) => {
            alert("账号或密码错误");
            console.log(error);
          });
      }
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
  height: 1rem;
  width: 100%;
  font-size: 0.4rem;
  margin: 0.4rem 0;
}
.images {
  margin: 0.2rem 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>