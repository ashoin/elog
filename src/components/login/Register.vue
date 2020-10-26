<template>
  <div class="register-container">
    <!-- 注册的主体部分 -->
    <div class="register-main">
      <!-- 手机、验证码、密码、推荐号单元格信息 -->
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
          v-model="sms"
          center
          clearable
          left-icon="comment-o"
          placeholder="请输入短信验证码"
        >
          <van-button slot="button" size="small" type="primary">
            获取验证码
          </van-button>
        </van-field>
        <van-field
          class="input"
          v-model="password"
          center
          clearable
          type="password"
          left-icon="closed-eye"
          placeholder="请输入密码"
        />
        <van-field
          class="input"
          v-model="password"
          center
          clearable
          left-icon="friends-o"
          placeholder="请输入推荐码"
        />
      </van-cell-group>
    </div>
    <!-- 注册的底部部分包含点击按钮 -->
    <div class="register-foot">
      <van-row style="margin: 35px 0">
        <van-button color="#D41C1C" size="large" style="width: 60%">
          注册
        </van-button>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col>点击注册即表示您已经同意用户协议</van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobile: "",
      password: "",
      sms: "",
    };
  },
};
</script>
<style scoped>
.input {
  height: 50px;
  width: 100%;
  font-size: 18px;
  margin: 20px 0;
}

.register-container {
  width: 100%;
  height: 100%;
}
.register-main {
  width: 90%;
  height: 100%;
  margin: 20px auto;
}
</style>