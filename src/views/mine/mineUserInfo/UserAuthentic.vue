<template>
  <div class="user-authentic-container">
    <div class="authentic-head">
      <div class="info-head-title">
        <van-image
          width="0.2rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
          @click="toMineUserInfo"
        />
        <span>实名认证</span>
      </div>
    </div>
    <div class="authentic-main">
      <!-- 填写信息 -->
      <div class="authentic-main-submit" v-if="isSubmit == 1">
        <div class="authentic-name">
          <div>姓名</div>
          <input type="text" />
        </div>
        <div class="authentic-code">
          <div>身份证号</div>
          <input type="text" />
        </div>
        <van-button>提交审核</van-button>
      </div>
      <!-- 审核中 -->
      <div class="authentic-main-audit" v-else-if="isSubmit == 2">
        <div class="audit-icon">
          <img
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/loading%402x.png"
          />
          <span style="font-size: 0.5rem; margin-left: 0.2rem">审核中</span>
        </div>
        <van-cell title="姓名">铁锤妹妹</van-cell>
        <van-cell title="身份证号">352145****0321</van-cell>
      </div>
      <!-- 审核通过 -->
      <div class="authentic-main-pass" v-else>
        <div class="audit-icon">
          <img
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/mo%402x.png"
          />
          <span style="font-size: 0.5rem; margin-left: 0.2rem">认证成功</span>
        </div>
        <van-cell title="姓名">铁锤妹妹</van-cell>
        <van-cell title="身份证号">352145****0321</van-cell>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSubmit: 1,
    };
  },
  created() {
    this.showAuthentic();
  },
  methods: {
    toMineUserInfo() {
      this.$router.push({
        name: "MineUserInfo",
      });
    },
    showAuthentic() {
      setInterval(() => {
        this.isSubmit++;
      }, 5000);
    },
  },
};
</script>
<style scoped lang='scss'>
.user-authentic-container {
  width: 100%;
  height: 100%;
  background-color: #ededed;
  .authentic-head {
    width: 100%;
    .info-head-title {
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
  }
  .authentic-main {
    height: 100%;
  }
  .authentic-main-submit {
    height: 100%;
    background-color: white;
    margin-top: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.38rem;
    .authentic-name,
    .authentic-code {
      height: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      font-size: 0.38rem;
    }
    .van-button {
      margin-top: 1rem;
      width: 4rem;
      font-size: 0.34rem;
      color: white;
      background-color: #d51717;
    }
  }
  .authentic-main-audit,
  .authentic-main-pass {
    padding-top: 1.4rem;
    .audit-icon {
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
  }
}
</style>