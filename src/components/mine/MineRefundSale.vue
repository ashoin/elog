<template>
  <div class="refund-sale-container">
    <div class="refund-sale-main">
      <!-- 信息展示区 循环数组 -->
      <div v-for="refund in refundList" :key="refund.id">
        <div class="goods-card">
          <van-image
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/liuyanpic%402x.png"
          />
          <div class="goods-info">
            <span style="font-size: 0.32rem">木质设计感茶几</span>
            <span style="font-size: 0.26rem">400*400*560；黑胡桃木</span>
            <span>胡桃木色</span>
            <div class="goods-price">
              <span style="font-size: 0.36rem; color: #f1bebe">
                退款金额：￥290
              </span>
            </div>
          </div>
        </div>
        <div class="refund-detail">
          <span style="font-size: 0.36rem">
            {{ refund.state }}
          </span>
          <van-button @click="toOrderComplainDetail">查看详情</van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      refundList: [
        {
          id: 10011,
          state: "退款中",
        },
        {
          id: 10012,
          state: "退款完成",
        },
      ],
    };
  },
  methods: {
    toOrderComplainDetail() {
      this.$router.push({
        name: "OrderComplainDetail",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.refund-sale-container {
  background-color: #ededed;
  .refund-sale-main {
    background-color: white;
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
    .refund-detail {
      height: 1rem;
      padding: 0 0.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .van-button {
        border: none;
        background-color: #db1111;
        color: white;
      }
      border-bottom: 0.2rem solid #ededed;
    }
  }
}
</style>