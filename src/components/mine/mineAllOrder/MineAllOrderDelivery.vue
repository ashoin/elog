<template>
  <div class="all-order-pay-container">
    <!-- 没有订单的情况 -->
    <div class="order-none" v-if="needDelivery">
      <van-empty
        class="custom-image"
        image="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E8%AE%A2%E5%8D%95/nulldan%402x.png"
        description="还没有提交订单哦"
      />
    </div>
    <div class="pay-main" v-else>
      <div
        class="foreach-all-order"
        v-for="order in allOrderList"
        :key="order.id"
      >
        <div class="detail-main">
          <div class="goods-item-title">
            <span>家具 Design</span>
            <span style="color: #f40">{{ order.status }}</span>
          </div>
          <div class="all-goods" @click="toOrderDeliveryDetail">
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
            @click="toLogistics"
          >
            查看物流
          </van-button>
          <van-button
            round
            style="color: red; border: 1px solid red; min-width: 1.8rem"
            @click="show = true"
          >
            {{ order.btnText }}
          </van-button>
          <van-overlay :show="show" @click="show = false">
            <div class="wrapper" @click.stop>
              <div class="block">
                <span>提示</span>
                <span>确认已收到商品吗？</span>
                <div class="btns">
                  <van-button @click="show = false">取消</van-button>
                  <van-button @click="deleteOrder">确认</van-button>
                </div>
              </div>
            </div>
          </van-overlay>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      show: false,
      allOrderList: [
        {
          id: 10011,
          status: "卖家已发货",
          isShow: true,
          btnText: "确认收货",
        },
      ],
    };
  },
  computed: {
    ...mapState("payOrder", {
      needDelivery: "needDelivery",
    }),
  },
  methods: {
    ...mapMutations("payOrder", {
      changeNeedEvaluate: "changeNeedEvaluate",
      changeNeedDelivery: "changeNeedDelivery",
    }),
    deleteOrder() {
      this.show = false;
      this.changeNeedDelivery(true);
      this.changeNeedEvaluate(false);
      // this.allOrderList = null;
      // this.hasOrder = true;
    },
    toLogistics() {
      this.$router.push({
        name: "OrderLogistics",
      });
    },
    toOrderDeliveryDetail() {
      this.$router.push({
        name: "OrderDeliveryDetail",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.all-order-pay-container {
  background-color: white;
  .custom-image {
    background-color: #ededed;

    padding: 2rem 0;
    /deep/.van-empty__description {
      font-size: 0.38rem;
    }
  }
  .pay-main {
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
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .block {
      width: 4rem;
      height: 2.5rem;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .van-button {
        width: 2rem;
      }
    }
    .price {
      margin-left: 0.5rem;
    }
  }
}
</style>