<template>
  <div class="theme-container">
    <!-- 头部小组件 -->
    <head-info :title="title"></head-info>
    <!-- 主体部分 -->
    <div class="theme-main">
      <div class="theme-card" v-for="card in allCards" :key="card.id">
        <van-image width="2.4rem" height="2.8rem" :src="card.url" />
        <span>{{ card.text }}</span>
        <div class="icons">
          <div class="icon" v-for="icon in icons" :key="icon.id">
            <van-icon :name="icon.name" />
            <span>{{ icon.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeadInfo from "../myModule/HeadInfo";
export default {
  components: {
    HeadInfo,
  },
  data() {
    return {
      title: {
        text: "主题推荐",
        src:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E4%B8%BB%E9%A2%98%E6%8E%A8%E8%8D%90%402x.png",
      },
      icons: [
        {
          id: 1001,
          text: "5",
          name: "chat-o",
        },
        {
          id: 1002,
          text: "8",
          name: "star-o",
        },
        {
          id: 1003,
          text: "9",
          name: "like-o",
        },
      ],
      allCards: [
        {
          id: "10001",
          text: "小户型简约北欧风格",
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E4%B8%BB%E9%A2%981%402x.png",
        },
        {
          id: "10005",
          text: "小户型简约北欧风格",
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E4%B8%BB%E9%A2%982-%402x.png",
        },
        {
          id: "10002",
          text: "小户型简约北欧风格",
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E4%B8%BB%E9%A2%981%402x.png",
        },
        {
          id: "10003",
          text: "小户型简约北欧风格",
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E4%B8%BB%E9%A2%982-%402x.png",
        },
        {
          id: "10004",
          text: "小户型简约北欧风格",
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E4%B8%BB%E9%A2%981%402x.png",
        },
      ],
    };
  },
};
</script>
<style scoped lang='scss'>
.theme-container {
  width: 95%;
  margin: 0.2rem;
  background: white;
}
.theme-main {
  display: flex;
  padding-bottom: 0.2rem;
  overflow: scroll;
}
.theme-card {
  border: 1px solid silver;
  margin: 0 0.2rem;
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 0.26rem;
  .icons {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}
</style>