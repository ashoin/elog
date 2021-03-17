<template>
  <div class="login-container">
    <!-- 主体部分 -->
    <div class="login-main">
      <!-- 登录相关的信息 -->
      <!-- 手机号 -->
      <van-field
        class="input"
        v-model="user.phone"
        left-icon="phone-o"
        center
        clearable
        border
        type="number"
        size="large"
        placeholder="请输入手机号码"
        maxlength="11"
        @blur="checkPhone"
      />
      <!-- 密码 -->
      <van-field
        class="input"
        v-model="user.password"
        center
        clearable
        type="password"
        left-icon="closed-eye"
        maxlength="16"
        placeholder="请输入密码"
      >
      </van-field>

      <!-- 登录按键 -->
      <van-button
        color="#D41C1C"
        size="large"
        style="width: 70%"
        @click="submitLogin"
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
      <div class="images" @click="otherLogin">
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
import cookie from "js-cookie";
import loginApi from "../../../api/login";
import throttleApi from "../../utils/throttle";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      user: {
        password: "",
        phone: null,
      },
    };
  },
  methods: {
    ...mapMutations("token", { changeLogin: "changeLogin" }),
    ...mapMutations("user", { changeUserInfo: "changeUserInfo" }),
    toForgetPassword() {
      this.$router.push("/forgetpassword");
    },
    toHome() {
      this.$router.replace("/home");
    },
    // 登录的方法
    submitLogin() {
      if (this.user.phone == null) {
        this.$toast.warning("手机号码或密码不能为空");
      } else {
        loginApi
          .submitLogin(this.user)
          .then((response) => {
            if (response.data.success) {
              this.userToken = response.data.data.token;
              // 将用户token保存到vuex中
              this.changeLogin({ Authorization: this.userToken });
              //把token存在cookie中、也可以放在localStorage中
              cookie.set("huiju_token", response.data.data.token, {
                domain: "localhost",
              });
              this.axios
                .get(
                  "http://172.18.1.101:8222/usermanage/user/auth/getLoginInfo",
                  {
                    headers: {
                      token: this.userToken,
                    },
                  }
                )
                .then((res) => {
                  this.changeUserInfo(res.data);
                  // 将用户信息记录cookie
                  cookie.set("huiju_ucenter", this.loginInfo, {
                    domain: "localhost",
                  });
                });
              //跳转页面
              this.$router.push({
                name: "Home",
              });
            } else {
              this.$toast.fail("手机或者密码错误");
            }
          })
          .catch((err) => {
            this.$toast.fail("网络连接失败");
          });
      }
    },
    // 输入防抖
    check() {
      throttleApi.throttle(this.checkPhone, 200);
    },
    checkPhone() {
      if (!/^1[34578]\d{9}$/.test(this.user.phone) && this.user.phone != "") {
        this.$notify("手机号码格式不正确");
      }
    },
    // 第三登录事件
    otherLogin() {
      this.$toast.success("正在通过第三方登录...");
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