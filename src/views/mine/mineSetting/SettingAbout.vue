<template>
  <div class="setting-about-container">
    <!-- 头部标题和图片 -->
    <div class="about-head">
      <!-- 标题 -->
      <div class="about-head-title">
        <van-image
          width="0.2rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
          @click="toMineSetting"
        />
        <span>关于我们</span>
      </div>
      <!-- 图片 -->
      <div class="about-head-img">
        <van-image
          width="4rem"
          height="0.6rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/loglogo%403x.png"
        />
      </div>
    </div>
    <div class="about-main">
      <!-- 自定义单元格 -->
      <van-cell is-link v-for="item in aboutItems" :key="item.id">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">{{ item.text }}</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aboutItems: [
        {
          id: 10011,
          text: "功能介绍",
        },
        {
          id: 10012,
          text: "公司介绍",
        },
        {
          id: 10013,
          text: "检测新版本",
        },
      ],
    };
  },
  methods: {
    toMineSetting() {
      this.$router.push({
        name: "MineSetting",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.setting-about-container {
  background-color: #ededed;
  height: 100%;

  .about-head-title {
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
  .about-head-img {
    margin-top: 1.22rem;
    width: 100%;
    height: 3.4rem;
    background-color: #ededed;
    text-align: center;
    line-height: 3.4rem;
  }
}
</style>