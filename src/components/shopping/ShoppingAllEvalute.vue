<template>
  <div class="all-evalute-container">
    <!-- 头部导航区 -->
    <div class="evalute-head">
      <van-image
        width="0.2rem"
        height="0.5rem"
        src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
        @click="toShoppingDetail"
      />
      <span>用户评价</span>
    </div>
    <!-- 主体部分 -->
    <div class="evalute-main">
      <!-- 评价组件复用 -->
      <wsf-user-evalute :user-info-list="userInfoList" />
    </div>
  </div>
</template>
<script>
import WsfUserEvalute from "../myModule/WsfUserEvaluta";
export default {
  components: {
    WsfUserEvalute,
  },
  data() {
    return {
      userInfoList: "",
    };
  },
  created() {
    this.userInfoList = this.$route.query.list;
  },
  methods: {
    toShoppingDetail() {
      this.$router.push("/shopping");
    },
  },
};
</script>
<style scoped lang="scss">
.all-evalute-container {
  width: 100%;
  background-color: #ededed;
}
.evalute-head {
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
.evalute-main {
  padding-top: 1.22rem;
  width: 100%;
}
</style>