<template>
  <div class="setting-container">
    <!-- 头部设置标题 -->
    <div class="setting-head">
      <van-image
        width="0.2rem"
        height="0.5rem"
        src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
        @click="toMine"
      />
      <span>设置</span>
    </div>
    <!-- 主体部分只要单元格 -->
    <div class="setting-main">
      <!-- 循环单元格 -->
      <van-cell
        is-link
        :icon="item.src"
        v-for="item in settingItems"
        :key="item.id"
        :value="item.value"
        :to="item.to"
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">{{ item.text }}</span>
        </template>
      </van-cell>
      <van-cell>
        <!-- 使用 title extar 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">通知推送</span>
        </template>
        <template #extra>
          <van-switch
            v-model="checked"
            active-color="#ee0a24"
            inactive-color="#ededed"
          />
        </template>
      </van-cell>
    </div>
    <van-button class="setting-foot" @click="toLoginHome">
      退出当前账号
    </van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      settingItems: [
        {
          id: 10011,
          text: "关于我们",
          src: "",
          to: "/mine/setting/about",
        },
        {
          id: 10012,
          text: "意见反馈",
          src: "",
          to: "/mine/setting/message",
        },
        {
          id: 10013,
          text: "在线客服",
          src: "",
          to: "",
        },
        {
          id: 10014,
          text: "清除缓存",
          src: "",
          value: "45.64KB",
          to: "",
        },
      ],
    };
  },
  methods: {
    toMine() {
      this.$router.push({
        name: "Mine",
      });
    },
    toLoginHome() {
      this.$router.push({
        name: "LoginHome",
      });
    },
  },
};
</script>
<style scoped lang='scss'>
.setting-container {
  width: 100%;
  height: 100%;
  background-color: #ededed;
  .setting-head {
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
  .setting-main {
    padding-top: 1.4rem;
  }
  .setting-foot {
    margin-top: 0.4rem;
    width: 100%;
    height: 1rem;
    font-size: 0.36rem;
    color: #eb1313;
  }
}
</style>