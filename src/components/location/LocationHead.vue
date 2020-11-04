<template>
  <div class="location-head">
    <div class="head-search">
      <van-icon name="arrow-left" size="large" @click="toHome" />
      <input type="text" placeholder="请输入城市" />
      <div class="loaction-btn">搜索</div>
    </div>
    <div class="head-show">
      <span style="font-size: 0.34rem">当前定位：{{ nowLocation }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["nowLocation"],
  data() {
    return {};
  },
  methods: {
    toHome() {
      this.$router.push({
        name: "Home",
        query: { newLocation: this.nowLocation },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.location-head {
  width: 100%;
  background: white;
  .head-search {
    height: 1.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid silver;
    input {
      width: 70%;
      height: 0.6rem;
      border: 1px solid silver;
      text-indent: 0.2rem;
    }
  }
  .head-show {
    background-color: white;
    height: 0.9rem;
    padding: 0 0.3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid silver;
  }
}
</style>