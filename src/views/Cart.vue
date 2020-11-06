<template>
  <div class="cart-container">
    <!-- 头部标题 -->
    <div class="cart-head">
      <span>购物车({{ count }})</span>
      <!-- TODO count 为 0 的时候要将（）去除 -->
      <div @click="Edit(false)" v-if="$store.state.edit">编辑</div>
      <div @click="Edit(true)" v-else>完成</div>
    </div>
    <!-- 主体部分展示 -->
    <div class="cart-main">
      <!-- 如果购物车是空的情况下展示 -->
      <div class="cart-empty" v-if="!count">
        <van-empty
          class="custom-image"
          image="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/nullcar%402x.png"
          description="购物车还是空的"
        />
      </div>
      <!-- 如果购物车中有商品的情况下展示 -->
      <div class="cart-goods" v-else>
        <!-- 商品展示组件 -->
        <cart-goods-item
          :message="message"
          @childChange="childCheckAll"
          ref="child"
        />
      </div>
    </div>
    <!-- 底部结算区域 -->
    <div class="cart-up-foot">
      <!-- 结算 -->
      <van-submit-bar
        v-if="$store.state.edit"
        :price="$store.state.price"
        button-text="去结算"
        @submit="toOrderPay"
      >
        <!-- 重点的全选功能 -->
        <van-checkbox v-model="checked" @click="checkedAllGoods">
          全选
        </van-checkbox>
      </van-submit-bar>
      <!-- 删除和收藏 -->
      <div class="delete-collect" v-else>
        <van-checkbox v-model="checked">全选</van-checkbox>
        <van-button plain type="default">收藏</van-button>
        <van-button type="danger" @click="handleDelete">删除</van-button>
      </div>
    </div>
    <!-- 底部导航区 -->
    <div class="cart-foot">
      <wsf-foot :now-active="nowActive" />
    </div>
  </div>
</template>
<script>
import WsfFoot from "../components/myModule/WsfFoot";
import CartGoodsItem from "../components/shoppingcart/CartGoodsItem";
export default {
  components: {
    WsfFoot,
    CartGoodsItem,
  },
  data() {
    return {
      change: false,
      nowActive: 3,
      checked: false,
      count: 1,
      message: "",
    };
  },
  created() {
    if (this.$route.query.userMessage != "") {
      this.message = this.$route.query.userMessage;
    }
  },
  computed: {},
  methods: {
    // 删除按键方法
    handleDelete() {
      this.$dialog
        .confirm({
          title: "确认删除",
          message: "木质设计感茶几",
        })
        .then(() => {
          this.count = 0;
          this.$toast.success("删除成功");
        })
        .catch(() => {
          this.count = 3;
        });
    },
    // 去结算方法
    toOrderPay() {
      this.$router.push({
        name: "CartOrder",
        query: "",
      });
    },
    // 全选按键功能
    checkedAllGoods() {
      console.log(this.$refs.child.selectTotalPrice);
      if (this.checked == true) {
        this.$refs.child.checkedAll = true;
      } else {
        this.$refs.child.checkedAll = false;
      }
    },
    // 子传父
    childCheckAll(payload) {
      this.checked = payload;
    },
    // 编辑和完成的功能按键
    Edit(bool) {
      this.$store.commit("changeEdit", bool);
    },
  },
};
</script>
<style scoped lang='scss'>
.cart-container {
  width: 100%;
  height: 100%;
  background-color: #ededed;
  // 头部样式
  .cart-head {
    height: 1.2rem;
    width: 100%;
    line-height: 1.2rem;
    position: fixed;
    background-color: white;
    text-align: center;
    z-index: 1;
    // border-bottom: 1px solid #ededed;
    div {
      position: absolute;
      top: 0;
      right: 0.3rem;
      font-size: 0.32rem;
    }
    span {
      font-size: 0.4rem;
    }
  }
  // 中间部分
  .cart-up-foot {
    /deep/.van-submit-bar {
      bottom: 1.02rem;
    }
    // 点击修改和删除的样式
    .delete-collect {
      position: fixed;
      bottom: 1rem;
      left: 0;
      z-index: 1;
      background-color: white;
      width: 96%;
      height: 1.02rem;
      padding-left: 0.3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .van-checkbox {
        flex-grow: 1;
      }
      .van-button {
        width: 2rem;
      }
    }
  }
  .cart-main {
    padding: 1.2rem 0 2rem 0;
    border-top: 0.2rem solid #ededed;
    .van-empty {
      padding: 30% 0 70% 0;
    }
  }
}
</style>