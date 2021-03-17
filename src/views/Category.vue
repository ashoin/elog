<template>
  <div class="category-container">
    <!-- 头部搜索组件 -->
    <div class="category-head">
      <wsf-head></wsf-head>
    </div>
    <!-- 中间主要内容 -->
    <div class="category-main">
      <!-- 左侧导航区 -->
      <div class="category-main-side">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="品类" />
          <van-sidebar-item title="空间" />
          <van-sidebar-item title="风格" />
        </van-sidebar>
      </div>
      <!-- 右侧展示区 -->
      <div class="category-main-show">
        <!-- 品类组件 -->
        <category-class v-if="activeKey == 0"></category-class>
        <!-- 空间组件 -->
        <category-space v-else-if="activeKey == 1"></category-space>
        <!-- 风格组件 -->
        <category-style v-else></category-style>
      </div>
    </div>
    <!-- 底部导航组件 -->
    <div class="category-foot">
      <wsf-foot :now-active="nowActive" />
    </div>
  </div>
</template>
<script>
import WsfFoot from "../components/myModule/WsfFoot";
import WsfHead from "../components/myModule/WsfHeadSearch";
import CategoryClass from "../components/category/CategoryClass";
import CategorySpace from "../components/category/CategorySpace";
import CategoryStyle from "../components/category/CategoryStyle";

export default {
  data() {
    return {
      nowActive: 1,
      activeKey: 0,
    };
  },
  components: {
    WsfFoot,
    WsfHead,
    CategoryClass,
    CategorySpace,
    CategoryStyle,
  },
};
</script>
<style scoped lang="scss">
.category-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.category-head {
  width: 100%;
  height: 1.4rem;
  position: fixed;
  background: #ffffff;
  z-index: 1;
  border-bottom: 1px solid silver;
  /deep/.van-search__content--round {
    border: 1px solid silver;
  }
}
// 注意会不会随之滚动
.category-main {
  margin: 1.4rem 0 1rem 0;
  width: 100%;
  .category-main-side {
    position: fixed;
    width: 1.6rem;
  }
  .category-main-show {
    margin-left: 1.6rem;
  }
}

/deep/.van-sidebar-item--select::before {
  height: 100%;
}
</style>