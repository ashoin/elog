<template>
  <div class="designer-container">
    <!-- 头部标题组件 -->
    <head-info :title="title"></head-info>
    <!-- 宫格组件 -->
    <van-grid>
      <van-grid-item v-for="designer in designerList" :key="designer.id">
        <van-image :src="designer.url" width="40" height="40"></van-image>
        <span style="margin-top: 0.2rem">{{ designer.text }}</span>
      </van-grid-item>
    </van-grid>
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
        text: "预约设计师",
        src:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E9%A2%84%E7%BA%A6%E8%AE%BE%E8%AE%A1%E5%B8%88%402x.png",
      },
      designerList: [
        {
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E8%AE%BE%E8%AE%A1%E5%B8%881%402x.png",
          text: "张伟",
          id: 10001,
        },
        {
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/piccircle%402x.png",
          text: "贺茂",
          id: 10002,
        },
        {
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E8%AE%BE%E8%AE%A1%E5%B8%881%402x.png",
          text: "程迪",
          id: 10003,
        },
        {
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/piccircle%402x.png",
          text: "许士林",
          id: 10004,
        },
        {
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E8%AE%BE%E8%AE%A1%E5%B8%881%402x.png",
          text: "何丽",
          id: 10005,
        },
        {
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/piccircle%402x.png",
          text: "张益达",
          id: 10006,
        },
        {
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E8%AE%BE%E8%AE%A1%E5%B8%881%402x.png",
          text: "许三多",
          id: 10007,
        },
        {
          url:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/piccircle%402x.png",
          text: "程式",
          id: 10008,
        },
      ],
    };
  },
};
</script>
<style scoped>
.designer-container {
  width: 95%;
  margin: 0.2rem;
  background-color: white;
}
</style>