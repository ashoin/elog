<template>
  <div class="register-container">
    <!-- 注册的主体部分 -->
    <div class="register-main">
      <!-- 手机、验证码、密码、推荐号单元格信息 -->
      <van-cell-group>
        <van-field
          class="input"
          v-model="register.phone"
          left-icon="phone-o"
          center
          clearable
          border
          type="number"
          size="large"
          maxlength="11"
          placeholder="请输入手机号码"
          @blur="checkPhone"
        />
        <van-field
          class="input"
          v-model="register.code"
          center
          clearable
          left-icon="comment-o"
          placeholder="请输入短信验证码"
        >
          <van-button
            slot="button"
            size="small"
            type="primary"
            @click="getCode"
            v-if="isGetCode"
          >
            获取验证码
          </van-button>
          <van-button style="width: 2rem" size="small" slot="button" v-else>
            <van-count-down time="60000" format="ss" />
          </van-button>
        </van-field>
        <van-field
          class="input"
          v-model="register.password"
          center
          clearable
          type="password"
          left-icon="closed-eye"
          placeholder="请输入密码"
        />
        <van-field
          class="input"
          v-model="register.presentCode"
          center
          clearable
          left-icon="friends-o"
          placeholder="请输入推荐码"
        />
      </van-cell-group>
    </div>
    <!-- 注册的底部部分包含点击按钮 -->
    <div class="register-foot">
      <van-row style="margin: 0.7rem 0">
        <van-button
          color="#D41C1C"
          size="large"
          style="width: 60%"
          @click="submitInfo"
        >
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
import registerApi from "../../../api/register";
export default {
  data() {
    return {
      register: {
        phone: "",
        password: "",
        code: "",
        presentCode: "",
        username: "铁锤妹妹",
      },
      isGetCode: true,
      getCodeLock: false,
    };
  },
  methods: {
    // 手机号码限制
    checkPhone() {
      if (
        !/^1[34578]\d{9}$/.test(this.register.phone) &&
        this.register.phone != ""
      ) {
        this.$notify("手机号码格式不正确");
      } else {
        this.getCodeLock = true;
      }
    },
    // 获得验证码
    getCode() {
      console.log("gooooood");
      if (this.getCodeLock == true) {
        this.isGetCode = false;
        registerApi.getRegisterCode(this.register.phone).then((res) => {
          this.$toast.success("验证码发送成功");
        });
        setTimeout(() => {
          that.isGetCode = true;
        }, 60000);
      } else {
        this.$toast("请先输入手机号");
      }
    },
    // 点击注册
    submitInfo() {
      this.register.username = this.register.username + this.register.phone;
      registerApi
        .submitRegister(this.register)
        .then((res) => {
          console.log(res);
          if (res.data.code == 20000 && res.data.message == "成功") {
            this.$toast.success("注册成功");
            this.register = { username: "铁锤妹妹" };
          }
        })
        .catch((res) => {
          this.$toast.fail("注册失败");
        });
    },
  },
};
</script>
<style scoped>
.input {
  height: 1rem;
  width: 100%;
  font-size: 0.36rem;
  margin: 0.4rem 0;
}

.register-container {
  width: 100%;
  height: 100%;
}
.register-main {
  width: 90%;
  height: 100%;
  margin: 0.4rem auto;
}
</style>