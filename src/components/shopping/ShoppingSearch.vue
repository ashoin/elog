<template>
  <div class="search-container">
    <!-- 头部的搜索栏 -->
    <div class="search-head">
      <div class="head-search">
        <van-image
          width=".2rem"
          height="0.4rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
          @click="toHome"
        />
        <div class="search-input">
          <van-button>
            商品
            <van-icon name="arrow-down" />
          </van-button>
          <input type="text" placeholder="请输入关键字" />
        </div>
        <div class="loaction-btn">搜索</div>
      </div>
    </div>
    <!-- 中间的热搜素和历史记录 -->
    <div class="search-main">
      <!-- 热搜 -->
      <div class="main-hot-search">
        <p>大家都在搜</p>
        <div class="hot-search-list">
          <van-button v-for="item in hotSearch" :key="item.index">
            {{ item }}
          </van-button>
        </div>
      </div>
    </div>
    <!-- 历史 -->
    <div class="main-search-history">
      <p>历史记录</p>
      <div class="history-list" v-for="item in searchHistory" :key="item.index">
        <van-image
          width="0.4rem"
          height="0.4rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/history%402x.png"
        />
        <span>{{ item }}</span>
      </div>
    </div>
    <!-- 清空 -->
    <div class="clear-btn">
      <van-button
        icon="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/delete%402x.png"
      >
        清除搜索历史
      </van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotSearch: [
        "床头柜",
        "简洁双开门衣柜",
        "可爱冰箱",
        "现代文艺吊灯",
        "小清新客厅绿植",
        "儿童床",
      ],
      searchHistory: ["原木茶几", "北欧风格两用沙发床", "铁锤妹妹"],
    };
  },
  methods: {
    toHome() {
      this.$router.push("/home");
    },
  },
};
</script>
<style scoped lang='scss'>
p {
  font-size: 0.4rem;
  color: #9e9e9e;
  padding: 0.2rem;
  margin: 0;
}
.search-container {
  width: 100%;
}
.head-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.2rem;
  padding: 0 0.3rem;
  .search-input {
    display: flex;
    border: 1px solid silver;
    input {
      border: 1px solid transparent;
      font-size: 0.3rem;
    }
    .van-button {
      border: 1px solid transparent;
      font-size: 0.36rem;
    }
  }
  .loaction-btn {
    font-size: 0.38rem;
  }
}
.search-main {
  padding: 0 0.2rem;
  border-top: 1px solid #ededed;

  .hot-search-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .van-button {
      background-color: #ececec;
      font-size: 0.3rem;
      margin: 0.2rem 0;
    }
  }
}
.main-search-history {
  padding: 0 0.2rem;
  border-top: 0.2rem solid #ededed;
  .history-list {
    height: 1rem;
    padding: 0 0.2rem;
    border-top: 1px solid #ededed;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      font-size: 0.34rem;
      margin-left: 0.2rem;
    }
  }
}
.clear-btn {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .van-button {
    font-size: 0.34rem;
    border: 1px solid silver;
  }
}
</style>