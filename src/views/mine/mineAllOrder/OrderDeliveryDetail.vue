<template>
  <div class="delivery-detail-container">
    <!-- 头部标题栏 -->
    <div class="delivery-head">
      <!-- 标题 -->
      <div class="info-head-title">
        <van-image
          width="0.2rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
          @click="toMineAllOrder"
        />
        <span>订单详情</span>
      </div>
    </div>
    <div class="delivery-main">
      <!-- 商品当前位置 -->
      <div
        class="main-goods-location"
        @click="$router.push({ name: 'OrderLogistics' })"
      >
        <van-cell is-link>
          <template #title>
            <div>
              北京市【北京转运中心】已发出，正发往杭州市【杭州转运中心】
            </div>
            <div>2020-11-3 20:20</div>
          </template>
        </van-cell>
      </div>
      <!-- 地址 -->
      <div class="main-user-address">
        <div class="info-card">
          <div>
            <span style="margin-left: 0.45rem">张三</span>
            <span style="margin-left: 0.4rem"> 18888888888</span>
          </div>
          <div>
            <van-icon
              name="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/locate%402x.png"
            />
            <span style="margin: 0.2rem 0">
              详细地址：浙江省杭州市江干区反贪局
            </span>
          </div>
        </div>
        <van-image
          width="0.2rem"
          height="0.2rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/xiao_youjiantou%402x.png"
        />
      </div>
      <!-- 商品 家居 -->
      <div class="main-goods">
        <div class="goods-item-title">
          <span>家具 Design</span>
        </div>
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
                <span style="font-size: 0.38rem">
                  ￥ {{ addOrder.price / 100 }}
                </span>
                <span>x {{ addOrder.count }}</span>
              </div>
            </div>
          </div>
        </div>
        <div style="padding: 0.2rem">留言：无</div>
        <div class="btn">
          <van-button round style="min-width: 2rem" @click="toOrderRefund"
            >退款</van-button
          >
        </div>
      </div>
      <!-- 运费 实付款 -->
      <div class="main-freight">
        <van-cell title="运费">快递 免邮</van-cell>
        <van-cell title="实付款">
          <div slot="default" style="color: red">￥ {{ totalPrice }}</div>
        </van-cell>
      </div>
      <!-- 订单号 创建时间-->
      <div class="main-order-number">
        <van-cell>订单编号：121215212354432165757825</van-cell>
        <van-steps direction="vertical" :active="active">
          <van-step>创建时间：2020-11-3 20:00 </van-step>
          <van-step>付款时间：2020-11-3 20:00 </van-step>
          <van-step>发货时间：2020-11-3 20:00 </van-step>
        </van-steps>
      </div>
    </div>
    <!-- 底部付款栏 -->
    <div class="delivery-foot">
      <van-button @click="$router.push({ name: 'OrderLogistics' })">
        查看物流
      </van-button>
      <van-button color="red" @click="confirmReceive">确认收货</van-button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      active: 2,
      totalPrice: 0,
    };
  },
  computed: {
    ...mapState("newOrder", {
      addOrder: "addOrder",
    }),
  },
  created() {
    this.totalPrice = (this.addOrder.count * this.addOrder.price) / 100;
  },
  methods: {
    toMineAllOrder() {
      this.$router.push({
        name: "MineAllOrder",
        query: { tabIndex: "3" },
      });
    },
    toOrderRefund() {
      this.$router.push({
        name: "OrderRefund",
      });
    },
    confirmReceive() {
      this.$dialog
        .confirm({
          title: "确认收货",
        })
        .then(() => {
          this.$toast.success("已确认收货");
        })
        .catch(() => {
          this.$toast("已取消");
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.delivery-detail-container {
  height: 100%;
  background-color: #ededed;
  .info-head-title {
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
  .delivery-main {
    padding-top: 1.2rem;
    padding-bottom: 1rem;
    .main-goods-location {
      margin-top: 0.2rem;
      /deep/.van-cell--clickable {
        align-items: center;
      }
    }
    .main-user-address {
      height: 1.4rem;
      margin-top: 0.2rem;
      background-color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.3rem;
      font-size: 0.34rem;
    }
    .main-goods {
      background-color: white;
      margin-top: 0.2rem;
      .goods-item-title {
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.34rem;
        padding: 0 0.3rem;
        border-bottom: 1px solid #ededed;
      }
      .btn {
        height: 1rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 0.4rem;
        border-top: 1px solid #ededed;
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
    .main-freight {
      background-color: white;
      margin-top: 0.2rem;
    }
    .main-order-number {
      border-bottom: 0.2rem solid #ededed;
      background-color: white;
    }
  }
  .delivery-foot {
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background-color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .van-button {
      height: 1rem;
    }
    .foot-price {
      padding-left: 0.2rem;
      flex-grow: 1;
    }
  }
}
</style>