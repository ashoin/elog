<template>
  <div class="home-container">
    <!-- 头部导航信息 -->
    <div class="home-head">
      <div class="nav-bar">
        <!-- 左侧 -->
        <div class="left">
          <!-- 去设置地址 -->
          <div slot="left-icon" @click="toLocation($event)">
            {{ nowLocation }}
          </div>
          <van-icon name="arrow-down" />
        </div>
        <!-- 中间 -->
        <van-field
          class="title"
          placeholder="请输入关键字"
          center
          readonly
          @click="toSearch"
        >
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
    <div class="home-main">
      <!-- 轮播图 -->
      <banner />
      <!--  宫格-->
      <grid />
      <!-- 新品推荐 -->
      <new-goods />
      <!-- 主题推荐 -->
      <theme />
      <!-- 视频 -->
      <video-list />
      <!-- 全屋订制 -->
      <design-home />
      <!-- 预约设计师 -->
      <designer />
      <!-- 商品分类 -->
      <goods-category />
      <!-- 体验馆 -->
      <experience />
    </div>
    <!-- 底部导航信息 -->
    <div class="home-foot">
      <wsf-foot :now-active="nowActive" />
    </div>
  </div>
</template>
<script>
import Banner from "../components/home/Banner";
import Grid from "../components/home/Grid";
import NewGoods from "../components/home/NewGoods";
import Theme from "../components/home/Theme";
import VideoList from "../components/home/VideoList";
import DesignHome from "../components/home/DesignHome";
import Designer from "../components/home/Designer";
import GoodsCategory from "../components/home/GoodsCategory";
import Experience from "../components/home/Experience";
import WsfFoot from "../components/myModule/WsfFoot";
export default {
  components: {
    Banner,
    Grid,
    NewGoods,
    Theme,
    VideoList,
    DesignHome,
    Designer,
    GoodsCategory,
    Experience,
    WsfFoot,
  },
  data() {
    return {
      nowActive: 0,
      nowLocation: "杭州市",
    };
  },
  created() {
    if (this.$route.query.newLocation != undefined) {
      this.nowLocation = this.$route.query.newLocation;
    }
  },
  methods: {
    // 去设置地址的方法
    toLocation(e) {
      this.$router.push({
        name: "Location",
        query: { address: this.nowLocation },
      });
    },
    // 去搜索商品的方法
    toSearch() {
      this.$router.push("/home/search");
    },
  },
};
</script>
<style scoped lang='scss'>
.home-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  text-align: center;
}
.home-head {
  width: 100%;
  height: 1.4rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;
}
.left {
  display: flex;
  align-items: center;
  justify-content: center;
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
    font-size: 0.32rem;
    border: 1px solid;
    border-radius: 0.4rem;
    padding: 0 0.2rem;
    height: 50%;
  }
  .right {
    width: 20%;
  }
}
.home-main {
  width: 100%;
  margin: 1.4rem 0 1rem 0;
}
</style>