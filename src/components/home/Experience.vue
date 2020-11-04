<template>
  <div class="experience-container">
    <!-- 头部标签组件 -->
    <head-info :title="title"></head-info>
    <div class="experience-main" v-for="item in experienceList" :key="item.id">
      <van-image :src="item.src"></van-image>
      <p>地址：{{ item.address }}</p>
      <div class="send-info">
        <van-button type="danger">发送至手机</van-button>
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
        text: "体验馆",
        src:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E4%BD%93%E9%AA%8C%E9%A6%86%E5%B0%8F%402x.png",
      },
      experienceList: [
        {
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E4%BD%93%E9%AA%8C%E9%A6%861%402x.png",
          address: "浙江省杭州市余杭区计划生育局231号",
          id: 10001,
        },
        {
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E4%BD%93%E9%AA%8C%E9%A6%862%402x.png",
          address: "浙江省杭州市余杭区计划生育局231号",
          id: 10002,
        },
      ],
    };
  },
};
</script>
<style scoped lang='scss'>
.experience-container {
  width: 95%;
  margin: 0.2rem;
  padding-bottom: 0.2rem;
  background-color: white;
}
.experience-main {
  width: 92%;
  margin: 0.2rem auto;
  display: flex;
  flex-direction: column;
  .send-info {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}
</style>