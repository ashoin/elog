<template>
  <div class="home-container">
    <!-- 头部导航信息 -->
    <div class="home-head">
      <div class="nav-bar">
        <!-- 左侧 -->
        <div class="left">
          <van-dropdown-menu slot="left-icon">
            <van-dropdown-item :value="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
        <!-- 中间 -->
        <van-field class="title" placeholder="请输入关键字" center>
          <van-dropdown-menu slot="left-icon">
            <van-dropdown-item :value="value1" :options="option1" />
          </van-dropdown-menu>
          <van-icon slot="right-icon" name="search" />
        </van-field>
        <!-- 右侧 -->
        <div class="right">
          <van-image
            width="30"
            height="30"
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%AF%BC%E8%88%AA%E8%B4%AD%E7%89%A9%E8%BD%A6%402x.png"
          />
        </div>
      </div>
    </div>
    <!-- 中间主体部分 -->
    <div class="home-mian">
      <!-- 轮播图 -->
      <banner></banner>
    </div>
    <!-- 底部导航信息 -->
    <div class="foot">
      <van-tabbar v-model="active">
        <van-tabbar-item>
          <span>首页</span>
          <img
            slot="icon"
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E9%A6%96%E9%A1%B5%E7%BA%A2%402x.png"
          />
        </van-tabbar-item>
        <van-tabbar-item>
          <span>分类</span>
          <img
            slot="icon"
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%88%86%E7%B1%BB%E7%81%B0%402x.png"
          />
        </van-tabbar-item>
        <van-tabbar-item>
          <span>秒杀</span>
          <img
            slot="icon"
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E7%A7%92%E6%9D%80%E7%81%B0%402x.png"
          />
        </van-tabbar-item>
        <van-tabbar-item>
          <span>购物车</span>
          <img
            slot="icon"
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E8%B4%AD%E7%89%A9%E8%BD%A6%E7%81%B0%402x.png"
          />
        </van-tabbar-item>
        <van-tabbar-item>
          <span>我的</span>
          <img
            slot="icon"
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E6%88%91%E7%9A%84%E7%81%B0%402x.png"
          />
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import Banner from "../components/home/Banner";
export default {
  components: {
    Banner,
  },
  data() {
    return {
      keywords: "",
      option1: [
        { text: "杭州", value: 0 },
        { text: "扬州", value: 1 },
        { text: "兰州", value: 2 },
      ],
      value1: 0,
      active: 0,
    };
  },
};
</script>
<style scoped lang='scss'>
.home-container {
  width: 100%;
  height: 100%;
  background-color: silver;
}
.home-head {
  width: 100%;
  height: 12%;
  background-color: white;
}
.van-dropdown-item {
  border: transparents;
}
.nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  .left {
    width: 20%;
  }
  .title {
    width: 55%;
    font-size: 16px;
    border: 1px solid;
    border-radius: 20px;
    padding: 0 10px;
    height: 50%;
  }
  .right {
    width: 20%;
  }
}
</style>