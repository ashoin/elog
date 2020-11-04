<template>
  <div class="video-container">
    <!-- 头部标题 -->
    <head-info :title="title"></head-info>
    <!-- 视频展示区 -->
    <div class="video-main">
      <van-grid :border="false" :column-num="2">
        <van-grid-item
          v-for="video in videoList"
          :key="video.id"
          style="margin: -0.32rem 0"
        >
          <van-image :src="video.src" />
          <p>{{ video.text }}</p>
        </van-grid-item>
      </van-grid>
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
        text: "视频",
        src:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E8%A7%86%E9%A2%91%402x.png",
      },
      videoList: [
        {
          id: 1001,
          text: "易高家具宣传片",
          time: "01:23:15",
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E8%A7%86%E9%A2%911%402x.png",
        },
        {
          id: 1002,
          time: "01:23:15",
          text: "易高家具宣传片",
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E8%A7%86%E9%A2%912%402x.png",
        },
        {
          id: 1003,
          time: "01:23:15",
          text: "易高家具宣传片",
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E8%A7%86%E9%A2%913%402x.png",
        },
        {
          id: 1004,
          time: "01:23:15",
          text: "易高家具宣传片",
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E8%A7%86%E9%A2%914%402x.png",
        },
      ],
    };
  },
};
</script>
<style scoped lang='scss'>
.video-container {
  width: 95%;
  margin: 0.2rem;
  background: white;
}
p {
  padding: 0;
}
</style>