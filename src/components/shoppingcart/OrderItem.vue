<template>
  <div class="order-item-container">
    <div class="item-main">
      <div class="goods-item-title">家具 Design</div>
      <div class="all-goods">
        <!-- 信息展示区 -->
        <div class="goods-card">
          <van-image
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/liuyanpic%402x.png"
          />
          <div class="goods-info">
            <span style="font-size: 0.32rem">木质设计感茶几</span>
            <span style="font-size: 0.26rem">400*400*560；黑胡桃木</span>
            <span>胡桃木色</span>
            <div class="goods-price">
              <span style="font-size: 0.38rem; color: red">￥290</span>
              <van-stepper v-model="count" />
            </div>
          </div>
        </div>
        <!-- 留言展示区 -->
        <van-field
          v-model="message"
          rows="1"
          autosize
          label="留言:"
          type="textarea"
          placeholder="请输入留言"
        />
      </div>
    </div>
    <div class="total-price">
      <span>共 1 件商品</span>
      <div class="price">
        <span>小计:</span>
        <span style="color: red">￥ 290</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      count: 1,
    };
  },
};
</script>
<style scoped lang='scss'>
.item-main {
  border-top: 0.2rem solid #ededed;
  .goods-item-title {
    height: 1rem;
    line-height: 1rem;
    font-size: 0.38rem;
    padding: 0 0.3rem;
    border-bottom: 1px solid #ededed;
  }
  .all-goods {
    padding: 0 0.3rem;
    .goods-card {
      width: 100%;
      display: flex;
      padding: 0.2rem 0;
      border-bottom: 1px solid #ededed;
      .goods-info {
        width: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .goods-price {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        span {
          margin: 0.04rem 0;
        }
      }
    }
    /deep/.van-field__label {
      width: 0.65rem;
    }
  }
}
.total-price {
  border-top: 1px solid #ededed;
  padding: 0 0.3rem;
  height: 0.8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.32rem;
  .price {
    margin-left: 0.5rem;
  }
}
</style>