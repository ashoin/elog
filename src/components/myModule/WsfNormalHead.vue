<template>
  <div class="normal-head">
    <van-image
      width="0.2rem"
      height="0.5rem"
      src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
      @click="toCart"
    />
    <span>确认订单</span>
  </div>
</template>
<script>
export default {
  props: [""],
  data() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.normal-head {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 1.2rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.2rem;
  border-bottom: 1px solid #ededed;
  span {
    font-size: 0.4rem;
    text-align: center;
    flex-grow: 1;
  }
}
</style>
