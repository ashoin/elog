<template>
  <div class="refund-res-container">
    <div class="refund-res-main" v-for="o in 3" :key="o.index">
      <van-image
        width="1.5rem"
        height="1.5rem"
        src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/designer%403x.png"
      />
      <div class="res-info">
        <div class="res-info-title">
          <span style="font-size: 0.38rem">家具 Design</span>
          <span>2020-11-2</span>
        </div>
        <span>您好，请您确认一下收货地址</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.refund-res-container {
  width: 100%;
  .refund-res-main {
    background-color: white;
    height: 2rem;
    padding: 0 0.2rem;
    border-bottom: 1px solid silver;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .res-info {
      padding: 0 0.2rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .res-info-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.2rem;
      }
    }
  }
}
</style>