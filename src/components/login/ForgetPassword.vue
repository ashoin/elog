<template>
  <div class="forget-password-container">
    <!-- 头部导航信息nav -->
    <div class="forget-password-head">
      <van-image
        src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
        @click="$router.go(-1)"
      />
      <h3 class="head-title">忘记密码</h3>
    </div>
    <!-- 主体部分内容 v-if -->
    <div class="forget-password-main">
      <van-cell-group v-if="isShow">
        <van-field
          class="input"
          v-model="mobile"
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
          placeholder="请输入验证码"
        >
          <van-button slot="button" size="small" type="primary">
            获取验证码
          </van-button>
        </van-field>
      </van-cell-group>
      <van-cell-group v-else>
        <van-field
          class="input"
          v-model="mobile"
          center
          clearable
          border
          type="number"
          size="large"
          autosize=""
          placeholder="请输入新密码"
        />
        <van-field
          class="input"
          v-model="sms"
          center
          clearable
          placeholder="请再次输入新密码"
        >
        </van-field>
      </van-cell-group>
      <!-- 底部按钮转换 isShow -->
      <van-row>
        <van-button
          size="large"
          style="width: 60%; margin: 0.4rem 0"
          color="#D41C1C"
          @click="nextStep"
        >
          {{ next }}
        </van-button>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      mobile: "",
      sms: "",
      isShow: true,
      next: "下一步",
    };
  },

  methods: {
    onClickLeft() {
      this.$router.push("/login");
    },
    nextStep() {
      if (this.count == 0) {
        this.isShow = false;
        this.next = "确认修改";
        this.count++;
      } else if (this.count == 1) {
        this.next = "下一步";
        this.count = 0;
        this.isShow = true;
      }
    },
  },
};
</script>
<style scoped>
.forget-password-container {
  text-align: center;
}
.input {
  height: 1rem;
  width: 100%;
  font-size: 0.36rem;
  margin: 0.4rem 0;
  border: 1px solid silver;
}
.forget-password-head {
  display: flex;
  align-items: center;
  margin: 0 0.2rem;
}
.forget-password-main {
  width: 80%;
  margin: 0.4rem auto;
}
.van-image {
  width: 0.3rem;
  height: 0.5rem;
}
.head-title {
  flex-grow: 1;
}
</style>