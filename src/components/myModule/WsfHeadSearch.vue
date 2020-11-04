<template>
  <div class="wsf-head-container">
    <van-row type="flex" justify="center" align="center">
      <van-col span="19">
        <van-search
          v-model="value"
          clearable
          shape="round"
          placeholder="请输入搜索关键词"
          right-icon="search"
          left-icon=""
          style=""
        />
      </van-col>
      <van-col span="5">
        <van-image
          width="0.5rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/car%402x.png"
        ></van-image>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>
<style scoped>
.wsf-head-container {
  padding: 0.2rem 0;
}
</style>