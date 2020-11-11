<template>
  <div class="complain-container">
    <div class="complain-main">
      <!-- 信息展示区 循环数组-->
      <div v-for="complain in complainList" :key="complain.id">
        <div class="goods-card">
          <van-image
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/liuyanpic%402x.png"
          />
          <div class="goods-info">
            <span style="font-size: 0.32rem">木质设计感茶几</span>
            <span class="van-ellipsis" style="font-size: 0.26rem">
              投诉理由：{{ complain.reason }}
            </span>
            <span class="van-ellipsis" style="font-size: 0.26rem">
              投诉时间：{{ complain.time }}
            </span>
          </div>
        </div>
        <div class="refund-detail">
          <span style="font-size: 0.36rem">
            {{ complain.state }}
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
      complainList: [
        {
          id: 10011,
          state: "处理中",
          time: "2020-11-2",
          reason: "发送数量与拍下不符，商家未给出回复",
        },
        {
          id: 10012,
          state: "已驳回",
          time: "2020-11-2",
          reason: "发送数量与拍下不符，商家未给出回复",
        },
        {
          id: 10013,
          state: "处理完成",
          time: "2020-11-2",
          reason: "发送数量与拍下不符，商家未给出回复",
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
.complain-container {
  background-color: #ededed;
  .complain-main {
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