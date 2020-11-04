<template>
  <div class="all-order-detail-container">
    <!-- 没有订单的情况 -->
    <div class="order-none" v-if="hasOrder">
      <van-empty
        class="custom-image"
        image="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E8%AE%A2%E5%8D%95/nulldan%402x.png"
        description="还没有提交订单哦"
      />
    </div>
    <div
      class="foreach-all-order"
      v-for="order in allOrderList"
      :key="order.id"
      v-else
    >
      <div class="detail-main">
        <div class="goods-item-title">
          <van-checkbox v-model="checked">家具 Design</van-checkbox>
          <span style="color: #f40">{{ order.status }}</span>
        </div>
        <div class="all-goods">
          <!-- 信息展示区 -->
          <div class="goods-card">
            <van-checkbox v-model="checked" />
            <van-image
              src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/liuyanpic%402x.png"
            />
            <div class="goods-info">
              <span style="font-size: 0.32rem">木质设计感茶几</span>
              <span style="font-size: 0.26rem">400*400*560；黑胡桃木</span>
              <span>胡桃木色</span>
              <div class="goods-price">
                <span style="font-size: 0.38rem">￥290</span>
                <span>x 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="total-price">
        <span>共 1 件商品</span>
        <div class="price">
          <span>小计:</span>
          <span>￥ 290</span>
        </div>
      </div>
      <div class="total-price">
        <van-button
          round
          style="margin-right: 0.2rem; border: 1px solid silver"
          v-if="order.isShow"
        >
          查看物流
        </van-button>
        <van-button
          round
          style="color: red; border: 1px solid red; min-width: 1.8rem"
        >
          {{ order.btnText }}
        </van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      hasOrder: false,
      allOrderList: [
        {
          id: 10011,
          status: "卖家已发货",
          isShow: true,
          btnText: "确认收货",
        },
        {
          id: 10012,
          status: "待发货",
          isShow: false,
          btnText: "提醒发货",
        },
        {
          id: 10013,
          status: "待评价",
          isShow: false,
          btnText: "评价",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.all-order-detail-container {
  background-color: white;
  .custom-image {
    background-color: #ededed;

    padding: 2rem 0;
    /deep/.van-empty__description {
      font-size: 0.38rem;
    }
  }
  .detail-main {
    border-top: 0.2rem solid #ededed;
    .goods-item-title {
      height: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.34rem;
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
    height: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.32rem;
    .price {
      margin-left: 0.5rem;
    }
  }
}
</style>